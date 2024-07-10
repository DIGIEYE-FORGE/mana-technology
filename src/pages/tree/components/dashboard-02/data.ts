export const widgetsData = {
  0: {
    title: "Schéma de tir",
    attributes: {
      image1: "/dashboard-02.01.jpeg",
      image2: "/dashboard-02.02.jpeg",
    },
  },
  1: {
    title: "Performance Engin",
    image: "/machine-02.png",
    attributes: [
      {
        name: "Jumbo M20",
        image: "/machine-02.png",
        telemetries: [
          {
            name: "UG_MEC_JUM_M20_TD",
            label: "Disponibilité",
            serial: "8S287JI0CLP38N38",
            color: "#cda943",
          },
          {
            name: "UG_MEC_JUM_M20_TU",
            label: "Utilisation",
            serial: "8S287JI0CLP38N38",
            color: "#18a5c1",
          },
        ],
      },
    ],
  },
  2: {
    title: "Nombre de trous forés",
    attributes: {
      telemetries: [
        {
          area: false,
          // name: "UG_FORATION_TIRS_VITESSE_DE_PENETRATION-min_par_m",
          name: "UG_FORATION_TIRS_SCHEMA_DE_TIR",
          color: "#cda943",
          label: "Nombre de trous forés",
          serial: "GHZIN57J7EOVXG0C",
        },
      ],
    },
  },
  3: {
    title: "Disponibilité",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "UG_MEC_JUM_M20_TD",
          color: "#cda943",
          label: "Disponibilité",
          serial: "8S287JI0CLP38N38",
        },
      ],
    },
  },
  4: {
    title: "Utilisation",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "UG_MEC_JUM_M20_TU",
          color: "#18a5c1",
          label: "Utilisation",
          serial: "8S287JI0CLP38N38",
        },
      ],
    },
  },
  5: {
    title: "Temps de foration (min)",
    attributes: {
      telemetries: [
        {
          name: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
          color: "#18a5c1",
          label: "Temps de foration",
          serial: "GHZIN57J7EOVXG0C",
          type: "bar",
        },
      ],
    },
  },
  6: {
    title: "Longueur forée (m)",
    attributes: {
      telemetries: [
        {
          name: "UG_FORATION_TIRS_LONGEUR_FORATION_PAR_TIR-m_par_tir",
          color: "#18a5c1",
          label: "Longueur forée",
          serial: "GHZIN57J7EOVXG0C",
        },
      ],
    },
  },
};
