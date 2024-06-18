import { Card } from "@/components/card";
import LineChartWidget from "@/components/line-chart-widget";
import { ProgressCircle } from "@/components/progress-circle";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ProductionEquipmentType,
  columns,
} from "./_components/production-table/columns";
import { DataTable } from "@/components/data-table";

const ProductionEquipment: ProductionEquipmentType[] = [
  {
    id: "1",
    equipment: {
      label: "Excavator",
      type: "truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "2",
    equipment: {
      label: "Bulldozer",
      type: "dump-truck",
    },
    status: false,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "3",
    equipment: {
      label: "Dump Truck",
      type: "tractor",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "4",
    equipment: {
      label: "Drill",
      type: "dump-truck",
    },
    status: false,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "5",
    equipment: {
      label: "Loader",
      type: "truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "6",
    equipment: {
      label: "Excavator",
      type: "truck",
    },
    status: false,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "7",
    equipment: {
      label: "Bulldozer",
      type: "dump-truck",
    },
    status: false,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "8",
    equipment: {
      label: "Dump Truck",
      type: "tractor",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "9",
    equipment: {
      label: "Drill",
      type: "dump-truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "10",
    equipment: {
      label: "Loader",
      type: "truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "11",
    equipment: {
      label: "Excavator",
      type: "truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "12",
    equipment: {
      label: "Bulldozer",
      type: "dump-truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "13",
    equipment: {
      label: "Dump Truck",
      type: "tractor",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
  {
    id: "14",
    equipment: {
      label: "Drill",
      type: "dump-truck",
    },
    status: true,
    location: "Beishen District",
    date: "2024-06-18",
  },
];

export default function DashboardPage() {
  return (
    // <main className="grid w-full grid-flow-dense auto-rows-[100px] grid-cols-8 gap-3">

    //   <Card className="col-span-3 row-span-9"> </Card>
    //   <Card className="col-span-3 row-span-5"></Card>
    //   <Card className="col-span-2 row-span-3"></Card>
    //   <Card className="col-span-3 row-span-4"></Card>
    //   <Card className="col-span-2 row-span-4"></Card>
    // </main>
    <main className="grid h-fit w-full gap-4 lg:grid-cols-2 3xl:grid-cols-[480px,1fr,540px] [&>*]:min-h-[10rem]">
      <Card className="flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-bold text-white">
          Safety hazard analysis
        </h1>

        <div className="flex w-full flex-wrap items-center justify-evenly gap-1">
          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={50}
              backgroundColor="#6d0c1a"
              gradientStartColor="#E80054"
              gradientEndColor="#F725D5"
            />

            <span className="text-sm">Safety hazards</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={88.34}
              backgroundColor="#055982"
              gradientStartColor="#00DAA0"
              gradientEndColor="#0083E1"
            />

            <span className="text-sm">Rectifications</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <ProgressCircle
              progress={33.57}
              backgroundColor="#948420"
              gradientStartColor="#C9DA00"
              gradientEndColor="#E19400"
            />

            <span className="text-sm">To be rectified</span>
          </div>
        </div>
      </Card>
      <Card className="row-span-3 p-6 text-xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero
        ipsa, delectus quae impedit explicabo architecto repellendus. Non, saepe
        laboriosam tempore fuga placeat assumenda unde earum voluptas voluptatem
        numquam est.
      </Card>
      <Card className="row-span-2 max-h-[30rem] p-4">
        <div className="flex h-full flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="rounded-xl bg-[#E80053] px-4 py-2"></span>
            <h2>Beishen District</h2>
          </div>
          <ScrollArea className="h-full w-full border-none">
            <DataTable columns={columns} data={ProductionEquipment} />
          </ScrollArea>
        </div>
      </Card>
      <Card className="h-[18rem] p-4">
        <LineChartWidget
          // title="Power consumption"
          attributes={{
            telemetries: [
              {
                area: true,
                name: "EST_PLANIFIE_ROCHE_CUMUL",
                color: "#E800534D",
                label: "Cumulative planifié",
                serial: "U9XQMQ1DXYT7LJIP",
              },
            ],
          }}
        />
      </Card>
      <Card className="h-[25rem]">5</Card>
      <Card className="row-span-2 max-h-[30rem] p-4">
        <div className="flex h-full flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="rounded-xl bg-[#FFC300] px-4 py-2"></span>
            <h2>Beishen District</h2>
          </div>
          <ScrollArea className="h-full w-full border-none">
            <DataTable columns={columns} data={ProductionEquipment} />
          </ScrollArea>
        </div>
      </Card>
    </main>
  );
}
