import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MapPin, X } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const PinIcon = new Icon({
  iconUrl: "/placeholder.png",
  iconSize: [40, 40],
});

export const MapModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} className="z-[90] mr-3 h-fit p-0">
          <MapPin className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="max-w-4xl gap-1 rounded-lg border-none text-white"
      >
        <DialogClose className="absolute right-2 top-2">
          <X className="absolute right-2 top-2" />
        </DialogClose>
        <h2 className="mb-4 text-xl font-bold">
          Disponibilité Engins pit SUD Location
        </h2>
        <div className="min-h-[30rem]">
          <MapContainer
            attributionControl={false}
            center={[29.9642596, -8.8221844]}
            zoom={10}
            maxZoom={18}
            minZoom={4}
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
            <Marker position={[29.9642596, -8.7221844]} icon={PinIcon}></Marker>
            <Marker position={[29.9642596, -8.8221844]} icon={PinIcon}></Marker>
            <Marker position={[29.9642596, -8.5221844]} icon={PinIcon}></Marker>
          </MapContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
};
