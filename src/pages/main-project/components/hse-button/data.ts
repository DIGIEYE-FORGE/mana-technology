import { addDays } from "date-fns";

export const widgetsData = {
  0: {
    // title: "Chiffre effectif (Cost Value)",
    title: "Effectif Projet",
    telemetryName: "HSE_MP_Total",
    label: "Disponibilité",
    serial: "XEXX5PDMNHBWUN7Q",
    value: 105,
  },
  1: {
    title: "Cumul des heures travaillées",
    telemetryName: "HSE_MH_Total",
    label: "Disponibilité",
    serial: "XEXX5PDMNHBWUN7Q",
    value: 2607521.5,
  },
  2: {
    title: "Taux do clôture",
    telemetryName: "MECANISE_TIZERT_JUMBO_M20_PERC_DISPO",
    label: "Disponibilité",
    serial: "XEXX5PDMNHBWUN7Q",
    value: 90.5,
  },
  3: {
    title: "HSE Project Indicators",
    attributes: {
      telemetries: [
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#25A18E",
          label: "Quasi-accidents & observations",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 20000,
        },
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#F650A0",
          label: "Cas de traitement médical",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#FFCA05",
          label: "Blessure avec perte de temps",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#903E92",
          label: "Fatally",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  4: {
    title: "Évolution Heures Travaillées (par semaine)",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "HSE_MH_Total",
          color: "#78F6EA",
          label: "Heures Travaillées",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
      ],
    },
  },
  5: {
    title: "Évolution Effectif (par semaine)",
    attributes: {
      telemetries: [
        {
          name: "HSE_MP_Total",
          color: "#FF5AF1",
          label: "Fréquence",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
      ],
    },
  },
  6: {
    title: "Répartition des incidents",
    attributes: {
      telemetries: [
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#25A18E",
          label: "Injury",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 12,
        },
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#FF5AF1",
          label: "Asset Damage",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 37,
        },
        {
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#D2DDFF",
          label: "Environment",
          serial: "U9XQMQ1DXYT7LJIP",
          value: 6,
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
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
        {
          name: "HSE_ENVI_Total",
          color: "#D2DDFF",
          label: "Environment",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
      ],
    },
  },
  8: {
    title: "Incidents par Zone",
    attributes: {
      stacked: true,
      telemetries: [
        {
          name: "HSE_Incident_ONS",
          color: "#25A18E",
          label: "ONS",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
        {
          name: "HSE_Incident_OFS",
          color: "#25A18E",
          label: "OFS",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
        {
          name: "HSE_Incident_UG",
          color: "#25A18E",
          label: "ug",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
        {
          name: "HSE_Incident_OP",
          color: "#25A18E",
          label: "OP",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
        {
          name: "HSE_Incident_OP",
          color: "#25A18E",
          label: "OP",
          serial: "XEXX5PDMNHBWUN7Q",
          data: [
            {
              x: addDays(new Date(), -7),
              y: 100,
            },
            {
              x: addDays(new Date(), -6),
              y: 105,
            },
            {
              x: addDays(new Date(), -5),
              y: 110,
            },
            {
              x: addDays(new Date(), -4),
              y: 115,
            },
            {
              x: addDays(new Date(), -3),
              y: 120,
            },
            {
              x: addDays(new Date(), -2),
              y: 125,
            },
            {
              x: addDays(new Date(), -1),
              y: 130,
            },
            {
              x: new Date(),
              y: 135,
            },
          ]
        },
      ],
    },
  },
};
