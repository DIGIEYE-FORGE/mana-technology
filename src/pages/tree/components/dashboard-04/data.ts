export const widgetsData = {
  0: {
    title: "Tonnage Débalyé",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#25A18E",
          label: "Est 11",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    }
  },
  1: {
    title: "Dispo et Utilisation",
    attributes: {
      image: "/machine-04.png",
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
    title: "Performance Déblayage",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#FF5AF1",
          label: "t/h",
          serial: "DABF7PAT2G4BAG21",
        },
        {
          name: "UG_METRES_REALISE_TOTAL",
          color: "#FFDC8C",
          label: "t/h/ml",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  3: {
    title: "Tonnage par Tir",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#FFDC8C",
          label: "Prévus",
          serial: "DABF7PAT2G4BAG21",
          type: "bar",
        },
      ],
    },
  },
  4: {
    title: "Distance",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#78F6EA",
          label: "Realisé ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  5: {
    title: "Temps de Déblayage",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          color: "#FF5AF1",
          label: "Chargement explosif",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  6: {
    title: "Temps trajet",
    attributes: {
      telemetries: [
        {
          name: "EST_REALISE_FORATION",
          color: "#CCCCCC",
          label: "Aller",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "UG_METRES_PLANIFIE",
          color: "#25A18E",
          label: "Retour",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
  7: {
    title: "Distance Trajet",
    attributes: {
      telemetries: [
        {
          name: "EST_REALISE_FORATION",
          color: "#CCCCCC",
          label: "Aller",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "UG_METRES_PLANIFIE",
          color: "#25A18E",
          label: "Retour",
          serial: "DABF7PAT2G4BAG21",
        },
      ],
    },
  },
};
