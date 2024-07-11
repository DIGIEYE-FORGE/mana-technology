/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MapPin, X } from "lucide-react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { DialogTitle } from "@radix-ui/react-dialog";

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
    map.setView(bestLocation as any, 12); // Increase the zoom level for better visibility
  }, [markers, map]);

  return null;
};

export const MapModal = () => {
  const [markers, setMarkers] = useState<
    {
      lat: number;
      lng: number;
      serial: string;
    }[]
  >([]);

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
      if (!data.lat || !data.lng || !data.serial) return;
      setMarkers((prev) => {
        const index = prev.findIndex((marker) => marker.serial === data.serial);
        if (index > -1) {
          prev[index] = {
            lat: data.lat,
            lng: data.lng,
            serial: data.serial,
          };
          return [...prev];
        }
        return [
          ...prev,
          {
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

  console.log(markers);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          className="absolute right-0 z-[90] mr-3 h-fit p-0"
        >
          <MapPin className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl gap-4 rounded-lg border-none text-white"
      >
        <DialogClose className="absolute right-2 top-2">
          <X className="absolute right-2 top-2" />
        </DialogClose>
        <DialogTitle className="text-2xl font-bold">
          Localisation des engines
        </DialogTitle>
        <div className="min-h-[30rem]">
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
              />
            ))}

            <MapUpdater markers={markers} />
          </MapContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
