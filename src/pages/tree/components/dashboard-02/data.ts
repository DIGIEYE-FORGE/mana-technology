export const widgetsData = {
  0: {
    title: "Schema de tir",
    attributes: {
      image1: "/dashboard-02.01.jpeg",
      image2: "/dashboard-02.02.jpeg",
    },
  },
  1: {
    title: "Dispo et Utilisation",
    attributes: {
      image: "/machine-02.png",
      name: "Jumbo M20",
      telemetries: [
        {
          name: "MECANISE_TIZERT_JUMBO_M20_PERC_DISPO",
          label: "Disponibilité",
          serial: "DABF7PAT2G4BAG21",
          color: "#cda943",
        },
        {
          name: "MECANISE_TIZERT_JUMBO_M20_TAUX_D'UTILISATION",
          label: "Utilisation",
          serial: "DABF7PAT2G4BAG21",
          color: "#18a5c1",
        },
      ],
    },
  },
  2: {
    title: "Vitesse de penetration",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "UG_FORATION_TIRS_VITESSE_DE_PENETRATION-min_par_m",
          color: "#cda943",
          label: "Objectif ML/J",
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
          area: false,
          name: "MECANISE_TIZERT_JUMBO_M20_PERC_DISPO",
          color: "#cda943",
          label: "Objectif ML/J",
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
          area: false,
          name: "MECANISE_TIZERT_JUMBO_M20_TAUX_D'UTILISATION",
          color: "#18a5c1",
          label: "Objectif ML/J",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  5: {
    title: "Temps de foration",
    attributes: {
      telemetries: [
        {
          name: "UG_FORATION_TIRS_TEMPS_DE_FORATION-min",
          color: "#18a5c1",
          label: "Utilisation",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  6: {
    title: "Temps de Perdu entre temp",
    attributes: {
      telemetries: [
        {
          name: "UG_FORATION_TIRS_TEMPS_PERDU_ENTRE_TROUmin",
          color: "#18a5c1",
          label: "Utilisation",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
};
