import UpBarFuturePage from "./up-bar";

function FuturePage() {
  return (
    <main className="relative mx-auto max-h-[1200px] w-full max-w-[1920px]">
      <UpBarFuturePage />
      <div
        className="h-[calc(100%-4rem)] w-full"
        style={{
          backgroundImage: "url('backgorund-future.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
    </main>
  );
}

export default FuturePage;
