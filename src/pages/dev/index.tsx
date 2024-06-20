export default function DevPage() {
  return (
    <main className="grid place-content-center">
      <svg viewBox="0 0 100 100" className="size-72">
        <foreignObject x="0" y="0" width="100" height="100">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "conic-gradient(from 270deg, #ff4800 10%, #dfd902 35%, #20dc68, #0092f4, #da54d8 72% 75%, #ff4800 95%)",
            }}
          ></div>
        </foreignObject>

        <g
          style={{
            mixBlendMode: "lighten",
          }}
        >
          <rect x="0" y="0" width="100" height="100" fill="white" />
          <path
            d="M 50 96 a 46 46 0 0 1 0 -92 46 46 0 0 1 0 92"
            stroke="red"
            fill="none"
            strokeWidth={4}
            pathLength={100}
            strokeDasharray={100}
            strokeDashoffset={100 - 80}
            strokeLinecap="round"
          />
        </g>
      </svg>
    </main>
  );
}
