export const formatAttributesData = (data: any, setDataAttributes: any) => {
  setDataAttributes({
    SP01: {
      progress: data?.["s=SP1_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Chlore input": data?.["s=SP01CHL_CHL_01_MAE_TM"]?.[length - 1]?.y,
        "Chlore output": data?.["s=SP1_CHL_02_MAE_TM"]?.[length - 1]?.y,
        "Flow input": data?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP1_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP1_M01_RM_TS"]?.[length - 1]?.y,
          data?.["s=SP1_M02_RM_TS"]?.[length - 1]?.y,
          data?.["s=SP1_M03_RM_TS"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP1_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP1_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP1_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP02: {
      progress: data?.["s=SP2_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        // "Chlore input":
        //   data?.["s=SP02CHL_CHL_01_MAE_TM"]?.[length - 1]?.y,
        // "Chlore output":
        //   data?.["s=SP2_CHL_02_MAE_TM"]?.[length - 1]?.y,
        "Flow input": data?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP2_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP2_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP2_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP2_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP2_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP2_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP2_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP03: {
      progress: data?.["s=SP3_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP3_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP3_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP3_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP3_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP3_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP3_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP3_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP1: {
      progress: data?.["s=SP4_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP4_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP4_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP4_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP4_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP4_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP4_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP4_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP2: {
      progress: data?.["s=SP5_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP5_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP5_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP5_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP5_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP5_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP5_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP5_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP3: {
      progress: data?.["s=SP6_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP6_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP6_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP6_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP6_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP6_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP6_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP6_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP4: {
      progress: data?.["s=SP7_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP7_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP7_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP7_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP7_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP7_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP7_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP7_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP5: {
      progress: data?.["s=SP8_LIT_01_MAE_TM"]?.[length - 1]?.y,
      attributes: {
        "Flow input": data?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=SP8_PIT_04_MAE_TM"]?.[length - 1]?.y,
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP8_M01_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP8_M02_TM_TLC"]?.[length - 1]?.y,
          data?.["s=SP8_M03_TM_TLC"]?.[length - 1]?.y,
        ],
        Pression: [
          data?.["s=SP8_PIT_01_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP8_PIT_02_MAE_TM"]?.[length - 1]?.y,
          data?.["s=SP8_PIT_03_MAE_TM"]?.[length - 1]?.y,
        ],
      },
    },
    SP6: {
      progress: [
        data?.["s=B_LIT_01_MAE_TM"]?.[length - 1]?.y,
        data?.["s=B_LIT_02_MAE_TM"]?.[length - 1]?.y,
      ],
      attributes: {
        "Chlore input": data?.["s=B_CHL_01_MAE_TM"]?.[length - 1]?.y,
        "Chlore output": data?.["s=B_CHL_02_MAE_TM"]?.[length - 1]?.y,
        "Flow input": data?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "Flow output": data?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,
        "delta flow":
          +data?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y -
          +data?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
        "pression output": data?.["s=B_PIT_04_MAE_TM"]?.[length - 1]?.y,
      },
    },
  });
};

export const updateAttributesData = (data: any, setDataAttributes: any) => {
  setDataAttributes({
    SP01: {
      progress: data?.["s=SP1_LIT_01_MAE_TM"],
      attributes: {
        "Chlore input": data?.["s=SP01CHL_CHL_01_MAE_TM"],
        "Chlore output": data?.["s=SP1_CHL_02_MAE_TM"],
        "Flow input": data?.["s=SP1_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP1_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP1_FIT_02_MAE_TM"] - +data?.["s=SP1_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP1_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP1_M01_RM_TS"],
          data?.["s=SP1_M02_RM_TS"],
          data?.["s=SP1_M03_RM_TS"],
        ],
        Pression: [
          data?.["s=SP1_PIT_01_MAE_TM"],
          data?.["s=SP1_PIT_02_MAE_TM"],
          data?.["s=SP1_PIT_03_MAE_TM"],
        ],
      },
    },
    SP02: {
      progress: data?.["s=SP2_LIT_01_MAE_TM"],
      attributes: {
        // "Chlore input":
        //   filteredResults?.["s=SP02CHL_CHL_01_MAE_TM"]?.[length - 1]?.y,
        // "Chlore output":
        //   filteredResults?.["s=SP2_CHL_02_MAE_TM"]?.[length - 1]?.y,
        "Flow input": data?.["s=SP2_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP2_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP2_FIT_02_MAE_TM"] - +data?.["s=SP2_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP2_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP2_M01_TM_TLC"],
          data?.["s=SP2_M02_TM_TLC"],
          data?.["s=SP2_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP2_PIT_01_MAE_TM"],
          data?.["s=SP2_PIT_02_MAE_TM"],
          data?.["s=SP2_PIT_03_MAE_TM"],
        ],
      },
    },
    SP03: {
      progress: data?.["s=SP3_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP3_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP3_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP3_FIT_02_MAE_TM"] - +data?.["s=SP3_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP3_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP3_M01_TM_TLC"],
          data?.["s=SP3_M02_TM_TLC"],
          data?.["s=SP3_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP3_PIT_01_MAE_TM"],
          data?.["s=SP3_PIT_02_MAE_TM"],
          data?.["s=SP3_PIT_03_MAE_TM"],
        ],
      },
    },
    SP1: {
      progress: data?.["s=SP4_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP4_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP4_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP4_FIT_02_MAE_TM"] - +data?.["s=SP4_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP4_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP4_M01_TM_TLC"],
          data?.["s=SP4_M02_TM_TLC"],
          data?.["s=SP4_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP4_PIT_01_MAE_TM"],
          data?.["s=SP4_PIT_02_MAE_TM"],
          data?.["s=SP4_PIT_03_MAE_TM"],
        ],
      },
    },
    SP2: {
      progress: data?.["s=SP5_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP5_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP5_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP5_FIT_02_MAE_TM"] - +data?.["s=SP5_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP5_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP5_M01_TM_TLC"],
          data?.["s=SP5_M02_TM_TLC"],
          data?.["s=SP5_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP5_PIT_01_MAE_TM"],
          data?.["s=SP5_PIT_02_MAE_TM"],
          data?.["s=SP5_PIT_03_MAE_TM"],
        ],
      },
    },
    SP3: {
      progress: data?.["s=SP6_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP6_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP6_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP6_FIT_02_MAE_TM"] - +data?.["s=SP6_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP6_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP6_M01_TM_TLC"],
          data?.["s=SP6_M02_TM_TLC"],
          data?.["s=SP6_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP6_PIT_01_MAE_TM"],
          data?.["s=SP6_PIT_02_MAE_TM"],
          data?.["s=SP6_PIT_03_MAE_TM"],
        ],
      },
    },
    SP4: {
      progress: data?.["s=SP7_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP7_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP7_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP7_FIT_02_MAE_TM"] - +data?.["s=SP7_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP7_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP7_M01_TM_TLC"],
          data?.["s=SP7_M02_TM_TLC"],
          data?.["s=SP7_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP7_PIT_01_MAE_TM"],
          data?.["s=SP7_PIT_02_MAE_TM"],
          data?.["s=SP7_PIT_03_MAE_TM"],
        ],
      },
    },
    SP5: {
      progress: data?.["s=SP8_LIT_01_MAE_TM"],
      attributes: {
        "Flow input": data?.["s=SP8_FIT_01_MAE_TM"],
        "Flow output": data?.["s=SP8_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=SP8_FIT_02_MAE_TM"] - +data?.["s=SP8_FIT_01_MAE_TM"],
        "pression output": data?.["s=SP8_PIT_04_MAE_TM"],
        pumps: ["P01", "P02", "P03"],
        "Running state": [
          data?.["s=SP8_M01_TM_TLC"],
          data?.["s=SP8_M02_TM_TLC"],
          data?.["s=SP8_M03_TM_TLC"],
        ],
        Pression: [
          data?.["s=SP8_PIT_01_MAE_TM"],
          data?.["s=SP8_PIT_02_MAE_TM"],
          data?.["s=SP8_PIT_03_MAE_TM"],
        ],
      },
    },
    SP6: {
      progress: [data?.["s=B_LIT_01_MAE_TM"], data?.["s=B_LIT_02_MAE_TM"]],
      attributes: {
        "Chlore input": data?.["s=B_CHL_01_MAE_TM"],
        "Chlore output": data?.["s=B_CHL_02_MAE_TM"],
        "Flow input": data?.["s=B_FIT_01_MAE_TM"],
        "Flow output": data?.["s=B_FIT_02_MAE_TM"],
        "delta flow":
          +data?.["s=B_FIT_02_MAE_TM"] - +data?.["s=B_FIT_01_MAE_TM"],
        "pression output": data?.["s=B_PIT_04_MAE_TM"],
      },
    },
  });
};

export const formatHistoryData = (data: any, setDataHistory: any) => {
  setDataHistory({
    SP01: {
      flowRate: data?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP1_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        +data?.["s=SP1_FIT_02_MAE_TM"]?.[length - 1]?.y -
        +data?.["s=SP1_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP1_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP1_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP1_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP1_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP1_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP1_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP1_LIT_01_MAE_TM"] || [],

      chloreInput: data?.["s=SP01CHL_CHL_01_MAE_TM"] || [],
      chloreOutput: data?.["s=SP1_CHL_02_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP1_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP1_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP1_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP1_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP1_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP1_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP1_M01_RM_TS"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP1_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP1_M03_TM_TLC"]?.[length - 1]?.y,

      chloreStationvalue1: data?.["s=SP01CHL_M01_RM_TS"]?.[length - 1]?.y,
      chloreStationL1: data?.["s=SP01CHL_LSLL_BAC1_TA"]?.[length - 1]?.y,
      chloreStationM1: data?.["s=SP01CHL_M03_RM_TS"]?.[length - 1]?.y,
      chloreStationvalue2: data?.["s=SP01CHL_M02_RM_TS"]?.[length - 1]?.y,
      chloreStationL2: data?.["s=SP01CHL_LSLL_BAC2_TA"]?.[length - 1]?.y,
      chloreStationM2: data?.["s=SP01CHL_M04_RM_TS"]?.[length - 1]?.y,
    },
    SP02: {
      flowRate: data?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP2_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP2_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP2_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP2_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP2_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP2_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP2_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP2_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP2_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP2_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP2_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP2_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP2_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP2_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP2_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP2_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP2_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP2_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP2_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP03: {
      flowRate: data?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP3_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP3_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP3_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP3_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP3_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP3_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP3_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP3_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP3_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP3_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP3_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP3_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP3_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP3_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP3_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP3_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP3_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP3_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP3_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP1: {
      flowRate: data?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP4_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP4_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP4_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP4_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP4_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP4_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP4_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP4_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP4_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP4_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP4_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP4_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP4_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP4_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP4_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP4_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP4_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP4_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP4_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP2: {
      flowRate: data?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP5_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP5_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP5_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP5_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP5_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP5_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP5_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP5_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP5_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP5_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP5_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP5_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP5_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP5_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP5_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP5_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP5_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP5_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP5_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP3: {
      flowRate: data?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP6_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP6_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP6_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP6_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP6_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP6_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP6_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP6_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP6_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP6_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP6_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP6_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP6_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP6_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP6_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP6_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP6_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP6_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP6_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP4: {
      flowRate: data?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP7_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP7_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP7_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP7_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP7_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP7_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP7_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP7_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP7_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP7_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP7_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP7_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP7_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP7_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP7_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP7_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP7_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP7_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP7_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP5: {
      flowRate: data?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y,
      pumpedVolume: data?.["s=SP8_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      deltaFlow:
        data?.["s=SP8_FIT_02_MAE_TM"]?.[length - 1]?.y -
        data?.["s=SP8_FIT_01_MAE_TM"]?.[length - 1]?.y,

      flowsInput: data?.["s=SP8_FIT_01_MAE_TM"] || [],
      flowsOutput: data?.["s=SP8_FIT_02_MAE_TM"] || [],

      pressuresOutput: data?.["s=SP8_PIT_04_MAE_TM"] || [],
      pressuresP1: data?.["s=SP8_PIT_01_MAE_TM"] || [],
      pressuresP2: data?.["s=SP8_PIT_02_MAE_TM"] || [],
      pressuresP3: data?.["s=SP8_PIT_03_MAE_TM"] || [],

      level: data?.["s=SP8_LIT_01_MAE_TM"] || [],

      suctionTankLL: data?.["s=SP8_LSLL_01_TA"]?.[length - 1]?.y,
      suctionTankL: data?.["s=SP8_LSL_01_TS"]?.[length - 1]?.y,
      suctionTankH: data?.["s=SP8_LSH_01_TS"]?.[length - 1]?.y,
      suctionTankHH: data?.["s=SP8_LSHH_01_TA"]?.[length - 1]?.y,

      hammerArrestorL: data?.["s=SP8_ANTIB_LSL_TA"]?.[length - 1]?.y,
      hammerArrestorH: data?.["s=SP8_ANTIB_LSH_TA"]?.[length - 1]?.y,

      runningStateP1: data?.["s=SP8_M01_TM_TLC"]?.[length - 1]?.y,
      runningStateP2: data?.["s=SP8_M02_TM_TLC"]?.[length - 1]?.y,
      runningStateP3: data?.["s=SP8_M03_TM_TLC"]?.[length - 1]?.y,
    },
    SP6: {
      flowRateInput: data?.["s=B_FIT_01_MAE_TM"]?.[length - 1]?.y,
      flowRatePlant: data?.["s=B_FIT_02_MAE_TM"]?.[length - 1]?.y,

      volumeInput: data?.["s=B_FIT_01_TOT_MES_TM"]?.[length - 1]?.y,
      volumePlant: data?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y,
      stock:
        +data?.["s=B_FIT_02_TOT_MES_TM"]?.[length - 1]?.y -
        +data?.["s=B_FIT_01_TOT_MES_TM"]?.[length - 1]?.y,

      flowInput: data?.["s=B_FIT_01_MAE_TM"] || [],
      flowPlant: data?.["s=B_FIT_02_MAE_TM"] || [],

      levelB1: data?.["s=B_LIT_01_MAE_TM"] || [],
      levelB2: data?.["s=B_LIT_02_MAE_TM"] || [],

      chloreInput: data?.["s=B_CHL_01_MAE_TM"] || [],
      chlorePlant: data?.["s=B_CHL_02_MAE_TM"] || [],

      basinsValue1: data?.["s=B_LIT_01_MAE_TM"] || [],
      basinLL1: data?.["s=B_LSLL_01_TA"]?.[length - 1]?.y,
      basinL1: data?.["s=B_LSL_01_TS"]?.[length - 1]?.y,
      basinH1: data?.["s=B_LSH_01_TS"]?.[length - 1]?.y,
      basinHH1: data?.["s=B_LSHH_01_TA"]?.[length - 1]?.y,

      basinsValue2: data?.["s=B_LIT_02_MAE_TM"] || [],
      basinLL2: data?.["s=B_LSLL_02_TA"]?.[length - 1]?.y,
      basinL2: data?.["s=B_LSL_02_TS"]?.[length - 1]?.y,
      basinH2: data?.["s=B_LSH_02_TS"]?.[length - 1]?.y,
      basinHH2: data?.["s=B_LSHH_02_TA"]?.[length - 1]?.y,

      station1: data?.["s=B_M01_RM_TS"]?.[length - 1]?.y,
      stationM1: data?.["s=B_M03_RM_TS"]?.[length - 1]?.y,
      station2: data?.["s=B_M02_RM_TS"]?.[length - 1]?.y,
      stationM2: data?.["s=B_M04_RM_TS"]?.[length - 1]?.y,
    },
  });
};

export const updateHistoryData = (data: any, setDataHistory: any) => {
  setDataHistory((prevHistory: any) => {
    const newHistory = {
      SP01: {
        flowRate: data?.["s=SP1_FIT_02_MAE_TM"],
        pumpedVolume: data?.["s=SP1_FIT_02_TOT_MES_TM"],
        deltaFlow:
          +data?.["s=SP1_FIT_02_MAE_TM"] - +data?.["s=SP1_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP01?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP01?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP01?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP01?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP01?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP01?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP01?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_LIT_01_MAE_TM"] },
        ],

        chloreInput: [
          ...(prevHistory?.SP01?.chloreInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP01CHL_CHL_01_MAE_TM"] },
        ],
        chloreOutput: [
          ...(prevHistory?.SP01?.chloreOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP1_CHL_02_MAE_TM"] },
        ],

        suctionTankLL: data?.["s=SP1_LSLL_01_TA"],
        suctionTankL: data?.["s=SP1_LSL_01_TS"],
        suctionTankH: data?.["s=SP1_LSH_01_TS"],
        suctionTankHH: data?.["s=SP1_LSHH_01_TA"],

        hammerArrestorL: data?.["SP1_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP1_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP1_M01_RM_TS"],
        runningStateP2: data?.["SP1_M02_TM_TLC"],
        runningStateP3: data?.["SP1_M03_TM_TLC"],

        chloreStationvalue1: data?.["SP01CHL_M01_RM_TS"],
        chloreStationL1: data?.["SP01CHL_LSLL_BAC1_TA"],
        chloreStationM1: data?.["SP01CHL_M03_RM_TS"],
        chloreStationvalue2: data?.["SP01CHL_M02_RM_TS"],
        chloreStationL2: data?.["SP01CHL_LSLL_BAC2_TA"],
        chloreStationM2: data?.["SP01CHL_M04_RM_TS"],
      },
      SP02: {
        flowRate: data?.["SP2_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP2_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP2_FIT_02_MAE_TM"] - +data?.["SP2_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP02?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP02?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP02?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP02?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP02?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP02?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP02?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP2_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP2_LSLL_01_TA"],
        suctionTankL: data?.["SP2_LSL_01_TS"],
        suctionTankH: data?.["SP2_LSH_01_TS"],
        suctionTankHH: data?.["SP2_LSHH_01_TA"],

        hammerArrestorL: data?.["SP2_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP2_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP2_M01_TM_TLC"],
        runningStateP2: data?.["SP2_M02_TM_TLC"],
        runningStateP3: data?.["SP2_M03_TM_TLC"],
      },
      SP03: {
        flowRate: data?.["SP3_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP3_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP3_FIT_02_MAE_TM"] - +data?.["SP3_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP03?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP03?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP03?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP03?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP03?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP03?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP03?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP3_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP3_LSLL_01_TA"],
        suctionTankL: data?.["SP3_LSL_01_TS"],
        suctionTankH: data?.["SP3_LSH_01_TS"],
        suctionTankHH: data?.["SP3_LSHH_01_TA"],

        hammerArrestorL: data?.["SP3_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP3_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP3_M01_TM_TLC"],
        runningStateP2: data?.["SP3_M02_TM_TLC"],
        runningStateP3: data?.["SP3_M03_TM_TLC"],
      },
      SP1: {
        flowRate: data?.["SP4_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP4_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP4_FIT_02_MAE_TM"] - +data?.["SP4_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP1?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP1?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP1?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP1?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP1?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP1?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP1?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP4_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP4_LSLL_01_TA"],
        suctionTankL: data?.["SP4_LSL_01_TS"],
        suctionTankH: data?.["SP4_LSH_01_TS"],
        suctionTankHH: data?.["SP4_LSHH_01_TA"],

        hammerArrestorL: data?.["SP4_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP4_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP4_M01_TM_TLC"],
        runningStateP2: data?.["SP4_M02_TM_TLC"],
        runningStateP3: data?.["SP4_M03_TM_TLC"],
      },
      SP2: {
        flowRate: data?.["SP5_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP5_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP5_FIT_02_MAE_TM"] - +data?.["SP5_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP2?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP2?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP2?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP2?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP2?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP2?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP2?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP5_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP5_LSLL_01_TA"],
        suctionTankL: data?.["SP5_LSL_01_TS"],
        suctionTankH: data?.["SP5_LSH_01_TS"],
        suctionTankHH: data?.["SP5_LSHH_01_TA"],

        hammerArrestorL: data?.["SP5_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP5_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP5_M01_TM_TLC"],
        runningStateP2: data?.["SP5_M02_TM_TLC"],
        runningStateP3: data?.["SP5_M03_TM_TLC"],
      },
      SP3: {
        flowRate: data?.["SP6_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP6_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP6_FIT_02_MAE_TM"] - +data?.["SP6_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP3?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP3?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP3?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP3?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP3?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP3?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP3?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP6_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP6_LSLL_01_TA"],
        suctionTankL: data?.["SP6_LSL_01_TS"],
        suctionTankH: data?.["SP6_LSH_01_TS"],
        suctionTankHH: data?.["SP6_LSHH_01_TA"],

        hammerArrestorL: data?.["SP6_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP6_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP6_M01_TM_TLC"],
        runningStateP2: data?.["SP6_M02_TM_TLC"],
        runningStateP3: data?.["SP6_M03_TM_TLC"],
      },
      SP4: {
        flowRate: data?.["SP7_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP7_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP7_FIT_02_MAE_TM"] - +data?.["SP7_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP4?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP4?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP4?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP4?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP4?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP4?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP4?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP7_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP7_LSLL_01_TA"],
        suctionTankL: data?.["SP7_LSL_01_TS"],
        suctionTankH: data?.["SP7_LSH_01_TS"],
        suctionTankHH: data?.["SP7_LSHH_01_TA"],

        hammerArrestorL: data?.["SP7_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP7_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP7_M01_TM_TLC"],
        runningStateP2: data?.["SP7_M02_TM_TLC"],
        runningStateP3: data?.["SP7_M03_TM_TLC"],
      },
      SP5: {
        flowRate: data?.["SP8_FIT_02_MAE_TM"],
        pumpedVolume: data?.["SP8_FIT_02_TOT_MES_TM"],
        deltaFlow: +data?.["SP8_FIT_02_MAE_TM"] - +data?.["SP8_FIT_01_MAE_TM"],

        flowsInput: [
          ...(prevHistory?.SP5?.flowsInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_FIT_01_MAE_TM"] },
        ],
        flowsOutput: [
          ...(prevHistory?.SP5?.flowsOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_FIT_02_MAE_TM"] },
        ],

        pressuresOutput: [
          ...(prevHistory?.SP5?.pressuresOutput?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_PIT_04_MAE_TM"] },
        ],
        pressuresP1: [
          ...(prevHistory?.SP5?.pressuresP1?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_PIT_01_MAE_TM"] },
        ],
        pressuresP2: [
          ...(prevHistory?.SP5?.pressuresP2?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_PIT_02_MAE_TM"] },
        ],
        pressuresP3: [
          ...(prevHistory?.SP5?.pressuresP3?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_PIT_03_MAE_TM"] },
        ],

        level: [
          ...(prevHistory?.SP5?.level?.slice(1) || []),
          { x: new Date(), y: data?.["s=SP8_LIT_01_MAE_TM"] },
        ],

        suctionTankLL: data?.["SP8_LSLL_01_TA"],
        suctionTankL: data?.["SP8_LSL_01_TS"],
        suctionTankH: data?.["SP8_LSH_01_TS"],
        suctionTankHH: data?.["SP8_LSHH_01_TA"],

        hammerArrestorL: data?.["SP8_ANTIB_LSL_TA"],
        hammerArrestorH: data?.["SP8_ANTIB_LSH_TA"],

        runningStateP1: data?.["SP8_M01_TM_TLC"],
        runningStateP2: data?.["SP8_M02_TM_TLC"],
        runningStateP3: data?.["SP8_M03_TM_TLC"],
      },
      SP6: {
        flowRateInput: data?.["B_FIT_01_MAE_TM"],
        flowRatePlant: data?.["B_FIT_02_MAE_TM"],

        volumeInput: data?.["B_FIT_01_TOT_MES_TM"],
        volumePlant: data?.["B_FIT_02_TOT_MES_TM"],
        stock: +data?.["B_FIT_02_TOT_MES_TM"] - +data?.["B_FIT_01_TOT_MES_TM"],

        flowInput: [
          ...(prevHistory?.SP6?.flowInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_FIT_01_MAE_TM"] },
        ],
        flowPlant: [
          ...(prevHistory?.SP6?.flowPlant?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_FIT_02_MAE_TM"] },
        ],

        levelB1: [
          ...(prevHistory?.SP6?.levelB1?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_LIT_01_MAE_TM"] },
        ],
        levelB2: [
          ...(prevHistory?.SP6?.levelB2?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_LIT_02_MAE_TM"] },
        ],

        chloreInput: [
          ...(prevHistory?.SP6?.chloreInput?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_CHL_01_MAE_TM"] },
        ],
        chlorePlant: [
          ...(prevHistory?.SP6?.chlorePlant?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_CHL_02_MAE_TM"] },
        ],

        basinsValue1: [
          ...(prevHistory?.SP6?.basinsValue1?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_LIT_01_MAE_TM"] },
        ],
        basinLL1: data?.["B_LSLL_01_TA"],
        basinL1: data?.["B_LSL_01_TS"],
        basinH1: data?.["B_LSH_01_TS"],
        basinHH1: data?.["B_LSHH_01_TA"],

        basinsValue2: [
          ...(prevHistory?.SP6?.basinsValue2?.slice(1) || []),
          { x: new Date(), y: data?.["s=B_LIT_02_MAE_TM"] },
        ],
        basinLL2: data?.["B_LSLL_02_TA"],
        basinL2: data?.["B_LSL_02_TS"],
        basinH2: data?.["B_LSH_02_TS"],
        basinHH2: data?.["B_LSHH_02_TA"],

        station1: data?.["B_M01_RM_TS"],
        stationM1: data?.["B_M03_RM_TS"],
        station2: data?.["B_M02_RM_TS"],
        stationM2: data?.["B_M04_RM_TS"],
      },
    };

    return newHistory;
  });
};
