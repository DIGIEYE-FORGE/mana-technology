import { useState } from "react";
import { Button } from "../ui/button";
function Ventillation() {
  const [data] = useState([
    {
      icon: "/co2.svg",
      name: "Oxygène",
      value: 25,
    },
    {
      icon: "/co2.svg",
      name: "co2",
      value: 25,
    },
    {
      icon: "/co2.svg",
      name: "no2",
      value: 25,
    },
    {
      icon: "seche.svg",
      name: "T. Sèche",
      value: 25,
    },
    {
      icon: "vites.svg",
      name: "T. Humide",
      value: 25,
    },
    {
      icon: "vites.svg",
      name: "Vitesse de l’air",
      value: 25,
    },
  ]);
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="flex items-center justify-center gap-2">
        <img src="/energy.svg" alt="" width={20} height={20} />
        Energie
        <span className="text-[#FAAC18]">150kw</span>
      </div>
      <div className="flex gap-2 divide-x-2 divide-white [&>*]:px-2">
        <div className="flex flex-1 items-center gap-2">
          <img src="/ventilateur.svg" alt="" width={100} height={100} />
          <div className="flex flex-col">
            <h3 className="font-semibold">Ventilateur N°1</h3>
            <h3 className="flex gap-2 text-3xl font-bold text-[#FAAC18]">
              <span>--</span>
              <span className="space-x-2">RPM</span>
            </h3>
            <div className="flex gap-2 text-xs">
              <span className="flex gap-1">
                M1
                <span className="text-[#FAAC18]/80">
                  0,1 <span>m/s</span>
                </span>
              </span>
              <span className="flex gap-1">
                M1
                <span className="text-[#FAAC18]/80">
                  0,1 <span>m/s</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center gap-2">
          <img src="/ventilateur.svg" alt="" width={100} height={100} />
          <div className="flex flex-col">
            <h3 className="font-semibold">Ventilateur N°2</h3>
            <h3 className="flex gap-2 text-3xl font-bold text-[#FAAC18]">
              <span>25</span>
              <span className="space-x-2">RPM</span>
            </h3>
            <div className="flex gap-2 text-xs">
              <span className="flex gap-1">
                M1
                <span className="text-[#FAAC18]/80">
                  0,1 <span>m/s</span>
                </span>
              </span>
              <span className="flex gap-1">
                M1
                <span className="text-[#FAAC18]/80">
                  0,1 <span>m/s</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-wrap justify-between">
        {data.map((item, index) => (
          <div className="flex flex-col items-center gap-1" key={index}>
            <div className="rounded-full bg-[#061781] p-4">
              <img
                src={item.icon ? item.icon : "/co2.svg"}
                alt=""
                width={35}
                height={35}
              />
            </div>

            <h3 className="text-sm font-light">{item.name}</h3>
            <h3 className="text-[#FAAC18]">{item.value}</h3>
          </div>
        ))}
      </div>
      <Button className="flex gap-2" variant={"ghost"}>
        <img src="plus.svg" alt="" width={20} height={20} />
        <span>Voir plus</span>
      </Button>
    </div>
  );
}

export default Ventillation;
