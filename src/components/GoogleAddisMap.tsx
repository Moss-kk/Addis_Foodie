'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { FoodPost } from '../types/post';
import { Compass, Navigation, ExternalLink, MapPin } from 'lucide-react';
import AddisMap from './AddisMap';

interface GoogleAddisMapProps {
  posts: FoodPost[];
  activePost?: FoodPost | null;
  onSelectPost?: (post: FoodPost) => void;
}

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = {
  lat: 9.0192,
  lng: 38.7525, // Addis Ababa Center
};

// Dark Heritage Google Map Style Customization
const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#212121' }] },
  { elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#212121' }] },
  { featureType: 'administrative', elementType: 'geometry', stylers: [{ color: '#757575' }] },
  { featureType: 'poi', elementType: 'labels.text.fill', stylers: [{ color: '#757575' }] },
  { featureType: 'road', elementType: 'geometry.fill', stylers: [{ color: '#2c2c2c' }] },
  { featureType: 'road.highway', elementType: 'geometry.fill', stylers: [{ color: '#3c3c3c' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#000000' }] },
];

export default function GoogleAddisMap({ posts, activePost, onSelectPost }: GoogleAddisMapProps) {
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

  // Handle Geolocation "Places Near Me"
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
        alert('Unable to retrieve your location. Defaulting to Addis Ababa center.');
      },
      { timeout: 10000 }
    );
  };

  // If no API key provided or load error, fall back to Leaflet Map safely!
  if (!apiKey || loadError) {
    return <AddisMap posts={posts} activePost={activePost} onSelectPost={onSelectPost} />;
  }

  if (!isLoaded) {
    return (
      <div className="w-full h-[520px] rounded-2xl bg-stone-900 border border-[var(--border-subtle)] flex items-center justify-center text-stone-400 font-mono text-xs">
        Loading Google Maps Addis Ababa...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-stone-900 shadow-md">
      
      {/* Map Control Bar Header */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-[#1A1C1E] text-white px-3.5 py-1.5 rounded-lg text-xs font-label uppercase tracking-wider border border-white/10 pointer-events-auto shadow-md">
          <Compass className="w-4 h-4 text-[#F59E0B] animate-pulse" />
          <span>Google Maps Addis Ababa</span>
        </div>

        <button
          type="button"
          onClick={handleLocateMe}
          disabled={isLocating}
          className="button-primary px-3.5 py-1.5 text-xs font-label uppercase tracking-wider rounded-lg text-white flex items-center gap-1.5 pointer-events-auto cursor-pointer shadow-md"
        >
          <Navigation className={`w-3.5 h-3.5 ${isLocating ? 'animate-spin' : ''}`} />
          <span>{isLocating ? 'Locating...' : 'Places Near Me'}</span>
        </button>
      </div>

      {/* Google Map Container */}
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
        {/* User Geolocation Marker */}
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

        {/* Seeded Restaurant Markers */}
        {posts.map((post, idx) => {
          const lat = post.latitude || 9.005 + (idx * 0.005 - 0.01);
          const lng = post.longitude || 38.775 + (idx * 0.006 - 0.015);
          const isSelected = selectedSpot?.id === post.id;

          return (
            <Marker
              key={post.id}
              position={{ lat, lng }}
              onClick={() => {
                setSelectedSpot(post);
                onSelectPost?.(post);
              }}
              icon={{
                path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                scale: isSelected ? 7 : 5,
                fillColor: isSelected ? '#A81D1D' : '#F59E0B',
                fillOpacity: 1,
                strokeColor: '#FFFFFF',
                strokeWeight: 1.5,
              }}
            />
          );
        })}

        {/* Info Window Popover */}
        {selectedSpot && (
          <InfoWindow
            position={{
              lat: selectedSpot.latitude || 9.0192,
              lng: selectedSpot.longitude || 38.7525,
            }}
            onCloseClick={() => setSelectedSpot(null)}
          >
            <div className="p-1 max-w-[200px] text-stone-900 font-body">
              <h4 className="font-bold text-xs font-syne">{selectedSpot.restaurantName}</h4>
              <p className="text-[10px] text-stone-600 truncate">{selectedSpot.location}</p>
              <div className="flex items-center justify-between pt-1 mt-1 border-t text-[10px] font-mono">
                <span className="font-bold text-[#A81D1D]">{selectedSpot.priceFormatted}</span>
                <span className="uppercase text-amber-600 font-bold">{selectedSpot.category}</span>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

    </div>
  );
}
