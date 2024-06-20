import { ColumnDef } from "@tanstack/react-table";

export type ProductionEquipmentType = {
  id: string;
  equipment: {
    label: string;
    type: "truck" | "dump-truck" | "tractor";
  };
  status: boolean;
  location: string;
  date: string;
};

export const columns: ColumnDef<ProductionEquipmentType>[] = [
  {
    accessorKey: "equipment",
    header: "Equipment",
    cell: ({ row }) => {
      const equipment: any = row.getValue("equipment");
      console.log(row.getValue("equipment"));
      return (
        <div className="grid min-w-fit grid-cols-3 items-center">
          <span className="col-span-2">{equipment.label}</span>
          <img src={`/${equipment.type}.svg`} alt={equipment.label} />
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
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      const location: string = row.getValue("location");
      return <div className="line-clamp-1 text-wrap">{location}</div>;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date: string = row.getValue("date");
      return <div className="min-w-fit text-nowrap">{date}</div>;
    },
  },
];
