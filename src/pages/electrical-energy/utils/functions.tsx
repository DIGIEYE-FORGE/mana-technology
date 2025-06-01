export const formatData = (
  data: any,
  setUpData: any,
  setLeftData: any,
  setRightData: any,
  setMiddleData: any,
) => {
  data = changeKey(data);
  const power =
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
    ) +
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
    );
  const totalPower =
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
    ) +
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
    );
  const Rpower =
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
    ) +
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
    );
  // calc cosphi

  const energy = data?.["s=6100-TR-2001"] || 0;
  setUpData((prev: any) => {
    return {
      ...prev,
      energy: energy,
      powerDemand: power,
      cosphi: (
        power / Math.sqrt(Math.pow(power, 2) + Math.pow(totalPower, 2))
      ).toFixed(2),
      reactivePower: Rpower,
      totalPower: totalPower,
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      powerValue: power,
      energyValue: energy,
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
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
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
      line1:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] > 0,
      line2:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] > 0,
      crushing:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      plant1:
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      plant2:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      mine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,

      valueLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value"
        ] || 0,
      valueRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value"
        ] || 0,

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
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value"
        ] || 0,
      icLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value"
        ] || 0,

      activePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
      reactivePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
      totalPowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
      cosPhiRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"] || 0,

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
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value"
        ] || 0,
      icRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value"
        ] || 0,

      vaMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] ||
        0,
      vbMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] ||
        0,
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
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] || 0,
      iProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] ||
        0,
      iMine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pMine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] ||
        0,

      iArray: [
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
      ],
      pArray: [
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
      ],
    };
  });
};

function changeKey(data: any): any {
  const mapper = {
    J10_USINE1_P:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value",
    "6MD85_D1_ComFault": "s=TIZERT_6MD85_D1_ComFault.Value",
    "6MD85_D1_Cmd_D1":
      "s=TIZERT_6MD85_D1_D1_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D1_Cmd_G2":
      "s=TIZERT_6MD85_D1_G2_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D1_Cmd_NG1":
      "s=TIZERT_6MD85_D1_NG1_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D1_Cmd_SD1":
      "s=TIZERT_6MD85_D1_SD1_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D1_SynOK": "s=TIZERT_6MD85_D1_SORTE_R_init_LED_FG_SYNCHRO_OK.Value",
    "6MD85_D1_P": "s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value",
    "6MD85_D1_Q": "s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_Q_total_mag_f.Value",
    "6MD85_D1_S": "s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_S_total_mag_f.Value",
    "6MD85_D1_cosPhi": "s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value",
    "6MD85_D1_F": "s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_f_mag_f.Value",
    "6MD85_D1_IphA":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value",
    "6MD85_D1_IphB":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value",
    "6MD85_D1_IphC":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value",
    "6MD85_D1_VphA":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsA_cVal_mag_f.Value",
    "6MD85_D1_VphB":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsB_cVal_mag_f.Value",
    "6MD85_D1_VphC":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Uph_phsC_cVal_mag_f.Value",
    "6MD85_D1_VphAB":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value",
    "6MD85_D1_VphBC":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Upp_phsBC_cVal_mag_f.Value",
    "6MD85_D1_VphCA":
      "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Upp_phsCA_cVal_mag_f.Value",
    "6MD85_D1_AlSF6":
      "s=TIZERT_6MD85_D1_entre_R_init_LED_FG_ALARME_1er_SEUIL_SF6.Value",
    "6MD85_D1_DisjDist":
      "s=TIZERT_6MD85_D1_entre_R_init_LED_FG_DISJ_EN_MOD_DISTANT.Value",
    "6MD85_D1_TrDist":
      "s=TIZERT_6MD85_D1_entre_R_init_LED_FG_TRANCHE_EN_DISTANCE.Value",
    "6MD85_D2_ComFault": "s=TIZERT_6MD85_D2_ComFault.Value",
    "6MD85_D2_D2_Cmd":
      "s=TIZERT_6MD85_D2_D2_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D2_G2_Cmd":
      "s=TIZERT_6MD85_D2_G2_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D2_SynOK":
      "s=TIZERT_6MD85_D2_LIGNE_M_V_R_init_LED_FG_SYNCHRO_OK.Value",
    "6MD85_D2_NG2_Cmd":
      "s=TIZERT_6MD85_D2_NG2_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D2_SD2_Cmd":
      "s=TIZERT_6MD85_D2_SD2_Commande_Ordre_avec_sign__retour.Value",
    "6MD85_D2_P": "s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value",
    "6MD85_D2_Q": "s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value",
    "6MD85_D2_S": "s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_S_total_mag_f.Value",
    "6MD85_D2_cosPhi": "s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value",
    "6MD85_D2_F": "s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_f_mag_f.Value",
    "6MD85_D2_IphA":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value",
    "6MD85_D2_IphB":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value",
    "6MD85_D2_IphC":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value",
    "6MD85_D2_VphA":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsA_cVal_mag_f.Value",
    "6MD85_D2_VphB":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsB_cVal_mag_f.Value",
    "6MD85_D2_VphC":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Uph_phsC_cVal_mag_f.Value",
    "6MD85_D2_VphAB":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value",
    "6MD85_D2_VphBC":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Upp_phsBC_cVal_mag_f.Value",
    "6MD85_D2_VphCA":
      "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Upp_phsCA_cVal_mag_f.Value",
    "6MD85_D2_AlSF6":
      "s=TIZERT_6MD85_D2_entre_R_init_LED_FG_ALARME_1er_SEUIL_SF6.Value",
    "6MD85_D2_DefAlimMot":
      "s=TIZERT_6MD85_D2_entre_R_init_LED_FG_DISJ_DEFAUT_ALIM_MOTEUR.Value",
    "6MD85_D2_TrDist":
      "s=TIZERT_6MD85_D2_entre_R_init_LED_FG_TRANCHE_EN_DISTANCE.Value",
    "6MD85_D2_TrLoc":
      "s=TIZERT_6MD85_D2_entre_R_init_LED_FG_TRANCHE_EN_LOCAL.Value",
    TR1_P: "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_P_total_mag_f.Value",
    TR1_Q: "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_Q_total_mag_f.Value",
    TR1_S: "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_S_total_mag_f.Value",
    TR1_cosPhi: "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value",
    TR1_F: "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Puiss_f_mag_f.Value",
    TR1_IphA:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value",
    TR1_IphB:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value",
    TR1_IphC:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value",
    TR1_VphA:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Uph_phsA_cVal_mag_f.Value",
    TR1_VphB:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Uph_phsB_cVal_mag_f.Value",
    TR1_VphC:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Uph_phsC_cVal_mag_f.Value",
    TR1_VphAB:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value",
    TR1_VphBC:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Upp_phsBC_cVal_mag_f.Value",
    TR1_VphCA:
      "s=TIZERT_UCL_6MD85_TR1_UI3p1_Valm_Val_eff_Upp_phsCA_cVal_mag_f.Value",
    TR2_P: "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_P_total_mag_f.Value",
    TR2_Q: "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_Q_total_mag_f.Value",
    TR2_cosPhi: "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value",
    TR2_F: "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_f_mag_f.Value",
    TR2_IphA:
      "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value",
    TR2_IphB:
      "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value",
    TR2_IphC:
      "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value",
    TR2_VphBC:
      "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Val_eff_Upp_phsBC_cVal_mag_f.Value",
    TR2_VphCA:
      "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Val_eff_Upp_phsCA_cVal_mag_f.Value",
    TR2_S: "s=TIZERT_UCL_6MD85_TR2_UI3p1_Valm_Puiss_S_total_mag_f.Value",
    J10_USINE1_F:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J10_USINE1_IphA:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J10_USINE1_IphB:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J10_USINE1_IphC:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J10_USINE1_Ires:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_res_cVal_mag_f.Value",
    J10_USINE1_VphAB:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J10_USINE1_VphBC:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsBC_cVal_mag_f.Value",
    J10_USINE1_VphCA:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsCA_cVal_mag_f.Value",
    J10_USINE1_S:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J10_USINE1_PF:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J10_USINE1_Q:
      "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J11_CONCASSAGE_IphA:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J11_CONCASSAGE_IphB:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J11_CONCASSAGE_IphC:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J11_CONCASSAGE_Ires:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_res_cVal_mag_f.Value",
    J11_CONCASSAGE_VphAB:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J11_CONCASSAGE_S:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J11_CONCASSAGE_PF:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J11_CONCASSAGE_Q:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J11_CONCASSAGE_P:
      "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value",
    J4_MINE_F:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J4_MINE_IphA:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J4_MINE_IphB:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J4_MINE_IphC:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J4_MINE_Ires:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_res_cVal_mag_f.Value",
    J4_MINE_VphAB:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J4_MINE_S:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J4_MINE_PF:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J4_MINE_Q:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J4_MINE_P:
      "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value",
    J5_USINE2_F:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J5_USINE2_IphA:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J5_USINE2_IphB:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J5_USINE2_IphC:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J5_USINE2_Ires:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_res_cVal_mag_f.Value",
    J5_USINE2_VphAB:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J5_USINE2_S:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J5_USINE2_PF:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J5_USINE2_Q:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J5_USINE2_P:
      "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value",
    J6_TR2_F:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J6_TR2_IphB:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J6_TR2_IphC:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J6_TR2_VphAB:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J6_TR2_S:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J6_TR2_PF:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J6_TR2_Q:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J6_TR2_P:
      "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value",
    J8_COUPLAGE_F:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J8_COUPLAGE_IphA:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J8_COUPLAGE_IphB:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J8_COUPLAGE_IphC:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J8_COUPLAGE_VphAB:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J8_COUPLAGE_S:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J8_COUPLAGE_PF:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J8_COUPLAGE_Q:
      "s=TIZERT_POSTE_MT_J8_COUPLAGE_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J9_TR1_F:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Frequency_mag_f.Value",
    J9_TR1_IphA:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value",
    J9_TR1_IphB:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_Currents_phsB_cVal_mag_f.Value",
    J9_TR1_IphC:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_Currents_phsC_cVal_mag_f.Value",
    J9_TR1_VphAB:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value",
    J9_TR1_S:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Total_Apparent_Power__Total_S__mag_f.Value",
    J9_TR1_PF:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Total_Power_Factor__Total_PF__mag_f.Value",
    J9_TR1_Q:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Total_Reactive_Power__Total_Q__mag_f.Value",
    J9_TR1_P:
      "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value",
  };
  const out: any = {};

  // 1  mapped keys
  for (const [oldKey, newKey] of Object.entries(mapper)) {
    if (oldKey in data && newKey) {
      out[newKey] = data[oldKey];
    }
  }
  return out;
}

export const formatHistory = (
  data: any,
  setLeftData: any,
  setRightData: any,
) => {
  data = changeKey(data);
  setLeftData((prev: any) => {
    return {
      ...prev,
      power: (
        data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || []
      ).map((item: any, index: number) => ({
        x: new Date(item?.x),
        y:
          (+item.y || 0) +
            data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"]?.[
              index
            ].y || 0,
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
  data = changeKey(data);
  const power =
    Number(data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value"]) +
    Number(data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"]);
  console.log("Power");
  console.log(power);
  console.log(
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
    ),
  );
  console.log(
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
    ),
  );
  const totalPower =
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
    ) +
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
    );
  const Rpower =
    Number(
      data?.["s=TIZERT_6MD85_D1_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
    ) +
    Number(
      data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
    );

  setUpData((prev: any) => {
    return {
      ...prev,
      energy: data?.["s=6100-TR-2001"] || 0,
      powerDemand: power,
      cosphi: (
        power / Math.sqrt(Math.pow(power, 2) + Math.pow(totalPower, 2))
      ).toFixed(2),
      reactivePower: Rpower,
      totalPower: totalPower.toFixed(2),
    };
  });

  setLeftData((prev: any) => {
    return {
      ...prev,
      powerValue: data?.["s=6210-WI-2217"] || 0,
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
      minePowerValue: data?.["s=6210-WI-2217"] || 0,
      offsitePowerValue: data?.["s=6210-WI-2217"] || 0,
      power: [
        ...(prev?.power?.slice(1) || []),
        {
          x: new Date(),
          y: power,
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
              "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
            ] || 0),
        },
      ],
      minePower: [
        ...(prev?.minePower?.slice(1) || []),
        {
          x: new Date(),
          y:
            data?.[
              "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
            ] || 0,
        },
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
      line1:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] > 0,
      line2:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] > 0,
      crushing:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      plant1:
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      plant2:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      mine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] > 0,
      valueLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value"
        ] || 0,
      valueRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Upp_phsAB_cVal_mag_f.Value"
        ] || 0,

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
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value"
        ] || 0,
      icLeft:
        data?.[
          "s=TIZERT_6MD85_D1_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value"
        ] || 0,

      activePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_P_total_mag_f.Value"] || 0,
      reactivePowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_Q_total_mag_f.Value"] || 0,
      totalPowerRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_S_total_mag_f.Value"] || 0,
      cosPhiRight:
        data?.["s=TIZERT_6MD85_D2_UI3p1_Valm_Puiss_cos_Phi_mag_f.Value"] || 0,
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
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsA_cVal_mag_f.Value"
        ] || 0,
      ibRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsB_cVal_mag_f.Value"
        ] || 0,
      icRight:
        data?.[
          "s=TIZERT_6MD85_D2_UI3p1_Valm_Val_eff_Iph_phsC_cVal_mag_f.Value"
        ] || 0,

      vaMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Phase_to_Phase_Voltages_phsAB_cVal_mag_f.Value"
        ] || 0,
      vbMiddle:
        data?.[
          "s=TIZERT_POSTE_MT_J6_ARRIVEE_TR2_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J9_ARRIVEE_TR1_Measurement_VI_MMXU_Frequency_mag_f.Value"
        ] ||
        0,
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
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pCrushing:
        data?.[
          "s=TIZERT_POSTE_MT_J11_DEPART_N_5_CONCASSAGE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] || 0,
      iProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pProcess:
        data?.[
          "s=TIZERT_POSTE_MT_J10_DEPART_N_6_USINE_1_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Total_Real_Power_Total_P_mag_f.Value"
        ] ||
        0,
      iMine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] || 0,
      pMine:
        data?.[
          "s=TIZERT_POSTE_MT_J4_DEPART_N_8_MINE_Measurement_VI_MMXU_Total_Real_Power__Total_P__mag_f.Value"
        ] ||
        data?.[
          "s=TIZERT_POSTE_MT_J5_DEPART_N_7_USINE2_Measurement_VI_MMXU_Phase_Currents_phsA_cVal_mag_f.Value"
        ] ||
        0,

      iArray: [
        data?.["s=6210-WI-2217"] || 0,
        data?.["s=6210-WI-2217"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
      ],
      pArray: [
        data?.["s=6210-WI-2217"] || 0,
        data?.["s=6210-WI-2217"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
        data?.["value"] || 0,
      ],
    };
  });
};
