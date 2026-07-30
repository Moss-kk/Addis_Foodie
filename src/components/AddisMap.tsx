'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FoodPost } from '../types/post';
import { MapPin, Navigation, Compass, ExternalLink, Star } from 'lucide-react';

interface AddisMapProps {
  posts: FoodPost[];
  activePost?: FoodPost | null;
  onSelectPost?: (post: FoodPost) => void;
}

// Coordinates map for Addis Ababa neighborhood centers
const neighborhoodCoords: Record<string, [number, number]> = {
  'Bole': [8.9950, 38.7885],
  'Kazanchis': [9.0200, 38.7650],
  'Piassa': [9.0350, 38.7500],
  'Sarbet': [8.9900, 38.7350],
  'CMC': [9.0100, 38.8150],
  'Old Airport': [8.9800, 38.7450],
};

export default function AddisMap({ posts, activePost, onSelectPost }: AddisMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState<FoodPost | null>(activePost || posts[0] || null);

  // Calculate distance between two coordinates in km using Haversine formula
  const getDistanceKm = (lat1: number, lon1: number, lat2: number, lon2: number) => {
    const R = 6371; // Earth radius in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1);
  };

  // Handle "Near Me" GPS Geolocation
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);
    setLocationError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords: [number, number] = [pos.coords.latitude, pos.coords.longitude];
        setUserLocation(coords);
        setIsLocating(false);
        if (mapInstanceRef.current) {
          mapInstanceRef.current.setView(coords, 14);
        }
      },
      (err) => {
        setIsLocating(false);
        setLocationError('Unable to retrieve location. Defaulting to Bole Atlas, Addis Ababa.');
      },
      { timeout: 10000 }
    );
  };

  // Initialize Leaflet Map safely on Client Side
  useEffect(() => {
    if (typeof window === 'undefined' || !mapContainerRef.current) return;

    let L: any;
    import('leaflet').then((leaflet) => {
      L = leaflet.default || leaflet;
      
      // Inject Leaflet CSS dynamically if missing
      if (!document.getElementById('leaflet-css-script')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css-script';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      if (mapInstanceRef.current) return;

      const defaultCenter: [number, number] = [9.0050, 38.7750]; // Bole / Addis Ababa Center
      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: 13,
        zoomControl: false,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: 'bottomright' }).addTo(map);
      mapInstanceRef.current = map;

      // Add Restaurant Markers
      posts.forEach((post, index) => {
        const coords = neighborhoodCoords[post.neighborhood] || [
          9.0050 + (index * 0.006 - 0.015),
          38.7750 + (index * 0.008 - 0.02),
        ];

        const customIcon = L.divIcon({
          className: 'custom-map-marker',
          html: `<div style="background-color: #B8422E; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold; font-size: 11px; box-shadow: 0 2px 8px rgba(0,0,0,0.3); font-family: Space Grotesk, sans-serif; white-space: nowrap; border: 1px solid white;">${post.priceFormatted}</div>`,
          iconSize: [60, 24],
          iconAnchor: [30, 12],
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
    <div className="relative w-full h-[520px] rounded-lg overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] flex flex-col shadow-xs">
      
      {/* Map Header Control Overlay */}
      <div className="absolute top-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
        <div className="flex items-center gap-2 bg-[#1A1C1E] text-white px-3 py-1.5 rounded-md text-xs font-label uppercase tracking-wider border border-white/10 pointer-events-auto shadow-sm">
          <Compass className="w-4 h-4 text-[#B8422E] animate-pulse" />
          <span>Interactive Addis Food Map</span>
        </div>

        {/* GPS Near Me Button */}
        <button
          type="button"
          onClick={handleLocateMe}
          disabled={isLocating}
          className="button-primary px-3 py-1.5 text-xs font-label uppercase tracking-wider rounded-md text-white flex items-center gap-1.5 pointer-events-auto cursor-pointer shadow-xs"
        >
          <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
          <span>{isLocating ? 'Locating...' : 'Places Near Me'}</span>
        </button>
      </div>

      {/* Leaflet Map Canvas */}
      <div ref={mapContainerRef} className="w-full h-full z-10" />

      {/* Selected Spot Bottom Floating Preview Card */}
      {selectedSpot && (
        <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-auto max-w-md mx-auto">
          <div className="heritage-card p-3 rounded-md bg-[#1A1C1E] text-white border border-[#3A3E42] flex items-center gap-3 shadow-lg">
            <div className="relative w-20 h-20 rounded-sm overflow-hidden bg-slate-800 shrink-0 border border-white/10">
              <Image
                src={selectedSpot.image}
                alt={selectedSpot.restaurantName}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center justify-between text-[10px] font-label text-[#B8422E]">
                <span className="font-bold uppercase tracking-wider">{selectedSpot.category}</span>
                {userLocation && (
                  <span className="text-slate-300">
                    {getDistanceKm(userLocation[0], userLocation[1], neighborhoodCoords[selectedSpot.neighborhood]?.[0] || 9.0050, neighborhoodCoords[selectedSpot.neighborhood]?.[1] || 38.7750)} km away
                  </span>
                )}
              </div>

              <h4 className="font-display font-medium text-sm text-white truncate">
                {selectedSpot.restaurantName}
              </h4>
              <p className="text-[11px] font-body text-slate-300 truncate">
                {selectedSpot.location}
              </p>

              <div className="flex items-center justify-between pt-1 mt-1 border-t border-white/10 text-xs font-label">
                <span className="font-bold text-white">{selectedSpot.priceFormatted}</span>
                <button
                  onClick={() => onSelectPost?.(selectedSpot)}
                  className="text-[#B8422E] hover:underline flex items-center gap-1 text-[11px] font-bold"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
