export const formatData = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      flowRateIn: data?.["s=6028-WI-1042"] || 0,
      flowRateOut: data?.["s=6032-WI-1142"] || 0,
      cadence: data?.["s=6032-WI-1142"] || 0,
      stockpileLevelMin: data?.["s=6028-LI-1009A"] || 0,
      stockpileLevelMax: data?.["s=6028-LI-1009B"] || 0,
      crushedOreMin: data?.["s=6120-LI-2006A"] || 0,
      crushedOreMax: data?.["s=6120-LI-2006B"] || 0,
      energy: data?.["s=6100-TR-2001"] || 0,
      power: data?.["s=6210-WI-2217"] || 0,
      crushed: data?.["s=6210-WI-2217"] || 0,
      jawCrusher: data?.["s=6032-LIT-1130"] || 0,
    };
  });
  setLeftData((prev: any) => {
    return {
      ...prev,
      runningState: data?.["s=6210-WI-2217"] || 0,
    };
  });
  setRightData((prev: any) => {
    return {
      ...prev,
      conveyorRom: data?.["s=6032-FD-1107"] || 0,
      romBinWithdrawal: data?.["s=6032-FD-1107"] || 0,
      romStockpileAprf1: data?.["s=6028-FD-1021"] || 0,
      romStockpileAprf2: data?.["s=6028-FD-1022"] || 0,
      apronDischarge: data?.["s=6028-CV-1037"] || 0,
      grizzlyFeeder: data?.["s=6032-FD-1120"] || 0,
      diverterChute: data?.["s=6026-ZA-1004"] || 0,
      crushedOreApronFeeder1: data?.["s=6120-FD-2021"] || 0,
      crushedOreApronFeeder2: data?.["s=6120-FD-2022"] || 0,
      crushedOreApronFeeder3: data?.["s=6120-FD-2023"] || 0,
      crushedDischargeConveyor: data?.["s=6032-ZM-1142"] || 0,
      plantFeedConveyor: data?.["s=6120-CV-2040"] || 0,
    };
  });
};

export const formatHistory = (data: any, setLeftData: any) => {
  setLeftData((prev: any) => {
    return {
      ...prev,
      frameLeft: data?.["s=6032-TT-1130C"] || [],
      frameRight: data?.["s=6032-TT-1130D"] || [],
      pitmanLeft: data?.["s=6032-TT-1130E"] || [],
      pitmanRight: data?.["s=6032-TT-1130F"] || [],
      v1: data?.["s=6032-TE-1130V1"] || [],
      u1: data?.["s=6032-TE-1130U1"] || [],
      w1: data?.["s=6032-TE-1130W1"] || [],
      crushedFlow: data?.["s=6032-WI-1142"] || [],
    };
  });
};

export const updateDataWithSocket = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      flowRateIn: data?.["s=6028-WI-1042"] || 0,
      flowRateOut: data?.["s=6032-WI-1142"] || 0,
      cadence: data?.["s=6032-WI-1142"] || 0,
      stockpileLevelMin: data?.["s=6028-LI-1009A"] || 0,
      stockpileLevelMax: data?.["s=6028-LI-1009B"] || 0,
      crushedOreMin: data?.["s=6120-LI-2006A"] || 0,
      crushedOreMax: data?.["s=6120-LI-2006B"] || 0,
      energy: data?.["s=6100-TR-2001"] || 0,
      power: data?.["s=6210-WI-2217"] || 0,
      crushed: data?.["s=6210-WI-2217"] || 0,
      jawCrusher: data?.["s=6032-LIT-1130"] || 0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      runningState: data?.["s=6210-WI-2217"] || 0,
      frameLeft: [
        ...(prev?.frameLeft?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TT-1130C"] || 0 },
      ],
      frameRight: [
        ...(prev?.frameRight?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TT-1130D"] || 0 },
      ],
      pitmanLeft: [
        ...(prev?.pitmanLeft?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TT-1130E"] || 0 },
      ],
      pitmanRight: [
        ...(prev?.pitmanRight?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TT-1130F"] || 0 },
      ],
      v1: [
        ...(prev?.v1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TE-1130V1"] || 0 },
      ],
      u1: [
        ...(prev?.u1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TE-1130U1"] || 0 },
      ],
      w1: [
        ...(prev?.w1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-TE-1130W1"] || 0 },
      ],
      crushedFlow: [
        ...(prev?.crushedFlow?.slice(1) || []),
        { x: new Date(), y: data?.["s=6032-WI-1142"] || 0 },
      ],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      conveyorRom: data?.["s=6032-FD-1107"] || 0,
      romBinWithdrawal: data?.["s=6032-FD-1107"] || 0,
      romStockpileAprf1: data?.["s=6028-FD-1021"] || 0,
      romStockpileAprf2: data?.["s=6028-FD-1022"] || 0,
      apronDischarge: data?.["s=6028-CV-1037"] || 0,
      grizzlyFeeder: data?.["s=6032-FD-1120"] || 0,
      diverterChute: data?.["s=6026-ZA-1004"] || 0,
      crushedOreApronFeeder1: data?.["s=6120-FD-2021"] || 0,
      crushedOreApronFeeder2: data?.["s=6120-FD-2022"] || 0,
      crushedOreApronFeeder3: data?.["s=6120-FD-2023"] || 0,
      crushedDischargeConveyor: data?.["s=6032-ZM-1142"] || 0,
      plantFeedConveyor: data?.["s=6120-CV-2040"] || 0,
    };
  });
};
