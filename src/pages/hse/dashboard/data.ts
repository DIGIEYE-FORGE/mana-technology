export const widgetsData = {
  0: {
    // title: "Chiffre effectif (Cost Value)",
    title: "Effectif Projet",
    telemetryName: "HSE_MP_Total",
    label: "Disponibilité",
    serial: "TATC8YPVCLHULUAF",
  },
  1: {
    title: "Cumul des heures travaillées",
    telemetryName: "HSE_MH_Total",
    label: "Disponibilité",
    serial: "TATC8YPVCLHULUAF",
  },
  2: {
    title: "Taux de clôture",
    telemetryName: "HSE_TC_Global",
    label: "Disponibilité",
    serial: "TATC8YPVCLHULUAF",
    correction: 100,
  },
  3: {
    title: "HSE Project Indicators",
    attributes: {
      telemetries: [
        {
          name: "HSE_OBS_Total",
          color: "#25A18E",
          label: "Observation",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 5075,
        },
        {
          name: "HSE_MTC_Total",
          color: "#FFCA05",
          label: "MTC",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 13,
        },
        {
          name: "HSE_LTI_total",
          color: "#903E92",
          label: "LTI",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 2,
        },
        {
          name: "HSE_FAT_Total",
          color: "#ff0000",
          label: "FAT",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 0,
        },
      ],
      progressTelemetries: [
        {
          name: "HSE_MTCF_Global",
          color: "#f6d300",
          serial: "TATC8YPVCLHULUAF",
          label: "MTCF",
        },
        {
          name: "HSE_LTIF_Global",
          color: "#93469d",
          serial: "TATC8YPVCLHULUAF",
          label: "LTIF",
        },
        {
          name: "HSE_FATIF_Global",
          color: "#db1c31",
          serial: "TATC8YPVCLHULUAF",
          label: "FATIF",
        },
      ],
    },
  },
  8: {
    title: "Évolution Heures Travaillées",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "HSE_MH_Total",
          color: "#78F6EA",
          label: "Heures Travaillées",
          serial: "LWGUT0FXIZ5ALOND",
          // data: [
          //   {
          //     x: addDays(new Date(), -7),
          //     y: 100,
          //   },
          //   {
          //     x: addDays(new Date(), -6),
          //     y: 105,
          //   },
          //   {
          //     x: addDays(new Date(), -5),
          //     y: 110,
          //   },
          //   {
          //     x: addDays(new Date(), -4),
          //     y: 115,
          //   },
          //   {
          //     x: addDays(new Date(), -3),
          //     y: 120,
          //   },
          //   {
          //     x: addDays(new Date(), -2),
          //     y: 125,
          //   },
          //   {
          //     x: addDays(new Date(), -1),
          //     y: 130,
          //   },
          //   {
          //     x: new Date(),
          //     y: 135,
          //   },
          // ]
        },
      ],
    },
  },
  5: {
    title: "Évolution Effectif",
    attributes: {
      telemetries: [
        {
          name: "HSE_MP_Total",
          color: "#FF5AF1",
          label: "Fréquence",
          serial: "LWGUT0FXIZ5ALOND",
          // data: [
          //   {
          //     x: addDays(new Date(), -7),
          //     y: 100,
          //   },
          //   {
          //     x: addDays(new Date(), -6),
          //     y: 105,
          //   },
          //   {
          //     x: addDays(new Date(), -5),
          //     y: 110,
          //   },
          //   {
          //     x: addDays(new Date(), -4),
          //     y: 115,
          //   },
          //   {
          //     x: addDays(new Date(), -3),
          //     y: 120,
          //   },
          //   {
          //     x: addDays(new Date(), -2),
          //     y: 125,
          //   },
          //   {
          //     x: addDays(new Date(), -1),
          //     y: 130,
          //   },
          //   {
          //     x: new Date(),
          //     y: 135,
          //   },
          // ]
        },
      ],
    },
  },
  6: {
    title: "Répartition des incidents",
    attributes: {
      telemetries: [
        {
          name: "HSE_Injury_Total",
          color: "#25A18E",
          label: "Injury",
          serial: "TATC8YPVCLHULUAF",
        },
        {
          name: "HSE_ASSETDAMAGE_Total",
          color: "#FF5AF1",
          label: "Asset Damage",
          serial: "TATC8YPVCLHULUAF",
        },
        {
          name: "HSE_ENVI_Total",
          color: "#D2DDFF",
          label: "Environment",
          serial: "TATC8YPVCLHULUAF",
        },
      ],
    },
  },
  7: {
    title: "Incidents par catégorie",
    attributes: {
      stacked: true,
      telemetries: [
        {
          name: "HSE_ASSET DAMAGE_Total",
          color: "#FF5AF1",
          label: "Asset",
          serial: "XEXX5PDMNHBWUN7Q",
        },
        {
          name: "HSE_ENVI_Total",
          color: "#D2DDFF",
          label: "Environment",
          serial: "XEXX5PDMNHBWUN7Q",
        },
        {
          name: "HSE_Injury_Total",
          color: "#25A18E",
          label: "Injury",
          serial: "XEXX5PDMNHBWUN7Q",
        },
      ],
    },
  },
  4: {
    title: "Incidents par Zone",
    attributes: {
      stacked: true,
      telemetries: [
        {
          name: "HSE_Incident_ONS",
          color: "#D2DDFF",
          label: "ONS",
          serial: "LWGUT0FXIZ5ALOND",
        },
        {
          name: "HSE_Incident_OFS",
          color: "#25A18E",
          label: "OFS",
          serial: "LWGUT0FXIZ5ALOND",
        },
        {
          name: "HSE_Incident_UG",
          color: "#F650A0",
          label: "ug",
          serial: "LWGUT0FXIZ5ALOND",
        },
        {
          name: "HSE_Incident_OP",
          color: "#FF5AF1",
          label: "OP",
          serial: "LWGUT0FXIZ5ALOND",
        },
      ],
    },
  },
};
