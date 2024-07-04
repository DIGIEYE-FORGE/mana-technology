import MachineFrame from "@/assets/machine-frame.svg?react";
import { AverageCircularProgressChart } from "./average-circular-progress-chart";
import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import SwipeableTabs from "@/components/SwipeableTabs";
import { cn } from "@/lib/utils";

interface PerformanceEnginsData {
  attributes: {
    name: string;
    telemetries: {
      name: string;
      label: string;
      serial: string;
      color: string;
    }[];
  }[];
  image: string;
  title: string;
  engineName?: string;
  imageClassName?: string;
}

export const PerformanceEngins = ({
  attributes,
  image,
  title,
  engineName = "",
  imageClassName = "",
}: PerformanceEnginsData) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Fragment>
      <h4 className="py-1 text-center text-lg font-semibold">{title}</h4>
      <SwipeableTabs
        value={activeTab}
        className="flex h-full w-full items-center"
      >
        {attributes.length > 1 && (
          <div className="flex h-full w-full flex-1 items-center justify-evenly">
            <div className="flex flex-col items-center gap-1">
              <div className="relative aspect-square h-20">
                <MachineFrame className="h-full w-full" />
                <div
                  className={cn(
                    "absolute bottom-0 right-4 z-10 w-24",
                    imageClassName,
                  )}
                >
                  <img src={image} alt="image" className="object-contain" />
                </div>
              </div>
              <div className="text-center text-sm font-semibold">
                {engineName}
              </div>
            </div>
            {attributes[0].telemetries.map((telemetry, index) => {
              const { color, label, ...rest } = telemetry;
              return (
                <div key={index} className="flex flex-col gap-2">
                  <div className="aspect-square h-20">
                    <AverageCircularProgressChart
                      telemetries={attributes.map(
                        (el) => el.telemetries[index],
                      )}
                      color={color}
                      {...rest}
                    />
                  </div>
                  <div className="text-center text-sm font-semibold">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {attributes.map((el, index) => {
          return (
            <div className="flex h-full w-full flex-1 items-center justify-evenly">
              <div key={index} className="flex flex-col items-center gap-1">
                <div className="relative aspect-square h-20">
                  <MachineFrame className="h-full w-full" />
                  <div
                    className={cn(
                      "absolute bottom-0 right-4 z-10 w-[5.7rem]",
                      imageClassName,
                    )}
                  >
                    <img src={image} alt="image" className="object-contain" />
                  </div>
                </div>
                <div className="text-center text-sm font-semibold">
                  {attributes[activeTab === 0 ? 0 : activeTab - 1].name}
                </div>
              </div>

              {el.telemetries.map((telemetry, index) => {
                const { color, label, ...rest } = telemetry;
                return (
                  <div key={index} className="flex flex-col gap-2">
                    <div className="aspect-square h-20">
                      <AverageCircularProgressChart
                        telemetries={[rest]}
                        color={color}
                        {...rest}
                      />
                    </div>
                    <div className="text-center text-sm font-semibold">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </SwipeableTabs>
      {activeTab > 0 && (
        <Button
          variant={"ghost"}
          onClick={() => setActiveTab((prev) => prev - 1)}
          className="absolute z-50 h-9 w-fit cursor-pointer"
        >
          <MoveLeft className="size-5" />
        </Button>
      )}
      {activeTab <
        (attributes.length > 1 ? attributes.length : attributes.length - 1) && (
        <Button
          variant={"ghost"}
          onClick={() => setActiveTab((prev) => prev + 1)}
          className="absolute right-2 z-50 h-9 w-fit cursor-pointer"
        >
          <MoveRight className="size-5" />
        </Button>
      )}
    </Fragment>
  );
};
