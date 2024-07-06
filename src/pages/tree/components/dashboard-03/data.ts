export const widgetsData = {
  0: {
    title: "Nombre de tirs par jour",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_TIR_PLANIFIE",
          color: "#25A18E",
          label: "Prévu",
          serial: "WF5CW7A4T9R9VU9F",
        },
        {
          name: "UG_TIR_REALISE",
          color: "#cda943",
          label: "réalisé",
          serial: "WF5CW7A4T9R9VU9F",
        },
      ],
    },
  },
  1: {
    title: "Performance Engins",
    image: "/machine-03.png",
    attributes: [
      {
        image: "/machine-03.png",
        name: "TITAN BAC2X350",
        telemetries: [
          {
            name: "UG_CHARG_EXP_TITAN_BAC2X350_TD",
            label: "Disponibilité",
            serial: "8S287JI0CLP38N38",
            color: "#cda943",
          },
          {
            name: "UG_CHARG_EXP_TITAN_BAC2X350_TU",
            label: "Utilisation",
            serial: "8S287JI0CLP38N38",
            color: "#18a5c1",
          },
        ],
      },
    ],
  },
  2: {
    title: "Consommation spécifique explosif (kg/t)",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_CONSOMMATION_SPECIFIQUE_EXPLOSIF-kg-per-tone",
          color: "#FF5AF1",
          label: "Consommation spécifique explosif",
          serial: "GHZIN57J7EOVXG0C",
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
          label: "Disponibilité",
          serial: "8S287JI0CLP38N38",
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
          label: "Utilisation",
          serial: "8S287JI0CLP38N38",
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
          serial: "GHZIN57J7EOVXG0C",
        },
        {
          name: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
          color: "#FFF",
          label: "Tir, délai Gaz et lavage",
          serial: "WF5CW7A4T9R9VU9F",
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
          label: "Arrachement",
          serial: "GHZIN57J7EOVXG0C",
        },
      ],
    },
  },
};
