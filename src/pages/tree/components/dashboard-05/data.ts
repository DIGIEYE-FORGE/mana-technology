export const widgetsData = {
  0: {
    title: "Consommation des boulons",
    attributes: {
      telemetries: [
        {
          name: "UG_SOUTENEMENT_SPLET_SET_1.8m-unite_par_tir",
          color: "#25A18E",
          label: "Est 11",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
  1: {
    title: "Performance Engins",
    image: "/machine-05.png",
    attributes: [
      {
        name: "TITAN BMP2X3",
        image: "/machine-03.png",
        iconClassName: "absolute bottom-2 right-3 z-10 w-32",
        telemetries: [
          {
            name: "UG_PLAT_TD",
            label: "Disponibilité",
            serial: "8S287JIOCLP38N38",
            color: "#cda943",
          },
          {
            name: "UG_PLAT_TU",
            label: "Utilisation",
            serial: "8S287JIOCLP38N38",
            color: "#18a5c1",
          },
        ],
      },
      {
        name: "Boltec m10",
        image: "/machine-05.png",
        telemetries: [
          {
            name: "UG_BOLTEC_M10_TD",
            label: "Disponibilité",
            serial: "8S287JIOCLP38N38",
            color: "#cda943",
          },
          {
            name: "UG_BOLTEC_M10_TU",
            label: "Utilisation",
            serial: "8S287JIOCLP38N38",
            color: "#18a5c1",
          },
        ],
      },
    ],
  },
  2: {
    title: "Consommation Grillage (m2)",
    attributes: {
      telemetries: [
        {
          name: "UG_SOUTENEMENT_GRILLAGE-m_carre",
          color: "#FF5AF1",
          label: "AD45",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
  3: {
    title: "Disponibilité",
    attributes: {
      telemetries: [
        {
          name: "UG_BOLTEC_M10_TD",
          color: "#FF5AF1",
          label: "Boltec m10",
          serial: "8S287JIOCLP38N38",
        },
        {
          name: "UG_PLAT_TD",
          label: "TITAN BMP2X3",
          serial: "8S287JIOCLP38N38",
          color: "#FFDC8C",
        },
      ],
    },
  },
  4: {
    title: "Utilisation",
    attributes: {
      telemetries: [
        {
          name: "UG_BOLTEC_M10_TU",
          color: "#FF5AF1",
          label: "Boltec m10",
          serial: "8S287JIOCLP38N38",
        },
        {
          name: "UG_PLAT_TU",
          label: "TITAN BMP2X3",
          serial: "8S287JIOCLP38N38",
          color: "#FFDC8C",
        },
      ],
    },
  },
  5: {
    title: "Temps de soutènement (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_SOUTENEMENT_TEMPS_DE_MISE_EN_PLACE_SOUTENEMENT-min",
          color: "#FFDC8C",
          label: "temps de soutènement",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
};
