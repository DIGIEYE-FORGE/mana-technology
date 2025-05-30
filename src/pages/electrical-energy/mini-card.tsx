import { cn } from "@/lib/utils";

interface MiniCardProps {
  value: string | number | React.ReactNode;
  className?: string;
}

const MiniCard = ({ value, className }: MiniCardProps) => {
  return (
    <div
      className={cn(
        "rounded-[10px] border bg-[#021E3F]/40 px-2 py-1 font-semibold",
        className,
      )}
    >
      {value}
    </div>
  );
};

export default MiniCard;
