'use client';

import React, { createContext, useContext, useId, useState, useEffect } from 'react';
import { motion, AnimatePresence, Transition, Variants } from 'framer-motion';
import { X } from 'lucide-react';

interface MorphingDialogContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  uniqueId: string;
  transition?: Transition;
}

const MorphingDialogContext = createContext<MorphingDialogContextType | undefined>(undefined);

function useMorphingDialog() {
  const context = useContext(MorphingDialogContext);
  if (!context) {
    throw new Error('MorphingDialog components must be used within a MorphingDialog');
  }
  return context;
}

interface MorphingDialogProps {
  children: React.ReactNode;
  transition?: Transition;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function MorphingDialog({
  children,
  transition = { type: 'spring', bounce: 0.05, duration: 0.25 },
  isOpen: customIsOpen,
  onOpenChange,
}: MorphingDialogProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const uniqueId = useId();

  const isOpen = customIsOpen !== undefined ? customIsOpen : internalIsOpen;
  const setIsOpen = (value: React.SetStateAction<boolean>) => {
    const nextValue = typeof value === 'function' ? value(isOpen) : value;
    if (onOpenChange) {
      onOpenChange(nextValue);
    } else {
      setInternalIsOpen(nextValue);
    }
  };

  return (
    <MorphingDialogContext.Provider value={{ isOpen, setIsOpen, uniqueId, transition }}>
      {children}
    </MorphingDialogContext.Provider>
  );
}

interface MorphingDialogTriggerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export function MorphingDialogTrigger({
  children,
  className = '',
  style,
  onClick,
}: MorphingDialogTriggerProps) {
  const { setIsOpen, uniqueId, transition } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      transition={transition}
      onClick={(e) => {
        setIsOpen(true);
        onClick?.(e);
      }}
      className={`cursor-pointer ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface MorphingDialogContainerProps {
  children: React.ReactNode;
}

export function MorphingDialogContainer({ children }: MorphingDialogContainerProps) {
  const { isOpen, setIsOpen } = useMorphingDialog();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, setIsOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          />
          {children}
        </div>
      )}
    </AnimatePresence>
  );
}

interface MorphingDialogContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function MorphingDialogContent({
  children,
  className = '',
  style,
}: MorphingDialogContentProps) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.div
      layoutId={`dialog-${uniqueId}`}
      transition={transition}
      className={`z-50 ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface MorphingDialogImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function MorphingDialogImage({ src, alt, className = '' }: MorphingDialogImageProps) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.img
      layoutId={`dialog-image-${uniqueId}`}
      transition={transition}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

interface MorphingDialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function MorphingDialogTitle({ children, className = '' }: MorphingDialogTitleProps) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.h3
      layoutId={`dialog-title-${uniqueId}`}
      transition={transition}
      className={className}
    >
      {children}
    </motion.h3>
  );
}

interface MorphingDialogSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

export function MorphingDialogSubtitle({ children, className = '' }: MorphingDialogSubtitleProps) {
  const { uniqueId, transition } = useMorphingDialog();

  return (
    <motion.p
      layoutId={`dialog-subtitle-${uniqueId}`}
      transition={transition}
      className={className}
    >
      {children}
    </motion.p>
  );
}

interface MorphingDialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
  disableLayoutAnimation?: boolean;
  variants?: Variants;
}

export function MorphingDialogDescription({
  children,
  className = '',
  disableLayoutAnimation = false,
  variants,
}: MorphingDialogDescriptionProps) {
  const { uniqueId, transition } = useMorphingDialog();

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <motion.div
      layoutId={disableLayoutAnimation ? undefined : `dialog-description-${uniqueId}`}
      transition={transition}
      variants={variants || defaultVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MorphingDialogCloseProps {
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
}

export function MorphingDialogClose({ className = '', onClick }: MorphingDialogCloseProps) {
  const { setIsOpen } = useMorphingDialog();

  return (
    <button
      type="button"
      onClick={(e) => {
        setIsOpen(false);
        onClick?.(e);
      }}
      className={`absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-md transition-colors hover:bg-black/80 cursor-pointer ${className}`}
      aria-label="Close dialog"
    >
      <X size={16} />
    </button>
  );
}
