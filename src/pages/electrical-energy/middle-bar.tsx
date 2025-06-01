import MiniCard from "./mini-card";
import EnergySVG from "./components";

interface MiddleBarProps {
  line1: boolean;
  line2: boolean;
  crushing: boolean;
  plant1: boolean;
  plant2: boolean;
  mine: boolean;
  grinding: boolean;
  reagents: boolean;
  flotation: boolean;
  concentrate: boolean;
  tailing: boolean;
  sulfide: boolean;
  oxyde: boolean;
  regrinding: boolean;
  sag: boolean;
  ball: boolean;
  valueLeft: string | number;
  valueRight: string | number;
  activePowerLeft: string | number;
  reactivePowerLeft: string | number;
  totalPowerLeft: string | number;
  cosPhiLeft: string | number;
  vaLeft: string | number;
  vbLeft: string | number;
  vcLeft: string | number;
  iaLeft: string | number;
  ibLeft: string | number;
  icLeft: string | number;
  activePowerRight: number;
  reactivePowerRight: string | number;
  totalPowerRight: string | number;
  cosPhiRight: string | number;
  vaRight: string | number;
  vbRight: string | number;
  vcRight: string | number;
  iaRight: string | number;
  ibRight: string | number;
  icRight: string | number;
  vaMiddle: number;
  vbMiddle: number;
  vcMiddle: string | number;
  iCrushing: string | number;
  pCrushing: string | number;
  iProcess: string | number;
  pProcess: string | number;
  iMine: number;
  pMine: number;
  iArray: string[] | number[];
  pArray: string[] | number[];
}

const MiddleBar = ({
  line1,
  line2,
  crushing,
  plant1,
  plant2,
  mine,
  grinding,
  reagents,
  flotation,
  concentrate,
  tailing,
  sulfide,
  oxyde,
  regrinding,
  sag,
  ball,
  valueLeft,
  valueRight,
  activePowerLeft,
  reactivePowerLeft,
  totalPowerLeft,
  cosPhiLeft,
  vaLeft,
  vbLeft,
  vcLeft,
  iaLeft,
  ibLeft,
  icLeft,
  activePowerRight,
  reactivePowerRight,
  totalPowerRight,
  cosPhiRight,
  vaRight,
  vbRight,
  vcRight,
  iaRight,
  ibRight,
  icRight,
  vaMiddle,
  vbMiddle,
  vcMiddle,
  iCrushing,
  pCrushing,
  iProcess,
  pProcess,
  iMine,
  pMine,
  iArray,
  pArray,
}: MiddleBarProps) => {
  return (
    <div className="relative flex h-[68rem] w-[100rem] flex-1 items-center justify-center">
      {line1}
      <div className="absolute h-full w-full">
        <EnergySVG
          line1={line1}
          line2={line2}
          crushing={crushing}
          plant1={plant1}
          plant2={plant2}
          mine={mine}
          grinding={grinding}
          reagents={reagents}
          flotation={flotation}
          concentrate={concentrate}
          tailing={tailing}
          sulfide={sulfide}
          oxyde={oxyde}
          regrinding={regrinding}
          sag={sag}
          ball={ball}
          className="h-full w-full"
        />
      </div>

      {/* <div className="debug absolute top-[105px] flex w-[380px] justify-between">
        <MiniCard value={valueLeft} />
        <MiniCard value={valueRight} />
      </div> */}
      {/*********************************************************************************************************** */}
      <div className="absolute top-[180px] flex w-[880px] justify-between">
        <div className="flex w-[250px] flex-col rounded-[10px] border bg-[#021E3F]/80 p-2">
          <div className="flex w-full justify-between">
            <span className="font-semibold">Active power (Mw)</span>
            <span className="font-semibold text-[#FFC829]">
              {activePowerLeft}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Reactive power (Mvar)</span>
            <span className="font-semibold text-[#FFC829]">
              {reactivePowerLeft}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Total power (Mva)</span>
            <span className="font-semibold text-[#FFC829]">
              {totalPowerLeft}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Cos phi</span>
            <span className="font-semibold text-[#FFC829]">{cosPhiLeft}</span>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Va</span>
              <span className="font-semibold text-[#FFC829]">{vaLeft}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Vb</span>
              <span className="font-semibold text-[#FFC829]">{vbLeft}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Vc</span>
              <span className="font-semibold text-[#FFC829]">{vcLeft}</span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Ia</span>
              <span className="font-semibold text-[#FFC829]">{iaLeft}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Ib</span>
              <span className="font-semibold text-[#FFC829]">{ibLeft}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Ic</span>
              <span className="font-semibold text-[#FFC829]">{icLeft}</span>
            </div>
          </div>
        </div>
        <div className="flex w-[250px] flex-col rounded-[10px] border bg-[#021E3F]/80 p-2">
          <div className="flex w-full justify-between">
            <span className="font-semibold">Active power (Mw)</span>
            <span className="font-semibold text-[#FFC829]">
              {activePowerRight}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Reactive power (Mvar)</span>
            <span className="font-semibold text-[#FFC829]">
              {reactivePowerRight}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Total power (Mva)</span>
            <span className="font-semibold text-[#FFC829]">
              {totalPowerRight}
            </span>
          </div>
          <div className="flex w-full justify-between">
            <span className="font-semibold">Cos phi</span>
            <span className="font-semibold text-[#FFC829]">{cosPhiRight}</span>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Va</span>
              <span className="font-semibold text-[#FFC829]">{vaRight}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Vb</span>
              <span className="font-semibold text-[#FFC829]">{vbRight}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Vc</span>
              <span className="font-semibold text-[#FFC829]">{vcRight}</span>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <span className="font-semibold">Ia</span>
              <span className="font-semibold text-[#FFC829]">{iaRight}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Ib</span>
              <span className="font-semibold text-[#FFC829]">{ibRight}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Ic</span>
              <span className="font-semibold text-[#FFC829]">{icRight}</span>
            </div>
          </div>
        </div>
      </div>
      {/*********************************************************************************************************** */}
      <div className="flex-center absolute top-[500px] flex w-full items-center justify-center gap-[1rem]">
        <div className="flex gap-1">
          <span className="grow">Uab (Kv)</span>
          <span className="font-semibold text-[#FFC829]">
            {(vaMiddle / 1000).toFixed(2)}
          </span>
        </div>
        <div className="flex gap-1">
          <span className="grow">Frequency (Hz)</span>
          <span className="font-semibold text-[#FFC829]">{vbMiddle}</span>
        </div>
      </div>
      {/*********************************************************************************************************** */}
      <div className="absolute top-[660px] flex w-full justify-between px-[2rem]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="grow">I (A)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={iCrushing}
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="grow">P (Kw)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={pCrushing}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="grow">I (A)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={iProcess}
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="grow">P (Kw)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={pProcess}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="grow">I (a)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={iMine}
            />
          </div>
          <div className="flex items-center gap-3">
            <span className="grow">P (Kw)</span>
            <MiniCard
              className="w-[5rem] font-semibold text-[#FFC829]"
              value={(pMine / 1000).toFixed(2)}
            />
          </div>
        </div>
      </div>
      {/*********************************************************************************************************** */}
      <div className="absolute bottom-[110px] flex w-full">
        <div className="flex w-full flex-col gap-2">
          <div className="flex w-full items-center">
            <span className="w-[5rem]">I (a)</span>
            <div className="flex flex-1 items-center justify-between">
              {iArray.map((item, index) => (
                <MiniCard
                  key={index}
                  className="flex w-[3rem] items-center justify-center font-semibold text-[#FFC829]"
                  value={item}
                />
              ))}
            </div>
          </div>
          <div className="flex w-full items-center">
            <span className="w-[5rem]">P (Kw)</span>
            <div className="flex w-full flex-1 items-center justify-between">
              {pArray.map((item, index) => (
                <MiniCard
                  key={index}
                  className="flex w-[3rem] items-center justify-center font-semibold text-[#FFC829]"
                  value={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
