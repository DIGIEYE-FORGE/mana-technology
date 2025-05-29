export const formatData = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      flotYield: data?.["s=6028-WI-1042"] || 0,
      sulfideYield: data?.["s=6028-WI-1042"] || 0,
      oxydeYield: data?.["s=6028-WI-1042"] || 0,
      concentrateProduction: data?.["s=6510-WQI-5121"] || 0,
      metalProduction: data?.["s=6028-WI-1042"] || 0,
      energy: data?.["s=6900-MC-2002"] || 0 + data?.["s=6900-MC-2003"] || 0,
      water: data?.["s=6820-FIT-7211"] || 0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      oThicknerTonnage: data?.["s=6510-WQI-5121"] || 0,
      iFilterTonnage: data?.["s=6520-WQI-5215"] || 0,
      oFilterWetTonnage:
        (data?.["s=6520-WQI-5244"] || 0) + (data?.["s=6520-WQI-5245"] || 0),
      oFilterDryTonnage: data?.["s=6028-WI-1042"] || 0,

      iSulfideCop: data?.["s=6028-WI-1042"] || 0,
      iSulfideSil: data?.["s=6028-WI-1042"] || 0,
      cSulfideCop: data?.["s=6028-WI-1042"] || 0,
      cSulfideSil: data?.["s=6028-WI-1042"] || 0,
      iOxydeCop: data?.["s=6028-WI-1042"] || 0,
      iOxydeSil: data?.["s=6028-WI-1042"] || 0,
      cOxydeCop: data?.["s=6028-WI-1042"] || 0,
      cOxydeSil: data?.["s=6028-WI-1042"] || 0,
      tOxydeCop: data?.["s=6028-WI-1042"] || 0,
      tOxydeSil: data?.["s=6028-WI-1042"] || 0,

      iRegrindVal: data?.["s=6330-DIT-3283"] || 0,
      iCyclRegrindVal: data?.["s=6330-DIT-3311"] || 0,
      iCyclDeslVal: data?.["s=6610-DIT-5411"] || 0,
      oThickner2Val: data?.["s=6520-DIT-5215"] || 0,
      iThicknerVal: data?.["s=6510-DIT-5121"] || 0,

      pax1Val:
        (data?.["s=6730-FIT-6325"] || 0) +
        (data?.["s=6730-FIT-6326"] || 0) +
        (data?.["s=6730-FIT-6327"] || 0) +
        (data?.["s=6730-FIT-6328"] || 0) +
        (data?.["s=6730-FIT-6329"] || 0) +
        (data?.["s=6730-FIT-6330"] || 0) +
        (data?.["s=6730-FIT-6331"] || 0) +
        (data?.["s=6730-FIT-6332"] || 0) +
        (data?.["s=6730-FIT-6333"] || 0) +
        (data?.["s=6730-FIT-6334"] || 0) +
        (data?.["s=6730-FIT-6335"] || 0) +
        (data?.["s=6730-FIT-6336"] || 0) +
        (data?.["s=6730-FIT-6337"] || 0) +
        (data?.["s=6730-FIT-6338"] || 0),
      pax2Val: 0,

      mibc1Val:
        (data?.["s=6720-FIT-6225"] || 0) +
        (data?.["s=6720-FIT-6226"] || 0) +
        (data?.["s=6720-FIT-6227"] || 0) +
        (data?.["s=6720-FIT-6229"] || 0) +
        (data?.["s=6720-FIT-6230"] || 0) +
        (data?.["s=6720-FIT-6231"] || 0),
      mibc2Val: 0,

      nahs1Val:
        (data?.["s=6740-FT-6422A"] || 0) +
        (data?.["s=6740-FT-6422B"] || 0) +
        (data?.["s=6740-FT-6422C"] || 0) +
        (data?.["s=6740-FT-6422D"] || 0) +
        (data?.["s=6740-FT-6422E"] || 0) +
        (data?.["s=6740-FT-6422F"] || 0) +
        (data?.["6740-FT-6422G"] || 0) +
        (data?.["s=6740-FIT-6425"] || 0) +
        (data?.["s=6740-FIT-6426"] || 0) +
        (data?.["s=6740-FIT-6427"] || 0) +
        (data?.["s=6740-FIT-6428"] || 0) +
        (data?.["s=6740-FIT-6429"] || 0) +
        (data?.["s=6740-FIT-6430"] || 0) +
        (data?.["s=6740-FT-6422H"] || 0) +
        (data?.["s=6740-FT-6422I"] || 0) +
        (data?.["s=6740-FT-6422J"] || 0) +
        (data?.["s=6740-FT-6422K"] || 0) +
        (data?.["s=6740-FT-6422L"] || 0) +
        (data?.["s=6740-FT-6422M"] || 0) +
        (data?.["s=6740-FT-6422N"] || 0),
      nahs2Val: 0,

      air1Val: data?.["s=6850-FIT-7541"] || 0,
      air2Val: data?.["s=6028-WI-1042"] || 0,

      oreFlowVal: data?.["s=6120-WIT-2042"] || 0,
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      sulfide: {
        rougher: {
          cells: [
            {
              level: data?.["s=6310-LIT-3121"] || 0,
              runningState:
                data?.["s=6310-AG-3141-F"] === "True" ||
                data?.["s=6310-AG-3141-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3122"] || 0,
              runningState:
                data?.["s=6310-AG-3142-F"] === "True" ||
                data?.["s=6310-AG-3142-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3123"] || 0,
              runningState:
                data?.["s=6310-AG-3143-F"] === "True" ||
                data?.["s=6310-AG-3143-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3124"] || 0,
              runningState:
                data?.["s=6310-AG-3144-F"] === "True" ||
                data?.["s=6310-AG-3144-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3125"] || 0,
              runningState:
                data?.["s=6310-AG-3145-F"] === "True" ||
                data?.["s=6310-AG-3145-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3126"] || 0,
              runningState:
                data?.["s=6310-AG-3146-F"] === "True" ||
                data?.["s=6310-AG-3146-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3127"] || 0,
              runningState:
                data?.["s=6310-AG-3147-F"] === "True" ||
                data?.["s=6310-AG-3147-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6310-PP-3161"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3771"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3162"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3772"] || "False",
            },
          ],
        },
        scavenger: {
          cells: [
            {
              level: data?.["s=6320-LIT-3221"] || 0,
              runningState:
                data?.["s=6320-AG-3241-F"] === "True" ||
                data?.["s=6320-AG-3241-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3222"] || 0,
              runningState:
                data?.["s=6320-AG-3242-F"] === "True" ||
                data?.["s=6320-AG-3242-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3223"] || 0,
              runningState:
                data?.["s=6320-AG-3243-F"] === "True" ||
                data?.["s=6320-AG-3243-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3224"] || 0,
              runningState:
                data?.["s=6320-AG-3244-F"] === "True" ||
                data?.["s=6320-AG-3244-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3225"] || 0,
              runningState:
                data?.["s=6320-AG-3245-F"] === "True" ||
                data?.["s=6320-AG-3245-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3226"] || 0,
              runningState:
                data?.["s=6320-AG-3246-F"] === "True" ||
                data?.["s=6320-AG-3246-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6320-PP-3261"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3271"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3262"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3272"] || "False",
            },
          ],
        },
        cleaner1: {
          cells: [
            {
              level: data?.["s=6340-LIT-3421"] || 0,
              runningState: data?.["s=6340-AG-3441"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3422"] || 0,
              runningState: data?.["s=6340-AG-3442"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3423"] || 0,
              runningState: data?.["s=6340-AG-3443"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3424"] || 0,
              runningState: data?.["s=6340-AG-3444"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3425"] || 0,
              runningState: data?.["s=6340-AG-3445"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3426"] || 0,
              runningState: data?.["s=6340-AG-3446"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3461"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3471"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3462"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3472"] || "False",
            },
          ],
        },
        cleaner2: {
          cells: [
            {
              level: data?.["s=6350-LIT-3525"] || 0,
              runningState: data?.["s=6350-AG-3545"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3526"] || 0,
              runningState: data?.["s=6350-AG-3546"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3527"] || 0,
              runningState: data?.["s=6350-AG-3547"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3528"] || 0,
              runningState: data?.["s=6350-AG-3548"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3529"] || 0,
              runningState: data?.["s=6350-AG-3549"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3561"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3571"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3562"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3572"] || "False",
            },
          ],
        },
        cleaner3: {
          cells: [
            {
              level: data?.["s=6350-LIT-3521"] || 0,
              runningState: data?.["s=6350-AG-3541"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3522"] || 0,
              runningState: data?.["s=6350-AG-3542"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3523"] || 0,
              runningState: data?.["s=6350-AG-3543"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3581"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3582"] || "False",
            },
          ],
        },
        mill: {
          cells: [
            {
              runningState: data?.["s=6330-PP-3311"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3312"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3287"] || "False",
            },
          ],
        },
      },
      oxyde: {
        rougher: {
          cells: [
            {
              level: data?.["s=6410-LIT-4121"] || 0,
              runningState:
                data?.["s=6410-AG-4141-F"] === "True" ||
                data?.["s=6410-AG-4141-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4122"] || 0,
              runningState:
                data?.["s=6410-AG-4142-F"] === "True" ||
                data?.["s=6410-AG-4142-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4123"] || 0,
              runningState:
                data?.["s=6410-AG-4143-F"] === "True" ||
                data?.["s=6410-AG-4143-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4124"] || 0,
              runningState:
                data?.["s=6410-AG-4144-F"] === "True" ||
                data?.["s=6410-AG-4144-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4125"] || 0,
              runningState:
                data?.["s=6410-AG-4145-F"] === "True" ||
                data?.["s=6410-AG-4145-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4126"] || 0,
              runningState:
                data?.["s=6410-AG-4146-F"] === "True" ||
                data?.["s=6410-AG-4146-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6410-LIT-4127"] || 0,
              runningState:
                data?.["s=6410-AG-4147-F"] === "True" ||
                data?.["s=6410-AG-4147-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6410-PP-4161"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4171"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4162"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4172"] || "False",
            },
          ],
        },
        scavenger: {
          cells: [
            {
              level: data?.["s=6420-LIT-4221"] || 0,
              runningState:
                data?.["s=6420-AG-4241-F"] === "True" ||
                data?.["s=6420-AG-4241-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6420-LIT-4222"] || 0,
              runningState:
                data?.["s=6420-AG-4242-F"] === "True" ||
                data?.["s=6420-AG-4242-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6420-LIT-4223"] || 0,
              runningState:
                data?.["s=6420-AG-4243-F"] === "True" ||
                data?.["s=6420-AG-4243-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6420-LIT-4224"] || 0,
              runningState:
                data?.["s=6420-AG-4244-F"] === "True" ||
                data?.["s=6420-AG-4244-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6420-LIT-4225"] || 0,
              runningState:
                data?.["s=6420-AG-4245-F"] === "True" ||
                data?.["s=6420-AG-4245-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6420-LIT-4226"] || 0,
              runningState:
                data?.["s=6420-AG-4246-F"] === "True" ||
                data?.["s=6420-AG-4246-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6420-PP-4261"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4271"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4262"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4272"] || "False",
            },
          ],
        },
        cleaner1: {
          cells: [
            {
              level: data?.["s=6430-LIT-4321"] || 0,
              runningState: data?.["s=6430-AG-4341"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4322"] || 0,
              runningState: data?.["s=6430-AG-4342"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4323"] || 0,
              runningState: data?.["s=6430-AG-4343"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4324"] || 0,
              runningState: data?.["s=6430-AG-4344"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4325"] || 0,
              runningState: data?.["s=6430-AG-4345"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4361"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4371"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4362"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4372"] || "False",
            },
          ],
        },
        cleaner2: {
          cells: [
            {
              level: data?.["s=6440-LIT-4425"] || 0,
              runningState: data?.["s=6440-AG-4445"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4426"] || 0,
              runningState: data?.["s=6440-AG-4446"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4427"] || 0,
              runningState: data?.["s=6440-AG-4447"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4428"] || 0,
              runningState: data?.["s=6440-AG-4448"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4461"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4471"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4462"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4472"] || "False",
            },
          ],
        },
        cleaner3: {
          cells: [
            {
              level: data?.["s=6440-LIT-4421"] || 0,
              runningState: data?.["s=6440-AG-4441"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4422"] || 0,
              runningState: data?.["s=6440-AG-4442"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4481"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4482"] || "False",
            },
          ],
        },
        mill: {
          cells: [
            {
              runningState: data?.["s=6330-ML-3342"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3283"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3284"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3288"] || "False",
            },
          ],
        },
      },
    };
  });
};

export const formatHistory = (data: any, setLeftData: any) => {
  setLeftData((prev: any) => {
    return {
      ...prev,
      oThickner: data?.["s=6510-WIT-5121"] || [],
      iFilter: data?.["s=6520-WIT-5215"] || [],
      oFilterWet: (data?.["s=6520-WIT-5244"] || []).map(
        (item: any, index: number) => ({
          x: item.x,
          y: (+item.y || 0) + (data?.["s=6520-WIT-5245"]?.[index]?.y || 0),
        }),
      ),
      oFilterDry: data?.["s=6520-WI-5245"] || [],

      iSulfide: data?.["s=6028-WIT-1042"] || [],
      cSulfide: data?.["s=6028-WIT-1042"] || [],
      iOxyde: data?.["s=6028-WI-1042"] || [],
      cOxyde: data?.["s=6028-WI-1042"] || [],
      tOxyde: data?.["s=6028-WI-1042"] || [],

      iRegrind: data?.["s=6330-DIT-3283"] || [],
      iCyclRegrind: data?.["s=6330-DIT-3311"] || [],
      iCyclDesl: data?.["s=6610-DIT-5411"] || [],
      oThickner2: data?.["s=6520-DIT-5215"] || [],
      iThickner: data?.["s=6510-DIT-5121"] || [],

      pax1: (data?.["s=6730-FIT-6325"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (+item.y || 0) +
            (data?.["s=6730-FIT-6326"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6327"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6328"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6329"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6330"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6331"]?.[index]?.y || 0),
        }),
      ),
      pax2: (data?.["s=6028-WI-1032"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (+item.y || 0) +
            (data?.["s=6730-FIT-6333"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6334"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6335"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6336"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6337"]?.[index]?.y || 0) +
            (data?.["s=6730-FIT-6338"]?.[index]?.y || 0),
        }),
      ),

      mibc1: (data?.["s=6720-FIT-6225"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (item.y || 0) +
            (data?.["s=6720-FIT-6226"]?.[index]?.y || 0) +
            (data?.["s=6720-FIT-6227"]?.[index]?.y || 0),
        }),
      ),
      mibc2: (data?.["s=6720-FIT-6229"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (item.y || 0) +
            (data?.["s=6720-FIT-6230"]?.[index]?.y || 0) +
            (data?.["s=6720-FIT-6231"]?.[index]?.y || 0),
        }),
      ),

      nahs1: (data?.["s=6740-FT-6422A"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (item.y || 0) +
            (data?.["s=6740-FT-6422B"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422C"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422D"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422E"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422F"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422G"]?.[index]?.y || 0),
        }),
      ),
      nahs2: (data?.["s=6740-FIT-6425"] || []).map(
        (item: any, index: number) => ({
          x: new Date(item.x),
          y:
            (item.y || 0) +
            (data?.["s=6740-FIT-6426"]?.[index]?.y || 0) +
            (data?.["s=6740-FIT-6427"]?.[index]?.y || 0) +
            (data?.["s=6740-FIT-6428"]?.[index]?.y || 0) +
            (data?.["s=6740-FIT-6429"]?.[index]?.y || 0) +
            (data?.["s=6740-FIT-6430"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422H"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422I"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422J"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422K"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422L"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422M"]?.[index]?.y || 0) +
            (data?.["s=6740-FT-6422N"]?.[index]?.y || 0),
        }),
      ),

      air1: data?.["s=6850-FIT-7541"] || [],
      air2: data?.["s=6028-WI-1042"] || [],

      oreFlow: data?.["s=6120-WIT-2042"] || [],
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
      flotYield: data?.["s=6028-WI-1042"] || 0,
      sulfideYield: data?.["s=6028-WI-1042"] || 0,
      oxydeYield: data?.["s=6028-WI-1042"] || 0,
      concentrateProduction: data?.["s=6510-WQI-5121"] || 0,
      metalProduction: data?.["s=6028-WI-1042"] || 0,
      energy: data?.["s=6900-MC-2002"] || 0 + data?.["s=6900-MC-2003"] || 0,
      water: data?.["s=6820-FIT-7211"] || 0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      oThicknerTonnage: data?.["s=6510-WQI-5121"] || 0,
      iFilterTonnage: data?.["s=6520-WQI-5215"] || 0,
      oFilterWetTonnage:
        (data?.["s=6520-WQI-5244"] || 0) + (data?.["s=6520-WQI-5245"] || 0),
      oFilterDryTonnage: data?.["s=6028-WI-1042"] || 0,

      iSulfideCop: data?.["s=6028-WI-1042"] || 0,
      iSulfideSil: data?.["s=6028-WI-1042"] || 0,
      cSulfideCop: data?.["s=6028-WI-1042"] || 0,
      cSulfideSil: data?.["s=6028-WI-1042"] || 0,
      iOxydeCop: data?.["s=6028-WI-1042"] || 0,
      iOxydeSil: data?.["s=6028-WI-1042"] || 0,
      cOxydeCop: data?.["s=6028-WI-1042"] || 0,
      cOxydeSil: data?.["s=6028-WI-1042"] || 0,
      tOxydeCop: data?.["s=6028-WI-1042"] || 0,
      tOxydeSil: data?.["s=6028-WI-1042"] || 0,

      iRegrindVal: data?.["s=6330-DIT-3283"] || 0,
      iCyclRegrindVal: data?.["s=6330-DIT-3311"] || 0,
      iCyclDeslVal: data?.["s=6610-DIT-5411"] || 0,
      oThickner2Val: data?.["s=6520-DIT-5215"] || 0,
      iThicknerVal: data?.["s=6510-DIT-5121"] || 0,

      pax1Val:
        (data?.["s=6730-FIT-6325"] || 0) +
        (data?.["s=6730-FIT-6326"] || 0) +
        (data?.["s=6730-FIT-6327"] || 0) +
        (data?.["s=6730-FIT-6328"] || 0) +
        (data?.["s=6730-FIT-6329"] || 0) +
        (data?.["s=6730-FIT-6330"] || 0) +
        (data?.["s=6730-FIT-6331"] || 0) +
        (data?.["s=6730-FIT-6332"] || 0) +
        (data?.["s=6730-FIT-6333"] || 0) +
        (data?.["s=6730-FIT-6334"] || 0) +
        (data?.["s=6730-FIT-6335"] || 0) +
        (data?.["s=6730-FIT-6336"] || 0) +
        (data?.["s=6730-FIT-6337"] || 0) +
        (data?.["s=6730-FIT-6338"] || 0),
      pax2Val: 0,

      mibc1Val:
        (data?.["s=6720-FIT-6225"] || 0) +
        (data?.["s=6720-FIT-6226"] || 0) +
        (data?.["s=6720-FIT-6227"] || 0) +
        (data?.["s=6720-FIT-6229"] || 0) +
        (data?.["s=6720-FIT-6230"] || 0) +
        (data?.["s=6720-FIT-6231"] || 0),
      mibc2Val: 0,

      nahs1Val:
        (data?.["s=6740-FT-6422A"] || 0) +
        (data?.["s=6740-FT-6422B"] || 0) +
        (data?.["s=6740-FT-6422C"] || 0) +
        (data?.["s=6740-FT-6422D"] || 0) +
        (data?.["s=6740-FT-6422E"] || 0) +
        (data?.["s=6740-FT-6422F"] || 0) +
        (data?.["s=6740-FT-6422G"] || 0) +
        (data?.["s=6740-FIT-6425"] || 0) +
        (data?.["s=6740-FIT-6426"] || 0) +
        (data?.["s=6740-FIT-6427"] || 0) +
        (data?.["s=6740-FIT-6428"] || 0) +
        (data?.["s=6740-FIT-6429"] || 0) +
        (data?.["s=6740-FIT-6430"] || 0) +
        (data?.["s=6740-FT-6422H"] || 0) +
        (data?.["s=6740-FT-6422I"] || 0) +
        (data?.["s=6740-FT-6422J"] || 0) +
        (data?.["s=6740-FT-6422K"] || 0) +
        (data?.["s=6740-FT-6422L"] || 0) +
        (data?.["s=6740-FT-6422M"] || 0) +
        (data?.["s=6740-FT-6422N"] || 0),
      nahs2Val: 0,

      air1Val: data?.["s=6850-FIT-7541"] || 0,
      air2Val: data?.["s=6028-WI-1042"] || 0,

      oreFlowVal: data?.["s=6120-WIT-2042"] || 0,

      oThickner: [
        ...(prev?.oThickner?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6510-WIT-5121"] || 0,
        },
      ],
      iFilter: [
        ...(prev?.iFilter?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6520-WIT-5215"] || 0,
        },
      ],
      oFilterWet: [
        ...(prev?.oFilterWet?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6520-WIT-5244"] || 0) + (data?.["s=6520-WIT-5245"] || 0),
        },
      ],
      oFilterDry: [
        ...(prev?.oFilterDry?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],

      iSulfide: [
        ...(prev?.iSulfide?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],
      cSulfide: [
        ...(prev?.cSulfide?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],
      iOxyde: [
        ...(prev?.iOxyde?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],
      cOxyde: [
        ...(prev?.cOxyde?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],
      tOxyde: [
        ...(prev?.tOxyde?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],

      iRegrind: [
        ...(prev?.iRegrind?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6330-DIT-3283"] || 0,
        },
      ],
      iCyclRegrind: [
        ...(prev?.iCyclRegrind?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6330-DIT-3311"] || 0,
        },
      ],
      iCyclDesl: [
        ...(prev?.iCyclDesl?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6610-DIT-5411"] || 0,
        },
      ],
      oThickner2: [
        ...(prev?.oThickner2?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6520-DIT-5215"] || 0,
        },
      ],
      iThickner: [
        ...(prev?.iThickner?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6510-DIT-5121"] || 0,
        },
      ],

      pax1: [
        ...(prev?.pax1?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6730-FIT-6325"] || 0) +
            (data?.["s=6730-FIT-6326"] || 0) +
            (data?.["s=6730-FIT-6327"] || 0) +
            (data?.["s=6730-FIT-6328"] || 0) +
            (data?.["s=6730-FIT-6329"] || 0) +
            (data?.["s=6730-FIT-6330"] || 0) +
            (data?.["s=6730-FIT-6331"] || 0),
        },
      ],
      pax2: [
        ...(prev?.pax2?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6730-FIT-6332"] || 0) +
            (data?.["s=6730-FIT-6333"] || 0) +
            (data?.["s=6730-FIT-6334"] || 0) +
            (data?.["s=6730-FIT-6335"] || 0) +
            (data?.["s=6730-FIT-6336"] || 0) +
            (data?.["s=6730-FIT-6337"] || 0) +
            (data?.["s=6730-FIT-6338"] || 0),
        },
      ],

      mibc1: [
        ...(prev?.mibc1?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6720-FIT-6225"] || 0) +
            (data?.["s=6720-FIT-6226"] || 0) +
            (data?.["s=6720-FIT-6227"] || 0),
        },
      ],
      mibc2: [
        ...(prev?.mibc2?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6720-FIT-6229"] || 0) +
            (data?.["s=6720-FIT-6230"] || 0) +
            (data?.["s=6720-FIT-6231"] || 0),
        },
      ],

      nahs1: [
        ...(prev?.nahs1?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6740-FT-6422A"] || 0) +
            (data?.["s=6740-FT-6422B"] || 0) +
            (data?.["s=6740-FT-6422C"] || 0) +
            (data?.["s=6740-FT-6422D"] || 0) +
            (data?.["s=6740-FT-6422E"] || 0) +
            (data?.["s=6740-FT-6422F"] || 0) +
            (data?.["s=6740-FT-6422G"] || 0),
        },
      ],
      nahs2: [
        ...(prev?.nahs2?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.["s=6740-FIT-6425"] || 0) +
            (data?.["s=6740-FIT-6426"] || 0) +
            (data?.["s=6740-FIT-6427"] || 0) +
            (data?.["s=6740-FIT-6428"] || 0) +
            (data?.["s=6740-FIT-6429"] || 0) +
            (data?.["s=6740-FIT-6430"] || 0) +
            (data?.["s=6740-FT-6422H"] || 0) +
            (data?.["s=6740-FT-6422I"] || 0) +
            (data?.["s=6740-FT-6422J"] || 0) +
            (data?.["s=6740-FT-6422K"] || 0) +
            (data?.["s=6740-FT-6422L"] || 0) +
            (data?.["s=6740-FT-6422M"] || 0) +
            (data?.["s=6740-FT-6422N"] || 0),
        },
      ],

      air1: [
        ...(prev?.air1?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6850-FIT-7541"] || 0,
        },
      ],
      air2: [
        ...(prev?.air2?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6028-WI-1042"] || 0,
        },
      ],

      oreFlow: [
        ...(prev?.oreFlow?.slice(1) || []),
        {
          x: new Date(),
          y: data?.["s=6120-WIT-2042"] || 0,
        },
      ],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      sulfide: {
        rougher: {
          cells: [
            {
              level: data?.["s=6310-LIT-3121"] || 0,
              runningState:
                data?.["s=6310-AG-3141-F"] === "True" ||
                data?.["s=6310-AG-3141-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3122"] || 0,
              runningState:
                data?.["s=6310-AG-3142-F"] === "True" ||
                data?.["s=6310-AG-3142-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3123"] || 0,
              runningState:
                data?.["s=6310-AG-3143-F"] === "True" ||
                data?.["s=6310-AG-3143-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3124"] || 0,
              runningState:
                data?.["s=6310-AG-3144-F"] === "True" ||
                data?.["s=6310-AG-3144-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3125"] || 0,
              runningState:
                data?.["s=6310-AG-3145-F"] === "True" ||
                data?.["s=6310-AG-3145-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3126"] || 0,
              runningState:
                data?.["s=6310-AG-3146-F"] === "True" ||
                data?.["s=6310-AG-3146-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6310-LIT-3127"] || 0,
              runningState:
                data?.["s=6310-AG-3147-F"] === "True" ||
                data?.["s=6310-AG-3147-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6310-PP-3161"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3771"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3162"] || "False",
            },
            {
              runningState: data?.["s=6310-PP-3772"] || "False",
            },
          ],
        },
        scavenger: {
          cells: [
            {
              level: data?.["s=6320-LIT-3221"] || 0,
              runningState:
                data?.["s=6320-AG-3241-F"] === "True" ||
                data?.["s=6320-AG-3241-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3222"] || 0,
              runningState:
                data?.["s=6320-AG-3242-F"] === "True" ||
                data?.["s=6320-AG-3242-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3223"] || 0,
              runningState:
                data?.["s=6320-AG-3243-F"] === "True" ||
                data?.["s=6320-AG-3243-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3224"] || 0,
              runningState:
                data?.["s=6320-AG-3244-F"] === "True" ||
                data?.["s=6320-AG-3244-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3225"] || 0,
              runningState:
                data?.["s=6320-AG-3245-F"] === "True" ||
                data?.["s=6320-AG-3245-R"] === "True" ||
                "False",
            },
            {
              level: data?.["s=6320-LIT-3226"] || 0,
              runningState:
                data?.["s=6320-AG-3246-F"] === "True" ||
                data?.["s=6320-AG-3246-R"] === "True" ||
                "False",
            },
            {
              runningState: data?.["s=6320-PP-3261"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3271"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3262"] || "False",
            },
            {
              runningState: data?.["s=6320-PP-3272"] || "False",
            },
          ],
        },
        cleaner1: {
          cells: [
            {
              level: data?.["s=6340-LIT-3421"] || 0,
              runningState: data?.["s=6340-AG-3441"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3422"] || 0,
              runningState: data?.["s=6340-AG-3442"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3423"] || 0,
              runningState: data?.["s=6340-AG-3443"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3424"] || 0,
              runningState: data?.["s=6340-AG-3444"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3425"] || 0,
              runningState: data?.["s=6340-AG-3445"] || "False",
            },
            {
              level: data?.["s=6340-LIT-3426"] || 0,
              runningState: data?.["s=6340-AG-3446"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3461"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3471"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3462"] || "False",
            },
            {
              runningState: data?.["s=6340-PP-3472"] || "False",
            },
          ],
        },
        cleaner2: {
          cells: [
            {
              level: data?.["s=6350-LIT-3525"] || 0,
              runningState: data?.["s=6350-AG-3545"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3526"] || 0,
              runningState: data?.["s=6350-AG-3546"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3527"] || 0,
              runningState: data?.["s=6350-AG-3547"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3528"] || 0,
              runningState: data?.["s=6350-AG-3548"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3529"] || 0,
              runningState: data?.["s=6350-AG-3549"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3561"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3571"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3562"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3572"] || "False",
            },
          ],
        },
        cleaner3: {
          cells: [
            {
              level: data?.["s=6350-LIT-3521"] || 0,
              runningState: data?.["s=6350-AG-3541"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3522"] || 0,
              runningState: data?.["s=6350-AG-3542"] || "False",
            },
            {
              level: data?.["s=6350-LIT-3523"] || 0,
              runningState: data?.["s=6350-AG-3543"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3581"] || "False",
            },
            {
              runningState: data?.["s=6350-PP-3582"] || "False",
            },
          ],
        },
        mill: {
          cells: [
            {
              runningState: data?.["s=6330-PP-3311"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3312"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3287"] || "False",
            },
          ],
        },
      },
      oxyde: {
        rougher: {
          cells: [
            {
              level: data?.["s=6410-LIT-4121"] || 0,
              runningState: data?.["s=6410-AG-4141"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4122"] || 0,
              runningState: data?.["s=6410-AG-4142"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4123"] || 0,
              runningState: data?.["s=6410-AG-4143"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4124"] || 0,
              runningState: data?.["s=6410-AG-4144"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4125"] || 0,
              runningState: data?.["s=6410-AG-4145"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4126"] || 0,
              runningState: data?.["s=6410-AG-4146"] || "False",
            },
            {
              level: data?.["s=6410-LIT-4127"] || 0,
              runningState: data?.["s=6410-AG-4147"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4161"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4171"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4162"] || "False",
            },
            {
              runningState: data?.["s=6410-PP-4172"] || "False",
            },
          ],
        },
        scavenger: {
          cells: [
            {
              level: data?.["s=6420-LIT-4221"] || 0,
              runningState: data?.["s=6420-AG-4241"] || "False",
            },
            {
              level: data?.["s=6420-LIT-4222"] || 0,
              runningState: data?.["s=6420-AG-4242"] || "False",
            },
            {
              level: data?.["s=6420-LIT-4223"] || 0,
              runningState: data?.["s=6420-AG-4243"] || "False",
            },
            {
              level: data?.["s=6420-LIT-4224"] || 0,
              runningState: data?.["s=6420-AG-4244"] || "False",
            },
            {
              level: data?.["s=6420-LIT-4225"] || 0,
              runningState: data?.["s=6420-AG-4245"] || "False",
            },
            {
              level: data?.["s=6420-LIT-4226"] || 0,
              runningState: data?.["s=6420-AG-4246"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4261"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4271"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4262"] || "False",
            },
            {
              runningState: data?.["s=6420-PP-4272"] || "False",
            },
          ],
        },
        cleaner1: {
          cells: [
            {
              level: data?.["s=6430-LIT-4321"] || 0,
              runningState: data?.["s=6430-AG-4341"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4322"] || 0,
              runningState: data?.["s=6430-AG-4342"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4323"] || 0,
              runningState: data?.["s=6430-AG-4343"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4324"] || 0,
              runningState: data?.["s=6430-AG-4344"] || "False",
            },
            {
              level: data?.["s=6430-LIT-4325"] || 0,
              runningState: data?.["s=6430-AG-4345"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4361"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4371"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4362"] || "False",
            },
            {
              runningState: data?.["s=6430-PP-4372"] || "False",
            },
          ],
        },
        cleaner2: {
          cells: [
            {
              level: data?.["s=6440-LIT-4425"] || 0,
              runningState: data?.["s=6440-AG-4445"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4426"] || 0,
              runningState: data?.["s=6440-AG-4446"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4427"] || 0,
              runningState: data?.["s=6440-AG-4447"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4428"] || 0,
              runningState: data?.["s=6440-AG-4448"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4461"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4471"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4462"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4472"] || "False",
            },
          ],
        },
        cleaner3: {
          cells: [
            {
              level: data?.["s=6440-LIT-4421"] || 0,
              runningState: data?.["s=6440-AG-4441"] || "False",
            },
            {
              level: data?.["s=6440-LIT-4422"] || 0,
              runningState: data?.["s=6440-AG-4442"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4481"] || "False",
            },
            {
              runningState: data?.["s=6440-PP-4482"] || "False",
            },
          ],
        },
        mill: {
          cells: [
            {
              runningState: data?.["s=6330-ML-3342"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3283"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3284"] || "False",
            },
            {
              runningState: data?.["s=6330-PP-3288"] || "False",
            },
          ],
        },
      },
    };
  });
};
