export const formatData = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      flowRate: data?.["s=6210-WIT-2215"] || 0,
      speed: data?.["s=6140-Fréquence-BM-2426"] || 0,
      energy: data?.["s=6100-TR-2001"] || 0,
      utilization: data?.["s=6210-WI-2217"] || 0,
      bounce1: data?.["s=6140-VT-2426A"] || 0,
      bounce2: data?.["s=6140-VT-2426B"] || 0,
      bounce3: data?.["s=6140-VT-2426C"] || 0,
    };
  });
  setLeftData((prev: any) => {
    return {
      ...prev,
      runningState: data?.["s=6140-CR-2426"] || 0,
      telemetryRunningState: data?.["s=6140-CR-2426"] || 0,
    };
  });
  setRightData((prev: any) => {
    return {
      ...prev,
      pressure: data?.["s=6210-WI-2215"] || 0,
      hydraulic: data?.["s=6140-PDSH-2426C"] || 0,
      clamping: data?.["s=6140-PIT-2426D"] || 0,
      tramp: data?.["s=6140-PIT-2426E"] || 0,
      lub: data?.["s=6140-PDSH-2426F"] || 0,
      tank: data?.["s=6140-TE-2426E"] || 0,
      return: data?.["s=6140-TE-2426F"] || 0,
    };
  });
};

export const formatHistory = (
  data: any,
  setLeftData: any,
  setRightData: any,
) => {
  // console.log({ data });

  setLeftData((prev: any) => {
    return {
      ...prev,
      nde: data?.["s=6140-TE-2426NDE"] || [],
      de: data?.["s=6140-TE-2426DE"] || [],
      u1: data?.["s=6140-TE-2426U1"] || [],
      v1: data?.["s=6140-TE-2426V1"] || [],
      w1: data?.["s=6140-TE-2426W1"] || [],
      crushedFlow: data?.["s=6140-TE-2426W1"] || [],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      tank: data?.["s=6140-TE-2426E"] || [],
      return: data?.["s=6140-TE-2426F"] || [],
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
      flowRate: data?.["s=6210-WIT-2215"] || 0,
      energy: data?.["s=6100-TR-2001"] || 0,
      speed: data?.["s=6140-Fréquence-BM-2426"] || 0,
      utilization: data?.["s=6210-WI-2217"] || 0,
      bounce1: data?.["s=6140-VT-2426A"] || 0,
      bounce2: data?.["s=6140-VT-2426B"] || 0,
      bounce3: data?.["s=6140-VT-2426C"] || 0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      runningState: data?.["s=6140-CR-2426"] || 0,
      telemetryRunningState: data?.["s=6140-CR-2426"] || 0,
      nde: [
        ...(prev?.nde?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426NDE"] || 0 },
      ],
      de: [
        ...(prev?.de?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426DE"] || 0 },
      ],
      u1: [
        ...(prev?.u1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426U1"] || 0 },
      ],
      v1: [
        ...(prev?.v1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426V1"] || 0 },
      ],
      w1: [
        ...(prev?.w1?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426W1"] || 0 },
      ],
      crushedFlow: [
        ...(prev?.crushedFlow?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426W1"] || 0 },
      ],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      pressure: data?.["s=6210-WI-2215"] || 0,
      hydraulic: data?.["s=6140-PDSH-2426C"] || 0,
      clamping: data?.["s=6140-PIT-2426D"] || 0,
      tramp: data?.["s=6140-PIT-2426E"] || 0,
      lub: data?.["s=6140-PDSH-2426F"] || 0,
      tank: [
        ...((prev?.tank || [])?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426E"] || 0 },
      ],
      return: [
        ...((prev?.return || [])?.slice(1) || []),
        { x: new Date(), y: data?.["s=6140-TE-2426F"] || 0 },
      ],
    };
  });
};
