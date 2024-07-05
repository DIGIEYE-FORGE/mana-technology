import { Card } from "@/components/card";
import { WeeklyLineChart } from "@/components/weekly-line-chart";

function IselDevPage() {
  return (
    <main className="grid h-full place-content-center">
      <Card className="grid aspect-square w-[50rem] flex-col place-content-center gap-4 p-6">
        <WeeklyLineChart />
      </Card>
    </main>
  );
}

export default IselDevPage;
