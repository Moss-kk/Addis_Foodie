'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  X,
  Send,
  MapPin,
  Bot,
  MessageSquare,
  User,
  ShieldCheck,
  Move
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
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

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

    // Simulate AI response logic
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
      {/* Highly Visible & Draggable Floating Trigger Badge */}
      <motion.div
        drag
        dragMomentum={false}
        className="fixed bottom-6 right-6 z-50 cursor-grab active:cursor-grabbing"
      >
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full text-white shadow-2xl transition-all border border-[#B8422E] cursor-pointer group"
          style={{
            backgroundColor: '#1A1C1E',
          }}
          aria-label="Open AI Foodie Live Chat Assistant"
        >
          <div className="relative">
            <Bot className="w-5 h-5 text-[#B8422E]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#1A1C1E] animate-pulse" />
          </div>
          <span className="text-xs font-label font-bold tracking-wide text-white">
            Chat with AI Foodie 💬
          </span>
          <Move className="w-3 h-3 text-slate-400 opacity-60 group-hover:opacity-100" />
        </motion.button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg rounded-lg shadow-2xl overflow-hidden flex flex-col h-[600px] max-h-[90vh] border"
              style={{
                backgroundColor: '#1A1C1E',
                color: '#F7F5F2',
                borderColor: '#2A2E33',
              }}
            >
              {/* Chat Window Header */}
              <div
                className="p-4 flex items-center justify-between border-b"
                style={{
                  backgroundColor: '#121416',
                  borderColor: '#2A2E33',
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-sm bg-[#B8422E] flex items-center justify-center text-white shadow-xs">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-medium text-base text-white">
                        Addis AI Assistant
                      </h3>
                      <span className="text-[9px] font-label font-bold px-2 py-0.5 rounded-sm bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase">
                        ONLINE
                      </span>
                    </div>
                    <span className="text-[11px] font-body text-slate-400">
                      Live food &amp; ETB price recommendation bot
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-sm hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Assistant"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Live Messaging Feed */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-[#141618]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === 'user' ? 'items-end' : 'items-start'
                    }`}
                  >
                    <div
                      className={`flex items-start gap-2.5 max-w-[88%] ${
                        msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      {/* Avatar */}
                      <div
                        className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs shrink-0 ${
                          msg.sender === 'user'
                            ? 'bg-slate-700 text-white'
                            : 'bg-[#B8422E] text-white'
                        }`}
                      >
                        {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                      </div>

                      {/* Bubble */}
                      <div
                        className={`p-3.5 rounded-md text-xs sm:text-sm font-body leading-relaxed border ${
                          msg.sender === 'user'
                            ? 'bg-[#B8422E] text-white border-[#B8422E]'
                            : 'bg-[#212428] text-[#F7F5F2] border-[#2A2E33]'
                        }`}
                      >
                        <p>{msg.text}</p>

                        {/* Attached Spot Recommendation Cards */}
                        {msg.spots && msg.spots.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 gap-2 pt-2 border-t border-white/15">
                            {msg.spots.map((spot, i) => (
                              <div
                                key={i}
                                className="p-2.5 rounded-sm bg-white/5 border border-white/10 flex items-center justify-between text-xs"
                              >
                                <div className="flex flex-col">
                                  <span className="font-label font-bold text-white">{spot.name}</span>
                                  <span className="text-[11px] text-slate-300">{spot.dish}</span>
                                  <span className="text-[10px] text-slate-400 flex items-center gap-1 pt-0.5">
                                    <MapPin className="w-3 h-3 text-[#B8422E]" />
                                    <span>{spot.location}</span>
                                  </span>
                                </div>
                                <span className="px-2 py-1 rounded-sm bg-[#B8422E]/20 text-[#B8422E] font-label font-bold text-xs border border-[#B8422E]/40 shrink-0">
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
                  <div className="flex items-center gap-2 text-xs font-label text-slate-400 bg-[#212428] p-3 rounded-md w-fit border border-[#2A2E33]">
                    <Bot className="w-4 h-4 text-[#B8422E] animate-spin" />
                    <span>AI Foodie Assistant is typing recommendations...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={handleSendMessage}
                className="p-3 border-t bg-[#121416] flex items-center gap-2"
                style={{ borderColor: '#2A2E33' }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type a message (e.g. Best Kitfo in Bole, Macchiato price)..."
                  className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-sm bg-[#1A1C1E] border border-[#3A3E42] text-[#F7F5F2] placeholder-slate-400 outline-none focus:border-[#B8422E] transition-colors"
                />

                <button
                  type="submit"
                  className="button-primary p-2.5 rounded-sm text-white flex items-center justify-center cursor-pointer shadow-xs"
                  title="Send Message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {/* Footer Indicator */}
              <div className="px-4 py-1.5 bg-[#0D0E10] text-[10px] font-label text-slate-400 flex items-center justify-between border-t border-[#2A2E33]">
                <div className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  <span>100% Itemized ETB Receipt Guarantee</span>
                </div>
                <span>Addis Foodies AI</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
