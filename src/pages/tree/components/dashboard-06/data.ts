export const widgetsData = {
  0: {
    title: "Tonnage Transporté (t)",
    attributes: {
      telemetries: [
        {
          name: "UG_TONNAGE_TRANSPORTE_TON",
          color: "#25A18E",
          label: "Est 11",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    }
  },
  1: {
    title: "Performance Engins",
    image: "/machine-06.png",
    engineName: "Transport ad45",
    attributes: [
      {
        name: "Transport ad45 01",
        telemetries: [
          {
            name: "UG_DUMP_CAT_1_TD",
            label: "Disponibilité",
            serial: "DABF7PAT2G4BAG21",
            color: "#cda943",
          },
          {
            name: "UG_DUMP_CAT_1_TU",
            label: "Utilisation",
            serial: "DABF7PAT2G4BAG21",
            color: "#18a5c1",
          },
        ],
      },
      {
        name: "Transport ad45 02",
        telemetries: [
          {
            name: "UG_DUMP_CAT_2_TD",
            label: "Disponibilité",
            serial: "DABF7PAT2G4BAG21",
            color: "#cda943",
          },
          {
            name: "UG_DUMP_CAT_2_TU",
            label: "Utilisation",
            serial: "DABF7PAT2G4BAG21",
            color: "#18a5c1",
          },
        ],
      },
    ]
  },
  2: {
    title: "Performance Transport (t/h)",
    attributes: {
      telemetries: [
        {
          name: "UG_ROULAGE_PERFORMANCES_ROULAGE_AVEC_AD45-tonne_par_heure",
          color: "#FF5AF1",
          label: "Performance Transport",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  3: {
    title: "Disponibilité",
    attributes: {
      telemetries: [
        {
          name: "UG_DUMP_CAT_1_TD",
          color: "#FF5AF1",
          label: "AD45 01",
          serial: "DABF7PAT2G4BAG21",
        },
        {
          name: "UG_DUMP_CAT_2_TD",
          color: "#FFDC8C",
          label: "AD45 02",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  4: {
    title: "Utilisation",
    attributes: {
      telemetries: [
        {
          name: "UG_DUMP_CAT_1_TU",
          color: "#FF5AF1",
          label: "AD45 01",
          serial: "DABF7PAT2G4BAG21",
        },
        {
          name: "UG_DUMP_CAT_2_TU",
          color: "#FFDC8C",
          label: "AD45 02",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  5: {
    title: "Temps de Transport (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_ROULAGE_TEMPS_DE_TRANSPORT-min",
          color: "#FF5AF1",
          label: "Chargement explosif",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  6: {
    title: "Temps trajet (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_ROULAGE_TEMPS_TRAJET_ALLER_RETOUR-min",
          color: "#FFDC8C",
          label: "Aller-Retour",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
};
