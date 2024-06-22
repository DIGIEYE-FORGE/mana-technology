import { Card } from "@/components/card";
import { homePageWidgets } from "./data";
import { DashboardWidget } from "@/components/dashboard-widget";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[80px] grid-cols-3 gap-3 sm:auto-rows-[96px] md:grid-cols-6 lg:grid-cols-12 lg:gap-4 2xl:grid-cols-[repeat(15,minmax(0,1fr))]">
      {homePageWidgets.map((widget, index) => (
        <Card key={index} className={widget.className}>
          <h1 className="text-center text-lg font-semibold">{widget.title}</h1>
          <DashboardWidget widget={widget} />
        </Card>
      ))}
    </main>
  );
}
