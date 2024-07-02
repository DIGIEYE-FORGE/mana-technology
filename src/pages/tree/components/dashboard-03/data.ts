export const widgetsData = {
  0: {
    title: "Nombre de tirs par jour",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "EST_REALISE_FORATION",
          color: "#25A18E",
          label: "Prévue",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "UG_METRES_PLANIFIE",
          color: "#cda943",
          label: "réalisé",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    }
  },
  1: {
    title: "Performance Engins",
    attributes: {
      image: "/machine-03.png",
      name: "Jumbo M20",
      telemetries: [
        {
          name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
          label: "Disponibilité",
          serial: "U9XQMQ1DXYT7LJIP",
          color: "#cda943",
        },
        {
          name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
          label: "Utilisation",
          serial: "U9XQMQ1DXYT7LJIP",
          color: "#18a5c1",
        },
      ],
    },
  },
  2: {
    title: "Consommation spécifique explosif (kg)",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#FF5AF1",
          label: "AD45",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  3: {
    title: "Performance Engins",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#FFDC8C",
          label: "Chargeur d'explosif titan 1000 BAC2X350",
          serial: "DABF7PAT2G4BAG21",
          type: "bar",
        },
      ],
    },
  },
  4: {
    title: "Temps de chargement explosif (min)",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_FORATION_TIRS_TEMPS_DE_CHARGEMENT_EXPLOSIF-min",
          color: "#FFDC8C",
          label: "Chargement explosif",
          serial: "DABF7PAT2G4BAG21",
        },
        {
          name: "UG_FORATION_TIRS_TIR_DELAI_GAZ_ET_LAVAGE-min",
          color: "#FFF",
          label: "Tir, délai Gaz et lavage",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  5: {
    title: "Arrachement %",
    attributes: {
      telemetries: [
        {
          name: "UG_TAUX_ARRACHEMENT_ARRACHEMENT",
          color: "#CCCCCC",
          label: "Aller",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },

};
