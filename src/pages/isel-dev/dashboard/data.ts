export const widgetData = [
  {
    title: "test",
  },
  {
    title: "Consomation gasoil",
    telemetries: [
      {
        serial: "123456",
        name: "total",
        label: "Total",
        displayFormat: "integer",
        value: 22977,
        unit: "L",
      },
      {
        serial: "123456",
        name: "ratio",
        label: "Ratio",
        value: 4.65,
        displayFormat: "float",
        unit: "L/h",
      },
    ],
  },
  {
    title: "Autres",
    telemetries: [
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonage instantané",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonage instantané",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonage instantané",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonage instantané",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
    ],
  },
  {
    title: "Foration",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#B98EFF",
          label: "Realisé ML/J",
          serial: "D5KP29KL463AZXWE",
        },
        {
          area: false,
          name: "EST_PLANIFIE_FORATION",
          color: "#78F6EA",
          label: "Objectif ML/J",
          serial: "JZVATMKQ1A8DA2P1",
        },
      ],
    },
  },
  {
    title: "Foration",
    attributes: {
      telemetries: [
        {
          name: "EST11_REALISE_ROCHE",
          unit: "T",
          color: "#78F6EA",
          label: "Est 11",
          serial: "D5KP29KL463AZXWE",
        },
        {
          name: "EST11_REALISE_ROCHE",
          unit: "T",
          color: "#B98EFF",
          label: "Est 12",
          serial: "D5KP29KL463AZXWE",
        },
      ],
    },
  },
  {
    title: "Foration",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#B98EFF",
          label: "Realisé ML/J",
          serial: "D5KP29KL463AZXWE",
        },
        {
          area: false,
          name: "EST_PLANIFIE_FORATION",
          color: "#78F6EA",
          label: "Objectif ML/J",
          serial: "JZVATMKQ1A8DA2P1",
        },
      ],
    },
  },
] as const;
