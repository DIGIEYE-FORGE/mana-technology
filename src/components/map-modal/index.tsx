/* eslint-disable @typescript-eslint/no-explicit-any */

import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import io from "socket.io-client";

import useSWR from "swr";
import axios from "axios";
import Loader from "../loader";

const PinIcon = new Icon({
  iconUrl: "/pin.png",
  iconSize: [30, 30],
});

const MapUpdater = ({
  markers,
}: {
  markers: { lat: number; lng: number; serial: string }[];
}) => {
  const map = useMap();

  useEffect(() => {
    if (markers.length === 0) {
      // Default center
      map.setView([29.9642596, -8.8221844], 10);
      return;
    }

    // Count markers in each location
    const locationCounts: Record<string, number> = {};
    markers.forEach((marker) => {
      const key = `${marker.lat},${marker.lng}`;
      locationCounts[key] = (locationCounts[key] || 0) + 1;
    });

    // Find the location with the most markers
    let maxCount = 0;
    let bestLocation = [29.9642596, -8.8221844];
    for (const [location, count] of Object.entries(locationCounts)) {
      if (count > maxCount) {
        maxCount = count;
        bestLocation = location.split(",").map(Number) as [number, number];
      }
    }

    // Center the map on the location with the most markers
    map.setView(bestLocation as any, 18); // Increase the zoom level for better visibility
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

  const { isLoading, error } = useSWR(
    "enigineslocations",
    async () => {
      const response = await axios.get(
        "https://stag.api.fleet.digieye.io/api/vehicule/associated-to-gps/temp",
        {
          headers: {
            Authorization:
              "Bearer 8948|shs5QGrFAQqJDgxKm5r3lvdIC5kFsBdvAEpBmClv",
          },
        },
      );
      return response.data;
    },
    {
      onSuccess: (data) => {
        data?.payload?.forEach((engine: any) => {
          const currentData = engine.device_current_data;
          if (!currentData) return;
          if (
            currentData.imei === "350544503978333" ||
            currentData.imei === "350544504047377" ||
            currentData.imei === "350544504047476"
          ) {
            const coords = currentData.coordinates;
            setMarkers((prev) => {
              const index = prev.findIndex(
                (marker) => marker.serial === currentData.imei,
              );
              if (index > -1) {
                prev[index] = {
                  lat: coords[1],
                  lng: coords[0],
                  serial: currentData.imei,
                  matricule: currentData.matricule,
                };
                return [...prev];
              }
              return [
                ...prev,
                {
                  lat: coords[1],
                  lng: coords[0],
                  serial: currentData.imei,
                  matricule: currentData.matricule,
                },
              ];
            });
          }
        });
      },
    },
  );

  if (error) {
    console.error(error);
  }

  useEffect(() => {
    const socket = io("wss://stag.ws.fleet.digieye.io", {
      path: "/socket.io/",
      transports: ["websocket"],
      query: {
        EIO: 4,
      },
    });

    socket.on("connect", () => {
      console.log("connected");
      socket.emit("join", [
        "350544503978333",
        "350544504047377",
        "350544504047476",
      ]);
    });

    socket.on("joined", (room) => {
      console.log(`Joined room: ${room}`);
      // Additional logic related to the "joined" event
    });

    socket.on("message", (data) => {
      console.log("Received message:", data);
      if (!data.lat || !data.lng || !data.serial) return;
      setMarkers((prev) => {
        const index = prev.findIndex((marker) => marker.serial === data.serial);
        if (index > -1) {
          prev[index] = {
            ...prev[index],
            lat: data.lat,
            lng: data.lng,
            serial: data.serial,
          };
          return [...prev];
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

    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("error", (err) => {
      console.error("Socket error:", err);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    // <Dialog>
    //   <DialogTrigger asChild>
    //     <Button
    //       variant={"ghost"}
    //       className="absolute right-0 z-[90] mr-3 h-fit p-0"
    //     >
    //       <MapPin className="size-5" />
    //     </Button>
    //   </DialogTrigger>
    //   <DialogContent
    //     showCloseButton={false}
    //     className="max-w-4xl gap-4 rounded-lg border-none text-white"
    //   >
    //     <DialogClose className="absolute right-2 top-2">
    //       <X className="absolute right-2 top-2" />
    //     </DialogClose>
    //     <DialogTitle className="text-2xl font-bold">
    //       Localisation des engines
    //     </DialogTitle>
    <div className="h-full">
      {isLoading && markers.length === 0 ? (
        <div className="flex h-full items-center justify-center">
          <Loader />
        </div>
      ) : (
        <MapContainer
          attributionControl={false}
          center={[29.9642596, -8.8221844]}
          zoom={10}
          maxZoom={18}
          minZoom={0}
          scrollWheelZoom={false}
          style={{
            height: "100%",
          }}
        >
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
          />
          <TileLayer
            url="https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
            attribution="Labels &copy; Esri &mdash; Source: Esri, HERE, Garmin, FAO, NOAA, USGS, EPA, NPS"
          />

          {markers.map((marker) => (
            <Marker
              key={marker.serial} // Added key prop for better performance
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
                      {marker.matricule}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}

          <MapUpdater markers={markers} />
        </MapContainer>
      )}
    </div>
    // </DialogContent>
    // </Dialog>
  );
};
