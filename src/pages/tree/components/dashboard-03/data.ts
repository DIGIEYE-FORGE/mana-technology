export const widgetsData = {
  0: {
    title: "Nombre de tirs par jour",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_TIR_PLANIFIE",
          color: "#25A18E",
          label: "Prévue",
          serial: "Y1UMITGTHATVAUQI",
        },
        {
          name: "UG_TIR_REALISE",
          color: "#cda943",
          label: "réalisé",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    }
  },
  1: {
    title: "Performance Engins",
    attributes: {
      image: "/machine-03.png",
      name: "TITAN BAC2X350",
      telemetries: [
        {
          name: "UG_CHARG_EXP_TITAN_BAC2X350_TD",
          label: "Disponibilité",
          serial: "1ET8MCQDVOPFLVBX",
          color: "#cda943",
        },
        {
          name: "UG_CHARG_EXP_TITAN_BAC2X350_TU",
          label: "Utilisation",
          serial: "1ET8MCQDVOPFLVBX",
          color: "#18a5c1",
        },
      ],
    },
  },
  2: {
    title: "Consommation spécifique explosif (kg/t)",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_CONSOMMATION_SPECIFIQUE_EXPLOSIF-kg-per-tone",
          color: "#FF5AF1",
          label: "AD45",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    },
  },
  3: {
    title: "Disponibilité",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_CHARG_EXP_TITAN_BAC2X350_TD",
          color: "#FFDC8C",
          label: "Chargeur d'explosif titan 1000 BAC2X350",
          serial: "1ET8MCQDVOPFLVBX",
          type: "bar",
        },
      ],
    },
  },
  4: {
    title: "Utilisation",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_CHARG_EXP_TITAN_BAC2X350_TU",
          color: "#FFDC8C",
          label: "Chargeur d'explosif titan 1000 BAC2X350",
          serial: "1ET8MCQDVOPFLVBX",
          type: "bar",
        },
      ],
    },
  },
  5: {
    title: "Temps de chargement explosif (min)",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_FORATION_TIRS_TEMPS_DE_CHARGEMENT_EXPLOSIF-min",
          color: "#FFDC8C",
          label: "Chargement explosif",
          serial: "Y1UMITGTHATVAUQI",
        },
        {
          name: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
          color: "#FFF",
          label: "Tir, délai Gaz et lavage",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    },
  },
  6: {
    title: "Arrachement %",
    attributes: {
      telemetries: [
        {
          name: "UG_TAUX_ARRACHEMENT_ARRACHEMENT",
          color: "#CCCCCC",
          label: "Aller",
          serial: "Y1UMITGTHATVAUQI",
        },
      ],
    },
  },

};
