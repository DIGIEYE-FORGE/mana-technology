import { Progress } from "@/components/ui/progress";
interface EnginsProps {
  attribute: {
    name: string;
    label: string;
    disponibillite: "Disponible" | "Indisponible" | "Standby";
    icon: string;
    value: number;
  }[];
}

function Engins({ attribute }: EnginsProps) {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex gap-2 [&>*]:text-gray-400">
        <h3 className="w-[25%]">Engin</h3>
        <h3 className="w-[40%]">Utilisation</h3>
        <h3 className="w-[35%]">Disponibillité</h3>
      </div>
      <div className="flex h-[14rem] flex-col gap-2 overflow-auto">
        {attribute.map((engin, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex w-[25%] items-center gap-4">
              <span className="text-lg font-bold text-white">
                {engin.label}
              </span>
              <img src={engin.icon} alt={engin.name} className="size-[3rem]" />
            </div>
            <div className="relative h-[2rem] w-[40%]">
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
            <div className="flex flex-1 items-center gap-4">
              <div
                className={`size-5x rounded-full p-2 text-center ${
                  engin.disponibillite === "Disponible"
                    ? "bg-green-500"
                    : engin.disponibillite === "Indisponible"
                      ? "bg-red-500"
                      : "bg-yellow-500"
                }`}
              ></div>
              <span className="text-lg font-bold">{engin.disponibillite}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Engins;
