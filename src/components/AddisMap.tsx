'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FoodPost } from '../types/post';
import { Compass, Navigation, ExternalLink, Star, X } from 'lucide-react';
import { getAwardsUrl } from '../lib/awardsLinks';

interface AddisMapProps {
  posts: FoodPost[];
  activePost?: FoodPost | null;
  onSelectPost?: (post: FoodPost) => void;
}

export default function AddisMap({ posts, activePost, onSelectPost }: AddisMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  // Default selectedSpot to null so mobile map view is completely clean!
  const [selectedSpot, setSelectedSpot] = useState<FoodPost | null>(null);

  // GPS Near Me
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setIsLocating(false);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView(coords, 14);
        }
      },
      () => {
        setIsLocating(false);
        alert('Unable to retrieve location. Defaulting to Addis Ababa center.');
      },
      { timeout: 10000 }
    );
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    let L: any;
    import('leaflet').then((leaflet) => {
      L = leaflet.default || leaflet;
      
      if (!document.getElementById('leaflet-css-script')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css-script';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      const defaultCenter: [number, number] = [9.0050, 38.7750];
      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: 13,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      mapInstanceRef.current = map;

      // Add Real Location Pins for Restaurants
      posts.forEach((post, index) => {
        const coords: [number, number] = [
          post.latitude || 9.0050 + (index * 0.005 - 0.01),
          post.longitude || 38.7750 + (index * 0.006 - 0.015),
        ];

        const customIcon = L.divIcon({
          className: 'custom-map-marker',
          html: `<div style="background-color: #A81D1D; color: white; padding: 4px 8px; border-radius: 6px; font-weight: bold; font-size: 11px; box-shadow: 0 2px 8px rgba(0,0,0,0.4); font-family: Space Grotesk, sans-serif; white-space: nowrap; border: 1px solid white;">📍 ${post.restaurantName}</div>`,
          iconSize: [120, 24],
          iconAnchor: [60, 12],
        });

        const marker = L.marker(coords, { icon: customIcon }).addTo(map);
        marker.on('click', () => {
          setSelectedSpot(post);
          onSelectPost?.(post);
        });

        markersRef.current.push(marker);
      });
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [posts, onSelectPost]);

  return (
    <div className="relative w-full h-full bg-[#120907]">
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Dismissible popup card visible ONLY when pin is clicked */}
      {selectedSpot && (
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-auto max-w-md mx-auto">
          <div className="heritage-card p-3 rounded-2xl bg-[#1A1C1E] text-white border border-[#3A3E42] flex items-center gap-3 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedSpot(null)}
              className="absolute top-2 right-2 text-stone-400 hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-slate-800 shrink-0 border border-white/10">
              <Image
                src={selectedSpot.image}
                alt={selectedSpot.restaurantName}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col flex-1 min-w-0 pr-4">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#F59E0B]">
                <span className="font-bold uppercase tracking-wider">{selectedSpot.category}</span>
                <span className="text-white font-bold">{selectedSpot.priceFormatted}</span>
              </div>

              <h4 className="font-syne font-bold text-sm text-white truncate">
                {selectedSpot.restaurantName}
              </h4>
              <p className="text-[11px] font-body text-slate-300 truncate">
                📍 {selectedSpot.location}
              </p>

              <div className="flex items-center justify-between pt-1 mt-1 border-t border-white/10 text-xs font-mono">
                <button
                  onClick={() => onSelectPost?.(selectedSpot)}
                  className="text-[#A81D1D] hover:underline flex items-center gap-1 text-[11px] font-bold"
                >
                  <span>Inspect Review</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
                <a
                  href={getAwardsUrl(selectedSpot.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F59E0B] hover:underline text-[11px] font-bold"
                >
                  Vote ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
