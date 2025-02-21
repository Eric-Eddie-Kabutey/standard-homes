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

// Bijilo MSJ Plaza coordinates
const center = {
  lat: 13.4542, // Bijilo MSJ Plaza Latitude
  lng: -16.6767, // Bijilo MSJ Plaza Longitude
};

// Declare global window for Google Maps
declare global {
  interface Window {
    google: any;
  }
}

export default function GoogleMapComponent() {
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);
  const [duration, setDuration] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);

  useEffect(() => {
    const fetchDirections = async () => {
      const directionsService = new google.maps.DirectionsService();

      // Directions request
      directionsService.route(
        {
          origin: { lat: 13.4542, lng: -16.6767 }, // Bijilo MSJ Plaza (origin)
          destination: { lat: 13.5042, lng: -16.6521 }, // Example destination coordinates (e.g., Kololi)
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
            const route = result.routes[0].legs[0];
            setDistance(route.distance.text);
            setDuration(route.duration.text);
          } else {
            console.error("Error fetching directions:", status);
          }
        }
      );
    };
    fetchDirections();
  }, []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className="relative mx-28">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
            
          >
            <Marker position={center} />
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>

          {/* Card with additional information */}
          <div className="absolute top-2 right-2 bg-white p-5 shadow-lg rounded-xl max-w-xs w-full">
            <h2 className="text-lg font-semibold">
              Directions from Bijilo MSJ Plaza
            </h2>
            <p className="text-sm mt-2">Destination: Kololi</p>
            <p className="text-sm mt-1">Distance: {distance}</p>
            <p className="text-sm mt-1">Estimated Travel Time: {duration}</p>
            <p className="text-xs mt-2 text-gray-500">
              Powered by Google Maps API
            </p>
        </div>
      </div>
    </LoadScript>
  );
}
