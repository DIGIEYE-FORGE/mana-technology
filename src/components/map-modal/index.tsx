<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-explicit-any */

=======
>>>>>>> origin/hls-video
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import io from "socket.io-client";
<<<<<<< HEAD

import useSWR from "swr";
=======
>>>>>>> origin/hls-video
import axios from "axios";
import Loader from "../loader";

// Define marker interface for better type safety
interface VehicleMarker {
  lat: number;
  lng: number;
  serial: string;
  matricule: string;
}

// Custom pin icon
const PinIcon = new Icon({
  iconUrl: "/pin.png",
  iconSize: [30, 30],
});

// Component to center map on markers
const CenterMapView = ({ markers }: { markers: VehicleMarker[] }) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) {
      // Default center if no markers
      map.setView([29.9642596, -8.8221844], 10);
      return;
    }

    // Find the average position of all markers for a balanced center
    const avgLat = markers.reduce((sum, marker) => sum + marker.lat, 0) / markers.length;
    const avgLng = markers.reduce((sum, marker) => sum + marker.lng, 0) / markers.length;
    
    // Center the map on the average position
    map.setView([avgLat, avgLng], 15);
  }, [markers, map]);

  return null;
};

export const MapModal = () => {
 const [markers, setMarkers] = useState<
    {
      lat: number;
      lng: number;
      serial: string;
      matricule: string;
    }[]
  >([
    {
      serial: "350544503978333",
      lat: 30.2345183,
      lng: -8.4137433,
      matricule: "",
    },

    {
      serial: "350544504047476",
      lat: 30.2389033,
      lng: -8.4123633,
      matricule: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch initial vehicle locations
  useEffect(() => {
    const fetchVehicleLocations = async () => {
      try {
        const response = await axios.get(
          "https://stag.api.fleet.digieye.io/api/vehicule/associated-to-gps/temp",
          {
            headers: {
              Authorization: "Bearer 8948|shs5QGrFAQqJDgxKm5r3lvdIC5kFsBdvAEpBmClv",
            },
          }
        );

        const trackedImeis = [
          "350544503978333",
          "350544504047377",
          "350544504047476"
        ];

        const newMarkers: VehicleMarker[] = [];

        response.data?.payload?.forEach((engine: any) => {
          const currentData = engine.device_current_data;
          if (!currentData || !trackedImeis.includes(currentData.imei)) return;
          
          const coords = currentData.coordinates;
          if (!coords || !Array.isArray(coords) || coords.length < 2) return;

          newMarkers.push({
            lat: coords[1],
            lng: coords[0],
            serial: currentData.imei,
            matricule: currentData.matricule || "",
          });
        });

        setMarkers(newMarkers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching vehicle locations:", error);
        setIsLoading(false);
      }
    };

    fetchVehicleLocations();
  }, []);

  // Set up real-time location updates
  useEffect(() => {
    const socket = io("wss://stag.ws.fleet.digieye.io", {
      path: "/socket.io/",
      transports: ["websocket"],
      query: { EIO: 4 },
    });

    socket.on("connect", () => {
      console.log("Socket connected");
      socket.emit("join", [
        "350544503978333",
        "350544504047377",
        "350544504047476",
      ]);
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
      if (!data.lat || !data.lng || !data.serial) return;
      
      setMarkers((prev) => {
        const index = prev.findIndex((marker) => marker.serial === data.serial);
        if (index > -1) {
          const updated = [...prev];
          updated[index] = {
            ...updated[index],
            lat: data.lat,
            lng: data.lng,
          };
          return updated;
        }
        return [
          ...prev,
          {
            matricule: "",
            lat: data.lat,
            lng: data.lng,
            serial: data.serial,
          },
        ];
      });
    });

    socket.on("disconnect", () => console.log("Socket disconnected"));
    socket.on("error", (err) => console.error("Socket error:", err));

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="h-full">
      {isLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <MapContainer
          center={[29.9642596, -8.8221844]}
          zoom={10}
          maxZoom={18}
          minZoom={3}
          scrollWheelZoom={true}
          style={{ height: "100%" }}
        >
          {/* Base imagery layer */}
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP"
          />
          
          {/* Overlay with boundaries and place names */}
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          />

          {/* Render all markers */}
          {markers.map((marker) => (
            <Marker
              key={marker.serial}
              position={[marker.lat, marker.lng]}
              icon={PinIcon}
            >
              <Popup>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold">Engine Imei: </span>
                    <span className="text-sm font-medium">{marker.serial}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base font-bold">Matricule: </span>
                    <span className="text-sm font-medium">
                      {marker.matricule || "N/A"}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Component to handle centering the map */}
          <CenterMapView markers={markers} />
        </MapContainer>
      )}
    </div>
  );
};