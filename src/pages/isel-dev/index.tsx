import { Card } from "@/components/card";
import { CircularProgress } from "@/components/circular-progress";
function IselDevPage() {
  return (
    <main className="grid h-full place-content-center">
      <Card className="grid aspect-square w-96 place-content-center">
        <CircularProgress
          progress={50}
          strokeWidth={12.5}
          className="size-32 text-xs font-bold"
          color="#009AB6"
        />
      </Card>
    </main>
  );
}

export default IselDevPage;
