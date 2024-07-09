export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "123456",
        telemetryName: "test1",
        label: "Vitesse",
        value: 25,
        unit: "L",
        stops: [
          {
            stop: 20,
            color: "#78F6EA",
          },
          {
            stop: 30,
            color: "#B98EFF",
          },
        ],
      },
      {
        serial: "123456",
        telemetryName: "test2",
        label: "Tr/min",
        value: 20,
        unit: "%",
        stops: [
          {
            stop: 20,
            color: "#78F6EA",
          },
          {
            stop: 30,
            color: "#B98EFF",
          },
        ],
      },
      {
        serial: "123456",
        telemetryName: "test2",
        label: "Niveau gasoil",
        value: 10,
        unit: "Kg",
        stops: [
          {
            stop: 20,
            color: "#78F6EA",
          },
          {
            stop: 30,
            color: "#B98EFF",
          },
        ],
      },
    ],
  },
  {
    title: "Title 2",
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
    title: "Title 3",
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
    title: "Temperatures",
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
    title: "Title 5",
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
    title: "Pressions",
    attributes: {
      telemetries: [
        {
          area: false,
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
