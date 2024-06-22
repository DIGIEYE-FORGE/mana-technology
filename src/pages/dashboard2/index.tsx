import { Card } from "@/components/card";

function DashboardPage2() {
  return (
    <div className="grid h-fit w-full grid-cols-3 gap-4 lg:grid-cols-6 xl:grid-cols-9 [&>*]:min-h-[19rem]">
      <Card className="col-span-3">1</Card>
      <Card className="col-span-3">2</Card>
      <Card className="col-span-3">3</Card>
      <Card className="col-span-3">4</Card>
      <Card className="col-span-3">5</Card>
      <Card className="col-span-3">6</Card>
      <Card className="col-span-3">7</Card>
      <Card className="col-span-3">8</Card>
      <Card className="col-span-3">9</Card>
    </div>
  );
}

export default DashboardPage2;
