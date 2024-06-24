import React from "react";

interface OjamilDevPageProps {
  data: {
    value: number;
    color: string;
    name: string;
  }[];
  width: number;
  height: number;
}

function Polygone({ data, width, height }: OjamilDevPageProps) {
  const sum = data?.reduce((acc, d) => acc + d.value, 0);
  const cum = data?.reduce((acc, d, index) => {
    if (index === 0) return [d.value];
    acc.push(acc[index - 1] + d.value);
    return acc;
  }, [] as number[]);

  return (
    <div
      style={{
        clipPath: `polygon(50% 0%, 0% 100%, 100% 100%)`,
        width: width,
        height: height,
        backgroundImage: `linear-gradient(to bottom, ${data
          .map(
            (d, index) =>
              `${d.color} ${index === 0 ? 0 : (cum[index - 1] * 100) / sum}% ${(cum[index] * 100) / sum}%`,
          )
          .join(",")})`,
      }}
    >
      {JSON.stringify(cum)}
    </div>
  );
}

export default Polygone;
