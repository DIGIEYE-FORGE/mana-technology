export const formatData = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
  setMiddleData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      energy: data?.["s=6100-TR-2001"] || 0,
      powerDemand:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value"
          ] ||
        0,
      cosphi:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"
          ] ||
        0,
      reactivePower:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"
          ] ||
        0,
      totalPower:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_S_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_S_total_mag_f.Value"
          ] ||
        0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      powerValue:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value"
          ] ||
        0,
      energyValue: data?.["s=6100-TR-2001"] || 0,
      plantPowerValue:
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] ||
        0 +
          data?.[
            "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
          ] ||
        0,
      minePowerValue:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      offsitePowerValue: data?.["s=6210-WI-2217"] || 0,
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      crushingValue: data?.["s=6210-WI-2217"] || 0,
      grindingValue: data?.["s=6210-WI-2217"] || 0,
      flotationValue: data?.["s=6210-WI-2217"] || 0,
      tailingValue: data?.["s=6210-WI-2217"] || 0,
      concentrateValue: data?.["s=6210-WI-2217"] || 0,
      regeantValue: data?.["s=6210-WI-2217"] || 0,
    };
  });

  setMiddleData((prev: any) => {
    return {
      ...prev,
      valueLeft: data?.["s=6210-WI-2217"] || 0,
      valueRight: data?.["s=6100-TR-2001"] || 0,

      activePowerLeft:
        data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
      reactivePowerLeft:
        data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
      totalPowerLeft:
        data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
      cosPhiLeft:
        data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"] || 0,

      vaLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsA_cVal_mag_f.Value"
        ] || 0,
      vbLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsB_cVal_mag_f.Value"
        ] || 0,
      vcLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsC_cVal_mag_f.Value"
        ] || 0,
      iaLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_lph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_lph_phsB_cVal_mag_f.Value"
        ] || 0,
      icLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_lph_phsC_cVal_mag_f.Value"
        ] || 0,

      activePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
      reactivePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
      totalPowerRight: data?.["value"] || 0,
      cosPhiRight: data?.["value"] || 0,

      vaRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsA_cVal_mag_f.Value"
        ] || 0,
      vbRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsB_cVal_mag_f.Value"
        ] || 0,
      vcRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsC_cVal_mag_f.Value"
        ] || 0,
      iaRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_lph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_lph_phsB_cVal_mag_f.Value"
        ] || 0,
      icRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_lph_phsC_cVal_mag_f.Value"
        ] || 0,

      vaMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] || 0,
      vbMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vcMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] || 0,
      vdMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,

      iCrushing:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pCrushing:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      iProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] || 0,
      iMine:
        data?.[
          "TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f"
        ] || 0,
      pMine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] || 0,

      iArray: [data?.["value"] || 0, data?.["value"] || 0],
      pArray: [data?.["value"] || 0, data?.["value"] || 0],
    };
  });
};

export const formatHistory = (
  data: any,
  setLeftData: any,
  setRightData: any,
) => {
  setLeftData((prev: any) => {
    return {
      ...prev,
      power: (
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] ||
        []
      ).map((item: any, index: number) => ({
        x: new Date(item?.x),
        y:
          (+item.y || 0) +
            data?.[
              "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value"
            ]?.[index].y || 0,
      })),
      energy: data?.["s=6100-TR-2001"] || [],
      plantPower: (
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] || []
      ).map((item: any, index: number) => ({
        x: new Date(item?.x),
        y:
          (+item.y || 0) +
            data?.[
              "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
            ]?.[index].y || 0,
      })),
      minePower:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || [],
      offsitePower: data?.["s=6210-WI-2217"] || [],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      crushingValue: data?.["s=6210-WI-2217"] || [],
      grindingValue: data?.["s=6210-WI-2217"] || [],
      flotationValue: data?.["s=6210-WI-2217"] || [],
      tailingValue: data?.["s=6210-WI-2217"] || [],
      concentrateValue: data?.["s=6210-WI-2217"] || [],
      regeantValue: data?.["s=6210-WI-2217"] || [],
    };
  });
};

export const updateDataWithSocket = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
  setMiddleData: any,
) => {
  setUpData((prev: any) => {
    return {
      ...prev,
      energy: data?.["s=6100-TR-2001"] || 0,
      powerDemand:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value"
          ] ||
        0,
      cosphi:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"
          ] ||
        0,
      reactivePower:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"
          ] ||
        0,
      totalPower:
        data?.["s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_S_total_mag_f.Value"] ||
        0 +
          data?.[
            "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_S_total_mag_f.Value"
          ] ||
        0,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      powerValue: data?.["s=6210-WI-2217"] || 0,
      energyValue: data?.["s=6100-TR-2001"] || 0,
      plantPowerValue: data?.["s=6210-WI-2217"] || 0,
      minePowerValue: data?.["s=6210-WI-2217"] || 0,
      offsitePowerValue: data?.["s=6210-WI-2217"] || 0,
      power: [
        ...(prev?.power?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.[
              "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value"
            ] || 0) +
            (data?.[
              "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value"
            ] || 0),
        },
      ],
      energy: [
        ...(prev?.energy?.slice(1) || []),
        { x: new Date(), y: data?.["s=6100-TR-2001"] || 0 },
      ],
      plantPower: [
        ...(prev?.plantPower?.slice(1) || []),
        {
          x: new Date(),
          y:
            (data?.[
              "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
            ] || 0) +
            (data?.[
              "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
            ] || 0),
        },
      ],
      minePower: [
        ...(prev?.minePower?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      offsitePower: [
        ...(prev?.offsitePower?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
    };
  });

  setRightData((prev: any) => {
    return {
      ...prev,
      crushingValue: data?.["s=6210-WI-2217"] || 0,
      grindingValue: data?.["s=6210-WI-2217"] || 0,
      flotationValue: data?.["s=6210-WI-2217"] || 0,
      tailingValue: data?.["s=6210-WI-2217"] || 0,
      concentrateValue: data?.["s=6210-WI-2217"] || 0,
      regeantValue: data?.["s=6210-WI-2217"] || 0,
      crushing: [
        ...(prev?.crushing?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      grinding: [
        ...(prev?.grinding?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      flotation: [
        ...(prev?.flotation?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      tailing: [
        ...(prev?.tailing?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      concentrate: [
        ...(prev?.concentrate?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
      regeant: [
        ...(prev?.regeant?.slice(1) || []),
        { x: new Date(), y: data?.["s=6210-WI-2217"] || 0 },
      ],
    };
  });

  setMiddleData((prev: any) => {
    return {
      ...prev,
      valueLeft: data?.["s=6210-WI-2217"] || 0,
      valueRight: data?.["s=6100-TR-2001"] || 0,

      activePowerLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      reactivePowerLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Reactive_Power_Total_Q_mag_f.Value"
        ] || 0,
      totalPowerLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Power_Total_S_mag_f.Value"
        ] || 0,
      cosPhiLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Cos_Phi_mag_f.Value"
        ] || 0,

      vaLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vbLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vcLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      iaLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      ibLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      icLeft:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,

      activePowerRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      reactivePowerRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Reactive_Power_Total_Q_mag_f.Value"
        ] || 0,
      totalPowerRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Power_Total_S_mag_f.Value"
        ] || 0,
      cosPhiRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Cos_Phi_mag_f.Value"
        ] || 0,
      vaRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vbRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vcRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      iaRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      ibRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      icRight:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,

      vaMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vbMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vcMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vdMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,

      iCrushing:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pCrushing:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      iProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,
      iMine:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pMine:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] || 0,

      iArray: [data?.["s=6210-WI-2217"] || 0, data?.["s=6210-WI-2217"] || 0],
      pArray: [data?.["s=6210-WI-2217"] || 0, data?.["s=6210-WI-2217"] || 0],
    };
  });
};
