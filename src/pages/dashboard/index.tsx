import { Card } from "@/components/card";
import { ProgressCircle } from "@/components/progress-circle";

export default function DashboardPage() {
  return (
    <main className="grid w-full grid-flow-dense grid-cols-8 gap-3">
      <Card className="col-span-2 flex flex-col gap-2 p-6">
        <h1 className="text-center text-lg font-bold text-white">
          Safety hazard analysis
        </h1>
        <div className="flex w-full flex-wrap items-center justify-between gap-1">
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
      <Card className="col-span-3 row-span-9"></Card>
      <Card className="col-span-3 row-span-5"></Card>
      <Card className="col-span-2 row-span-3"></Card>
      <Card className="col-span-3 row-span-4"></Card>
      <Card className="col-span-2 row-span-4"></Card>
    </main>
  );
}
