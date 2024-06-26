export const widgetsData = {
  0: {
    title: "Tonne stérile par post",
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
    title: "Performances déblayage avec LHD R1700",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#FF5AF1",
          label: "Realisé ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  2: {
    title: "Production totale par poste",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "EST11_REALISE_ROCHE",
          color: "#CCCCCC",
          label: "Est 11",
          serial: "U9XQMQ1DXYT7LJIP",
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
    title: "Temps de chargement",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "UG_METRES_PLANIFIE",
          unit: "T",
          color: "#FF5AF1",
          label: "Chargement explosif",
          serial: "DABF7PAT2G4BAG21",
          type: "bar",
        },
        {
          name: "UG_METRES_REALISE_TOTAL",
          unit: "T",
          color: "#FFDC8C",
          label: "Charge / Trou",
          serial: "DABF7PAT2G4BAG21",
          type: "bar",
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
};
