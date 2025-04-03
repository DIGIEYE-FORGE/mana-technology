import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

function TopLeftCorner() {
  return (
    <svg
      viewBox="0 0 169 118"
      fill="none"
      className="absolute left-0 top-0 aspect-[1.43] h-1/3 max-h-[6rem] -translate-x-0.5 -translate-y-0.5"
    >
      <path
        d="M2 115.625V77.75V26C2 12.7452 12.7452 2 26 2H111.75H166.625"
        stroke="url(#paint0_linear_2175_3)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2175_3"
          x1="84.3125"
          y1="2"
          x2="84"
          y2="230"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26E2B3" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function TopRightCorner() {
  return (
    <svg
      viewBox="0 0 169 118"
      fill="none"
      className="absolute right-0 top-0 aspect-[1.43] h-1/3 max-h-[6rem] -translate-y-0.5 translate-x-0.5"
    >
      <path
        d="M166.625 115.625V77.75V26C166.625 12.7452 155.88 2 142.625 2H56.875H2"
        stroke="url(#paint0_linear_2158_67)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2158_67"
          x1="84.3125"
          y1="2"
          x2="84.625"
          y2="235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#26E2B3" />
          <stop offset="1" stopColor="white" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BottomRightCorner() {
  return (
    <svg
      viewBox="0 0 169 118"
      fill="none"
      className="absolute bottom-0 right-0 aspect-[1.43] h-1/3 max-h-[6rem] translate-x-0.5 translate-y-0.5"
    >
      <path
        d="M166.625 2V39.875V91.625C166.625 104.88 155.88 115.625 142.625 115.625H56.875H2"
        stroke="url(#paint0_linear_2175_4)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2175_4"
          x1="84.3125"
          y1="115.625"
          x2="84"
          y2="-115"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#26E2B3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BottomLeftCorner() {
  return (
    <svg
      viewBox="0 0 169 118"
      fill="none"
      className="absolute bottom-0 left-0 aspect-[1.43] h-1/3 max-h-[6rem] -translate-x-0.5 translate-y-0.5"
    >
      <path
        d="M2 2V39.875V91.625C2 104.88 12.7452 115.625 26 115.625H111.75H166.625"
        stroke="url(#paint0_linear_2176_2)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2176_2"
          x1="84.3125"
          y1="115.625"
          x2="84"
          y2="-112"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#26E2B3" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Corners() {
  return (
    <>
      <TopLeftCorner />
      <TopRightCorner />
      <BottomRightCorner />
      <BottomLeftCorner />
    </>
  );
}

export function Card({ className, children, style, ...props }: CardProps) {
  return (
    <div
      className={cn("card relative bg-card/10", className)}
      style={{
        ...style,
      }}
      {...props}
    >
      <>{children}</>
      <Corners />
    </div>
  );
}
