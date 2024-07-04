export const widgetsData = {
  0: {
    title: "Schéma de tir",
    attributes: {
      image1: "/dashboard-02.01.jpeg",
      image2: "/dashboard-02.02.jpeg",
    },
  },
  1: {
    title: "Performance Engins",
    image: "/machine-02.png",
    attributes: [
      {
        name: "Jumbo M20",
        telemetries: [
          {
            name: "UG_MEC_JUM_M20_TD",
            label: "Disponibilité",
            serial: "DABF7PAT2G4BAG21",
            color: "#cda943",
          },
          {
            name: "UG_MEC_JUM_M20_TU",
            label: "Utilisation",
            serial: "DABF7PAT2G4BAG21",
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
          label: "Objectif ML/J",
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
          area: false,
          name: "UG_MEC_JUM_M20_TD",
          color: "#cda943",
          label: "Objectif ML/J",
          serial: "GHZIN57J7EOVXGOC",
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
          label: "Objectif ML/J",
          serial: "GHZIN57J7EOVXGOC",
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
          serial: "GHZIN57J7EOVXGOC",
          type: "bar",
        },
        {
          name: "UG_TAUX_ARRACHEMENT_TEMPS_DE_FORATION_BFS",
          color: "#cda943",
          label: "BFS",
          serial: "GHZIN57J7EOVXGOC",
          type: "bar",
        },
      ],
    },
  },
  6: {
    title: "Longueur foration par tir (m/tir)",
    attributes: {
      telemetries: [
        {
          name: "UG_FORATION_TIRS_LONGEUR_FORATION_PAR_TIR-m_par_tir",
          color: "#18a5c1",
          label: "Utilisation",
          serial: "GHZIN57J7EOVXGOC",
        },
      ],
    },
  },
};
