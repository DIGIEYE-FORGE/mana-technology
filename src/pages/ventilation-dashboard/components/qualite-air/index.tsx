import { CircularProgressChart } from "@/components/circular-progress-chart";

interface QualitAirProps {
  title: string;
  attributes: {
    telemetries: {
      name: string;
      serial: string;
      color: string;
      unit: string;
    }[];
  };
}
export const QualitAir = ({ title, attributes }: QualitAirProps) => {
  const { name, serial, color, unit, max } = attributes.telemetries[0];
  return (
    <div className="flex flex-col items-center justify-center">
      <h5 className="text-sm font-semibold">{title}</h5>

      <CircularProgressChart
        interval={5000}
        telemetry={{ name, serial }}
        color={color}
        className="size-[5.5rem]"
        unit={unit}
        max={max}
      />
    </div>
  );
};
