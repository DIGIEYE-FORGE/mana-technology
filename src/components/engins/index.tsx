import { Progress } from "@/components/ui/progress";
interface EnginsProps {
  attribute: {
    name: string;
    label: string;
    disponibillite: "Disponible" | "Indisponible" | "Standby";
    icon: string;
    value: number;
    value2: number;
  }[];
}

function Engins({ attribute }: EnginsProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex gap-2 [&>*]:flex-1 [&>*]:text-gray-400">
        <h3 className="w-[25%]">Engin</h3>
        <h3 className="w-[35%]">Utilisation</h3>
        <h3 className="w-[40%]">Disponibillité</h3>
      </div>
      <div className="flex h-[14rem] flex-col gap-2 overflow-auto">
        {attribute.map((engin, index) => (
          <div key={index} className="flex flex-1 flex-wrap items-center gap-4">
            <div className="flex w-[25%] min-w-[3rem] items-center gap-2">
              <span className="text-sm font-bold text-white">
                {engin.label}
              </span>
              <img src={engin.icon} alt={engin.name} className="size-[3rem]" />
            </div>
            <div className="relative h-[2rem] flex-1">
              <Progress
                key={index}
                value={engin.value || 0}
                className="h-full w-full rounded-lg bg-[#2B50C0]/30"
                color="#D2DDFF"
              />
              <div className="absolute left-2 top-[10%]">
                <span className="font-bold text-[#2B50C0]">{engin.value}%</span>
              </div>
            </div>
            <div className="relative h-[2rem] flex-1">
              <Progress
                key={index}
                value={engin.value2 || 0}
                className="h-full w-full rounded-lg bg-[#2B50C0]/30"
                color="#D2DDFF"
              />
              <div className="absolute left-2 top-[10%]">
                <span className="font-bold text-[#2B50C0]">
                  {engin.value2}%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engins;
