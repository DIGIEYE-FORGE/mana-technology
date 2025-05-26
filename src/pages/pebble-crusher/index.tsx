import UpBar from "./up-bar";
import UpCards from "./up-cards";
import LeftBar from "./left-bar";
import RightBar from "./right-bar";

const PebbleCrusher = () => {
  return (
    <div
      className="h-[100svh] overflow-auto"
      style={{
        backgroundImage:
          "linear-gradient(to left, #061991b1 75%, transparent 100%)",
      }}
    >
      <main className="mx-auto flex max-w-[1920px] flex-col gap-3">
        <UpBar />
        <main className="flex !h-fit flex-col gap-5 px-6 pb-6">
          <UpCards />
          <div className="flex justify-between">
            <LeftBar />
            <RightBar />
          </div>
        </main>
      </main>
    </div>
  );
};

export default PebbleCrusher;
