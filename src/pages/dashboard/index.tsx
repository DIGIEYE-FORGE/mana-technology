import { Card } from "@/components/card";

export default function DashboardPage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[96px] grid-cols-9 gap-3">
      <Card className="col-span-2 row-span-2"></Card>
      <Card className="col-span-4 row-span-9"></Card>
      <Card className="col-span-3 row-span-5"></Card>
      <Card className="col-span-2 row-span-3"></Card>
      <Card className="col-span-3 row-span-4"></Card>
      <Card className="col-span-2 row-span-4"></Card>
    </main>
  );
}
