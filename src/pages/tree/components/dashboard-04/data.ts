export const widgetsData = {
  0: {
    title: "Tonnage Déblayé (t/poste)",
    attributes: {
      telemetries: [
        {
          name: "UG_DEBLAYAGE_TONNE_DE_STERILE_PAR_POSTE-tonne_par_poste",
          color: "#25A18E",
          label: "Est 11",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    },
  },
  1: {
    title: "Performance Engins",
    attributes: {
      image: "/machine-04.png",
      name: "Déblayage R1700",
      telemetries: [
        {
          name: "UG_CHARG_CAT_R1700_14T_1_TD",
          label: "Disponibilité",
          serial: "1ET8MCQDVOPFLVBX",
          color: "#cda943",
        },
        {
          name: "UG_CHARG_CAT_R1700_14T_1_TU",
          label: "Utilisation",
          serial: "1ET8MCQDVOPFLVBX",
          color: "#18a5c1",
        },
      ],
    },
  },
  2: {
    title: "Performance Déblayage",
    attributes: {
      telemetries: [
        {
          name: "UG_DEBLAYAGE_PERFORMANCES_DEBLAYAGE_AVEC_LHD_R1700-tonne_par_heure",
          color: "#FF5AF1",
          label: "t/h",
          serial: "Y1UMITGTHATVAUQI",
        },
        {
          name: "", //TODO calculable UG_DEBLAYAGE_PERFORMANCES_DEBLAYAGE_AVEC_LHD_R1700-tonne_par_heure / UG_DEBLAYAGE_DISTANCE-m
          color: "#FFDC8C",
          label: "t/h/ml",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    },
  },
  3: {
    title: "Disponibilité",
    attributes: {
      telemetries: [
        {
          name: "UG_CHARG_CAT_R1700_14T_1_TD",
          color: "#FF5AF1",
          label: "R1700 01",
          serial: "1ET8MCQDVOPFLVBX",
        },
        {
          name: "UG_CHARG_CAT_R1700_14T_2_TD",
          color: "#FFDC8C",
          label: "R1700 02",
          serial: "1ET8MCQDVOPFLVBX",
        },
      ],
    },
  },
  4: {
    title: "Utilisation",
    attributes: {
      telemetries: [
        {
          name: "UG_CHARG_CAT_R1700_14T_1_TU",
          color: "#FF5AF1",
          label: "R1700 01",
          serial: "1ET8MCQDVOPFLVBX",
        },
        {
          name: "UG_CHARG_CAT_R1700_14T_2_TU",
          color: "#FFDC8C",
          label: "R1700 02",
          serial: "1ET8MCQDVOPFLVBX",
        },
      ],
    },
  },

  5: {
    title: "Temps de Déblayage (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_DEBLAYAGE_TEMPS_DE_DEBLAYAGE-min",
          color: "#FF5AF1",
          label: "temps de Déblayage",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
  6: {
    title: "Temps trajet (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_DEBLAYAGE_TEMPS_TRAJET_ALLER_RETOUR-min",
          color: "#CCCCCC",
          label: "Aller-Retour",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
  7: {
    title: "Distance Trajet (m)",
    attributes: {
      telemetries: [
        {
          name: "UG_DEBLAYAGE_DISTANCE-m",
          color: "#FF5AF1",
          label: "Aller-retour",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
};
