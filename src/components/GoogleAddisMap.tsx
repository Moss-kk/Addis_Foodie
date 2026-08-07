'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FoodPost } from '../types/post';
import { Compass, Navigation, ExternalLink, Star, MapPin } from 'lucide-react';
import { getAwardsUrl } from '../lib/awardsLinks';
import AddisMap from './AddisMap';

interface GoogleAddisMapProps {
  posts: FoodPost[];
  activePost?: FoodPost | null;
  onSelectPost?: (post: FoodPost) => void;
  overlayElement?: React.ReactNode;
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 9.0192,
  lng: 38.7525, // Addis Ababa Center
};

// Dark Obsidian Heritage Map Styling
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1A100C' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#D1C2BD' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#120907' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#3A2E2B' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#F59E0B' }] },
  { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#261915' }] },
  { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#3D251F' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0A0504' }] },
];

export default function GoogleAddisMap({ posts, activePost, onSelectPost, overlayElement }: GoogleAddisMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<FoodPost | null>(activePost || posts[0] || null);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  // Geolocation "Places Near Me"
  const handleLocateMe = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const coords = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setUserLocation(coords);
        setIsLocating(false);
        if (map) {
          map.panTo(coords);
          map.setZoom(14);
        }
      },
      () => {
        setIsLocating(false);
        alert('Unable to retrieve location. Defaulting to Addis Ababa center.');
      },
      { timeout: 10000 }
    );
  };

  // Fallback to Leaflet if API Key is missing or load error
  if (!apiKey || loadError) {
    return (
      <div className="relative w-full h-full">
        {overlayElement}
        <AddisMap posts={posts} activePost={activePost} onSelectPost={onSelectPost} />
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="relative w-full h-full bg-[#120907] flex items-center justify-center text-stone-400 font-mono text-xs">
        {overlayElement}
        <span>Loading Live Google Maps...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full bg-[#120907]">
      
      {/* Floating Category Chips Overlay rendered directly on top of the Map */}
      {overlayElement}

      {/* GPS Near Me Button in bottom right */}
      <button
        type="button"
        onClick={handleLocateMe}
        disabled={isLocating}
        className="absolute bottom-4 right-4 z-30 button-primary px-3 py-1.5 text-[11px] font-label uppercase tracking-wider rounded-xl text-white flex items-center gap-1.5 shadow-xl cursor-pointer"
      >
        <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
        <span>{isLocating ? 'Locating...' : 'Near Me'}</span>
      </button>

      {/* Google Map Canvas */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={13}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          styles: darkMapStyle,
          disableDefaultUI: false,
          zoomControl: true,
        }}
      >
        {/* User Location Blue Dot Marker */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={{
              path: google.maps.SymbolPath.CIRCLE,
              scale: 8,
              fillColor: '#3B82F6',
              fillOpacity: 1,
              strokeColor: '#FFFFFF',
              strokeWeight: 2,
            }}
          />
        )}

        {/* Seeded Restaurant Markers (Showing Restaurant Name labels) */}
        {posts.map((post, idx) => {
          const lat = post.latitude || 9.005 + (idx * 0.005 - 0.01);
          const lng = post.longitude || 38.775 + (idx * 0.006 - 0.015);
          const isSelected = selectedSpot?.id === post.id;

          return (
            <Marker
              key={post.id}
              position={{ lat, lng }}
              title={post.restaurantName}
              label={{
                text: post.restaurantName,
                color: isSelected ? '#FFFFFF' : '#F59E0B',
                fontSize: '11px',
                fontWeight: 'bold',
                className: 'bg-black/80 px-2 py-0.5 rounded border border-white/20 shadow-md translate-y-6',
              }}
              onClick={() => {
                setSelectedSpot(post);
                onSelectPost?.(post);
              }}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                scale: isSelected ? 9 : 7,
                fillColor: isSelected ? '#A81D1D' : '#F59E0B',
                fillOpacity: 1,
                strokeColor: '#FFFFFF',
                strokeWeight: 1.5,
              }}
            />
          );
        })}

        {/* Detailed Info Window Popup showing full restaurant review */}
        {selectedSpot && (
          <InfoWindow
            position={{
              lat: selectedSpot.latitude || 9.0192,
              lng: selectedSpot.longitude || 38.7525,
            }}
            onCloseClick={() => setSelectedSpot(null)}
          >
            <div className="p-2 max-w-[240px] text-stone-900 font-body flex flex-col gap-2">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-slate-900 border border-stone-200">
                <Image
                  src={selectedSpot.image}
                  alt={selectedSpot.restaurantName}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-1.5 right-1.5 bg-black/80 text-[#F59E0B] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                  {selectedSpot.priceFormatted}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#A81D1D]">
                    {selectedSpot.category}
                  </span>
                  <div className="flex items-center gap-0.5 text-[10px] font-bold text-amber-600">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{selectedSpot.rating || '4.8'}</span>
                  </div>
                </div>

                <h4 className="font-syne font-bold text-xs text-[#111827] mt-0.5 truncate">
                  {selectedSpot.restaurantName}
                </h4>
                <p className="text-[10px] text-stone-500 truncate">
                  📍 {selectedSpot.location}
                </p>
                <p className="text-[10px] text-stone-700 line-clamp-2 mt-1 leading-snug">
                  {selectedSpot.caption}
                </p>
              </div>

              <div className="flex items-center justify-between pt-1.5 border-t border-stone-200 text-[10px] font-mono">
                <button
                  type="button"
                  onClick={() => onSelectPost?.(selectedSpot)}
                  className="font-bold text-[#A81D1D] hover:underline"
                >
                  Inspect Review →
                </button>
                <a
                  href={getAwardsUrl(selectedSpot.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#F59E0B] hover:underline flex items-center gap-0.5"
                >
                  <span>Vote</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

    </div>
  );
}
