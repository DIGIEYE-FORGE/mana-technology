import { JsonObject } from "@/utils/types";
import { ColumnDef } from "@tanstack/react-table";

export type ProductionEquipmentType = {
  id: string;
  equipment: string;
  disponibility: string | number | boolean | JsonObject;
  date: Date;
  status: boolean;
};

export const columns: ColumnDef<ProductionEquipmentType>[] = [
  {
    accessorKey: "equipment",
    header: "Equipment",
    cell: ({ row }) => {
      const equipment: any = row.getValue("equipment");
      return (
        <div className="grid min-w-fit grid-cols-3 items-center gap-2">
          <span className="col-span-2 line-clamp-1 text-wrap">{equipment}</span>
          <img src="/truck.svg" alt={equipment} className="size-6" />
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: boolean = row.getValue("status");
      return (
        <div className={`${status ? "text-[#BD8313]" : "text-[#B15050]"}`}>
          {status ? "STANDBY" : "NOT OK"}
        </div>
      );
    },
  },
  {
    accessorKey: "disponibility",
    header: "Disponibility",
    cell: ({ row }) => {
      const disponibility: string = row.getValue("disponibility");
      return (
        <div className="line-clamp-1 text-wrap text-center">
          {disponibility}%
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date: string = row.getValue("date");
      return <div className="min-w-fit text-nowrap">{date.split("T")[0]}</div>;
    },
  },
];
