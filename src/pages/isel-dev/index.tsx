import { Card } from "@/components/card";
import FlipCountdown from "@rumess/react-flip-countdown";

function IselDevPage() {
  return (
    <main className="grid h-full place-content-center">
      <Card className="flex aspect-square w-[30rem] flex-col gap-4 p-6">
        <FlipCountdown
          hideYear
          hideMonth
          theme="dark"
          endAt={"2024-12-12 01:26:58"}
        />
      </Card>
    </main>
  );
}

export default IselDevPage;
