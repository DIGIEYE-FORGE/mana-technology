import React from "react";
import Color from "color";
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

  const cf = 0.3;

  return (
    <div
      style={{
        clipPath: `polygon(50% 0%, 0% 100%, 100% 100%)`,
        width: width,
        height: height,
        backgroundSize: "50% 100%, 100% 100%",
        backgroundRepeat: "no-repeat",
        // backgroundPosition: "100% 0%, 0% 0%",
        backgroundImage:
          `linear-gradient(to top, ${data
            .map((d, index) => {
              const color = Color(d.color);
              const start = index === 0 ? 0 : (cum[index - 1] * 100) / sum;
              const end = (cum[index] * 100) / sum;
              return `${color.hex()} ${start}%, ${color.darken(cf).hex()} ${end}%`;
            })
            .join(",")})
          ` +
          `,linear-gradient(to top, ${data
            .map((d, index) => {
              const color = Color(d.color);
              const start = index === 0 ? 0 : (cum[index - 1] * 100) / sum;
              const end = (cum[index] * 100) / sum;
              return `${color.darken(cf).hex()} ${start}%, ${color.darken(2 * cf).hex()} ${end}%`;
            })
            .join(",")})
          `,
      }}
    >
      {JSON.stringify(cum)}
    </div>
  );
}

export default Polygone;
