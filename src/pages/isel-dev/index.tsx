import { Card } from "@/components/card";
import { HorizontalBarChart } from "@/components/horizontal-bar-chart";

const groups = [
  {
    name: "Arrachement",
    telemetries: [
      {
        name: "Réalisé",
        value: 400,
        color: "#FFDC8C",
      },
      {
        name: "Fore",
        value: 600,
        color: "#25A18E",
      },
    ],
  },
  {
    name: "Arrachement",
    telemetries: [
      {
        name: "Réalisé",
        value: 400,
        color: "green",
      },
      {
        name: "Planne",
        value: 600,
        color: "yellow",
      },
    ],
  },
];

function IselDevPage() {
  return (
    <main className="grid h-full place-content-center">
      <Card className="flex aspect-square w-96 flex-col gap-4 p-6">
        <h3 className="text-xl font-semibold">Performance avancement</h3>
        <HorizontalBarChart data={groups} className="h-1 flex-1 gap-8" />
      </Card>
    </main>
  );
}

export default IselDevPage;
