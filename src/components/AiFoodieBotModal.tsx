'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  MapPin,
  Bot,
  User,
  ShieldCheck,
  Minimize2,
  Maximize2
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
  spots?: { name: string; dish: string; price: string; location: string }[];
}

export default function AiFoodieBotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Live Chat Messages State (Initial Welcome Message)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: 'Selam! 👋 I am your Addis Foodies AI Assistant. Ask me anything about food recommendations, top Kitfo joints, coffee cafes, or ETB price breakdowns across Bole, Kazanchis, Piassa & Sarbet!',
      timestamp: 'Just now',
      spots: [
        { name: 'Habesha 2000', dish: 'Kitfo Special & Ayib', price: '450 ETB', location: 'Bole' },
        { name: 'Tomoca Coffee', dish: 'Ethiopian Macchiato', price: '120 ETB', location: 'Atlas & Piassa' },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userMsgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const query = userMsgText.toLowerCase();
      let botReplyText = `Here are the top verified recommendations for "${userMsgText}":`;
      let spots: ChatMessage['spots'] = [
        { name: 'Yod Abyssinia', dish: 'Special Cultural Feast', price: '650 ETB', location: 'Bole' },
        { name: 'Titich Gourmet Burger', dish: 'Classic Smash Burger', price: '320 ETB', location: 'Kazanchis' },
      ];

      if (query.includes('kitfo') || query.includes('bole') || query.includes('raw meat')) {
        botReplyText = 'Top verified recommendations for authentic Kitfo in Bole & Piassa:';
        spots = [
          { name: 'Tiru Kitfo Special', dish: 'Gurage Kitfo + Fresh Ayeb', price: '520 ETB', location: 'Bole Atlas' },
          { name: 'Habesha 2000', dish: 'Special Lebleb Kitfo', price: '450 ETB', location: 'Bole' },
          { name: 'Kakur Traditional', dish: 'Piassa Kitfo Platter', price: '490 ETB', location: 'Piassa' },
        ];
      } else if (query.includes('coffee') || query.includes('macchiato') || query.includes('cafe')) {
        botReplyText = 'Best cafes and Ethiopian Macchiato spots under 300 ETB:';
        spots = [
          { name: 'Tomoca Coffee', dish: 'Double Ethiopian Macchiato', price: '120 ETB', location: 'Piassa & Atlas' },
          { name: 'Galani Coffee', dish: 'Single Origin Pour Over', price: '180 ETB', location: 'Sarbet' },
        ];
      } else if (query.includes('fasting') || query.includes('veggie') || query.includes('shiro')) {
        botReplyText = 'Recommended Fasting & Veggie Spots in Kazanchis & Bole:';
        spots = [
          { name: 'Fin Fine Cultural', dish: 'Special Shiro & Gomen', price: '220 ETB', location: 'Kazanchis' },
          { name: 'Yod Abyssinia', dish: 'Traditional Beyaynetu Platter', price: '280 ETB', location: 'Bole' },
        ];
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botReplyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        spots,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Compact & Non-Intrusive Floating Circular Trigger Badge */}
      <motion.div
        drag
        dragMomentum={false}
        className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 cursor-grab active:cursor-grabbing"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="relative w-12 h-12 rounded-full text-white shadow-2xl flex items-center justify-center border border-[#B8422E] cursor-pointer group"
          style={{
            backgroundColor: '#1A1C1E',
          }}
          aria-label="Open AI Foodie Assistant"
          title="AI Foodie Assistant"
        >
          <Bot className="w-5 h-5 text-[#B8422E] group-hover:scale-110 transition-transform" />
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1A1C1E] animate-pulse" />
        </motion.button>
      </motion.div>

      {/* Modal / Floating Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <div
            className={`fixed z-50 transition-all ${
              isMinimized
                ? 'bottom-20 right-4 w-72 h-14'
                : 'inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[580px] p-2 sm:p-0'
            }`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full h-full rounded-lg shadow-2xl overflow-hidden flex flex-col border"
              style={{
                backgroundColor: '#1A1C1E',
                color: '#F7F5F2',
                borderColor: '#2A2E33',
              }}
            >
              {/* Chat Window Header */}
              <div
                className="p-3 sm:p-4 flex items-center justify-between border-b shrink-0"
                style={{
                  backgroundColor: '#121416',
                  borderColor: '#2A2E33',
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-sm bg-[#B8422E] flex items-center justify-center text-white shadow-xs">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-display font-medium text-xs sm:text-sm text-white">
                        Addis AI Assistant
                      </h3>
                      <span className="text-[8px] font-label font-bold px-1.5 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                        ONLINE
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  {/* Minimize / Shrink Toggle */}
                  <button
                    onClick={() => setIsMinimized(!isMinimized)}
                    className="p-1 rounded-sm hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title={isMinimized ? 'Expand Chat' : 'Minimize Chat'}
                  >
                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-sm hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Close Assistant"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Window Body (Hidden when Minimized) */}
              {!isMinimized && (
                <>
                  {/* Live Messaging Feed */}
                  <div className="flex-1 p-3.5 overflow-y-auto flex flex-col gap-3 bg-[#141618]">
                    {messages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex flex-col ${
                          msg.sender === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`flex items-start gap-2 max-w-[90%] ${
                            msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                          }`}
                        >
                          {/* Avatar */}
                          <div
                            className={`w-6 h-6 rounded-sm flex items-center justify-center text-xs shrink-0 ${
                              msg.sender === 'user'
                                ? 'bg-slate-700 text-white'
                                : 'bg-[#B8422E] text-white'
                            }`}
                          >
                            {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                          </div>

                          {/* Bubble */}
                          <div
                            className={`p-3 rounded-md text-xs font-body leading-relaxed border ${
                              msg.sender === 'user'
                                ? 'bg-[#B8422E] text-white border-[#B8422E]'
                                : 'bg-[#212428] text-[#F7F5F2] border-[#2A2E33]'
                            }`}
                          >
                            <p>{msg.text}</p>

                            {/* Attached Spot Recommendation Cards */}
                            {msg.spots && msg.spots.length > 0 && (
                              <div className="mt-2.5 grid grid-cols-1 gap-1.5 pt-2 border-t border-white/15">
                                {msg.spots.map((spot, i) => (
                                  <div
                                    key={i}
                                    className="p-2 rounded-sm bg-white/5 border border-white/10 flex items-center justify-between text-xs"
                                  >
                                    <div className="flex flex-col">
                                      <span className="font-label font-bold text-white text-[11px]">{spot.name}</span>
                                      <span className="text-[10px] text-slate-300">{spot.dish}</span>
                                      <span className="text-[9px] text-slate-400 flex items-center gap-1 pt-0.5">
                                        <MapPin className="w-2.5 h-2.5 text-[#B8422E]" />
                                        <span>{spot.location}</span>
                                      </span>
                                    </div>
                                    <span className="px-1.5 py-0.5 rounded-sm bg-[#B8422E]/20 text-[#B8422E] font-label font-bold text-[10px] border border-[#B8422E]/40 shrink-0">
                                      {spot.price}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}

                            <span
                              className={`block text-[9px] font-label mt-1 ${
                                msg.sender === 'user' ? 'text-white/70 text-right' : 'text-slate-400'
                              }`}
                            >
                              {msg.timestamp}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* Live Typing Indicator */}
                    {isTyping && (
                      <div className="flex items-center gap-2 text-xs font-label text-slate-400 bg-[#212428] p-2.5 rounded-md w-fit border border-[#2A2E33]">
                        <Bot className="w-3.5 h-3.5 text-[#B8422E] animate-spin" />
                        <span>AI Assistant is typing...</span>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Chat Input Bar */}
                  <form
                    onSubmit={handleSendMessage}
                    className="p-2.5 border-t bg-[#121416] flex items-center gap-2"
                    style={{ borderColor: '#2A2E33' }}
                  >
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Ask AI Bot (e.g. Kitfo in Bole, Macchiato)..."
                      className="flex-1 px-3 py-2 text-xs rounded-sm bg-[#1A1C1E] border border-[#3A3E42] text-[#F7F5F2] placeholder-slate-400 outline-none focus:border-[#B8422E] transition-colors"
                    />

                    <button
                      type="submit"
                      className="button-primary p-2 rounded-sm text-white flex items-center justify-center cursor-pointer shadow-xs"
                      title="Send Message"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>

                  {/* Footer Indicator */}
                  <div className="px-3 py-1 bg-[#0D0E10] text-[9px] font-label text-slate-400 flex items-center justify-between border-t border-[#2A2E33]">
                    <div className="flex items-center gap-1 text-emerald-400">
                      <ShieldCheck className="w-3 h-3" />
                      <span>ETB Price Guarantee</span>
                    </div>
                    <span>Addis Foodies AI</span>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
