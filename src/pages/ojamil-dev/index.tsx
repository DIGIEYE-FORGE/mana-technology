import Polygone from "./polygone";

function OjamilDevPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Polygone
        width={400}
        height={400}
        data={[
          { value: 100, color: "#02c6e8", name: "A" },
          { value: 200, color: "#09e158", name: "B" },
          { value: 100, color: "#ff0606", name: "C" },
          { value: 100, color: "#e0f000", name: "D" },
        ]}
      />
    </div>
  );
}

export default OjamilDevPage;
