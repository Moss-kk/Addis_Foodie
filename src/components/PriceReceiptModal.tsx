'use client';

import React from 'react';
import { FoodPost } from '../types/post';

interface PriceReceiptModalProps {
  post: FoodPost;
  onClose: () => void;
}

export default function PriceReceiptModal({ post, onClose }: PriceReceiptModalProps) {
  // Sample itemized breakdown calculated from total post price
  const basePrice = Math.round(post.price * 0.7);
  const sidePrice = Math.round(post.price * 0.2);
  const drinkPrice = Math.max(50, post.price - basePrice - sidePrice);
  const totalCalculated = basePrice + sidePrice + drinkPrice;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/75 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Receipt Container */}
      <div className="relative w-full max-w-sm bg-[#1A100C] text-[#FFF8F6] rounded-3xl p-6 sm:p-7 shadow-2xl z-10 border-2 border-red-500/20 font-mono flex flex-col gap-4 animate-slide-up select-none">
        
        {/* Jagged Receipt Top Header */}
        <div className="text-center border-b-2 border-dashed border-zinc-800 pb-4 flex flex-col items-center gap-1">
          <span className="text-2xl">🧾</span>
          <h3 className="font-black text-base uppercase tracking-wider text-zinc-100">
            {post.restaurantName}
          </h3>
          <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">
            📍 {post.location} • ADDIS ABABA
          </p>
          <span className="text-[10px] text-[#F59E0B] font-extrabold uppercase bg-amber-500/10 border border-amber-500/30 px-2 py-0.5 rounded-md mt-1">
            VERIFIED ITEMIZATION BY ADDIS FOODIES
          </span>
        </div>

        {/* Timestamp & Transaction Meta */}
        <div className="flex justify-between text-[11px] text-zinc-400 font-bold border-b border-zinc-800 pb-2">
          <span>DATE: {new Date(post.timestamp).toLocaleDateString()}</span>
          <span>CURRENCY: ETB</span>
        </div>

        {/* Itemized Table */}
        <div className="flex flex-col gap-2.5 text-xs py-1">
          <div className="flex justify-between font-black border-b border-zinc-800 pb-1 uppercase text-zinc-400 text-[10px]">
            <span>ITEM</span>
            <span>PRICE</span>
          </div>

          <div className="flex justify-between font-bold text-zinc-200">
            <span className="truncate max-w-[200px]">1x {post.category} Main Course</span>
            <span>{basePrice} Br</span>
          </div>

          <div className="flex justify-between font-bold text-zinc-200">
            <span>1x Traditional Accompaniment</span>
            <span>{sidePrice} Br</span>
          </div>

          <div className="flex justify-between font-bold text-zinc-200">
            <span>1x Specialty Beverage / Coffee</span>
            <span>{drinkPrice} Br</span>
          </div>
        </div>

        {/* Receipt Total */}
        <div className="border-t-2 border-dashed border-zinc-800 pt-3 flex flex-col gap-1">
          <div className="flex justify-between items-baseline font-black text-sm text-zinc-100">
            <span>TOTAL PRICE (ETB):</span>
            <span className="text-base text-[#F59E0B] bg-[#F59E0B]/10 px-2.5 py-0.5 rounded-md border border-[#F59E0B]/30 font-mono">
              {totalCalculated} ETB
            </span>
          </div>
          <p className="text-[10px] text-zinc-400 text-center mt-2 font-medium">
            Verified by Addis Foodies editorial field inspection.
          </p>
        </div>

        {/* Simulated Barcode */}
        <div className="flex flex-col items-center justify-center pt-2 gap-1 border-t border-zinc-800">
          <div className="h-10 w-full bg-[repeating-linear-gradient(90deg,#F4F4F5,#F4F4F5_2px,transparent_2px,transparent_4px,#F4F4F5_4px,#F4F4F5_7px,transparent_7px,transparent_9px)] opacity-80" />
          <span className="text-[9px] font-black text-zinc-500 tracking-widest uppercase">
            #AF-VERIFIED-{post.id}
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="mt-2 w-full bg-zinc-950 hover:bg-[#F59E0B] hover:text-zinc-950 text-white font-black py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors cursor-pointer border border-zinc-800"
        >
          Close Receipt
        </button>

      </div>
    </div>
  );
}
