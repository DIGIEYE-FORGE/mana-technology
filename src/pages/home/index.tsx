import { Card } from "@/components/card";

export default function HomePage() {
  return (
    <main className="grid w-full grid-flow-dense auto-rows-[76px] gap-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-9 row-span-3"></Card>
      <Card className="col-span-3 row-span-3"></Card>
      <Card className="col-span-6 row-span-3"></Card>
      <Card className="col-span-6 row-span-3"></Card>
    </main>
  );
}
