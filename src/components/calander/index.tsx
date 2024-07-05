/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePickerWithRange({
  className,
  date: initialDate,
  onChange,
}: React.HTMLAttributes<HTMLDivElement> & {
  date?: DateRange;
  onChange?: (date: DateRange | undefined) => void;
}) {
  const [date, setDate] = React.useState<DateRange | undefined>(initialDate);

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button id="date" variant={"ghost"} size={"icon"}>
            <CalendarIcon className="size-6" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="dark w-auto border-none bg-[#0F162B]/90 p-0 backdrop-blur-md"
          align="start"
        >
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={(date: any) => {
              setDate(date);
              onChange?.(date || undefined);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
