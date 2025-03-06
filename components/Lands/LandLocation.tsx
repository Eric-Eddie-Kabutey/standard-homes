"use client";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";

// Map container style
const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// Update center to Tujereng's coordinates
const center = {
  lat: 13.3164,
  lng: -16.7960,
};

// Declare global window for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
}

export default function LandLocation() {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [setDuration] = useState<string | null>(null);
  const [setDistance] = useState<string | null>(null);

  useEffect(() => {
    const fetchDirections = async () => {
      const directionsService = new google.maps.DirectionsService();

      // Directions request (from Bijilo MSJ Plaza to Tujereng)
      directionsService.route(
        {
          origin: { lat: 13.4542, lng: -16.6767 }, // Bijilo MSJ Plaza (origin)
          destination: { lat: 13.3164, lng: -16.7960 }, // Tujereng (destination)
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            // const route = result?.routes[0].legs[0];
            // setDistance(route?.distance?.text || null);
            // setDuration(route?.duration?.text || null);
          } else {
            console.error("Error fetching directions:", status);
          }
        }
      );
    };
    fetchDirections();
  }, []);

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <div className="relative md:mx-28 ">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} />
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </div>
    </LoadScript>
  );
}
