import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

function MainProjectUpBar() {
  return (
    <div className="h-up-bar group sticky top-0 z-10 flex w-[calc(10)] shrink-0 items-center gap-4 border-b px-6 backdrop-blur">
      <Link to="/">
        <Button variant="ghost">
          <MoveLeftIcon className="size-6" />
        </Button>
      </Link>
      <Link to="/underground" className="ml-auto">
        <Button variant="ghost">
          <MoveRightIcon className="size-6" />
        </Button>
      </Link>
    </div>
  );
}

export default function MainProjectPage() {
  return (
    <main className="mx-auto flex max-w-[1920px] flex-col gap-6 pb-6">
      <MainProjectUpBar />
      <main className="px-6">main project</main>
    </main>
  );
}
