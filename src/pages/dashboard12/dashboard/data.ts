export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "123456",
        telemetryName: "test1",
        label: "Vitesse",
        value: 25,
        unit: "km/h",
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
        extraTelemetries: [
          {
            serial: "123456",
            name: "total",
            label: "AR gauche",
            displayFormat: "integer",
            value: 22977,
            unit: "km",
          },
        ],
      },
      {
        serial: "123456",
        telemetryName: "test2",
        label: "Tr/min",
        value: 20,
        unit: "rpm",
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
        extraTelemetries: [],
      },
      {
        serial: "123456",
        telemetryName: "test2",
        label: "Niveau gasoil",
        value: 10,
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
        extraTelemetries: [
          {
            serial: "123456",
            name: "total",
            label: "AR droit",
            displayFormat: "integer",
            value: 22977,
            unit: "L",
          },
          {
            serial: "123456",
            name: "ratio",
            label: "AV droit",
            value: 4.65,
            displayFormat: "float",
            unit: "L/h",
          },
        ],
      },
    ],
  },
  {
    image: "/machine-04.png",
  },
  {
    telemetries: [
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Etat de marche",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Frein stationnement",
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
    title: "Pression pneus",

    telemetries: [
      {
        serial: "123456",
        name: "total",
        label: "AR gauche",
        displayFormat: "integer",
        value: 22977,
        unit: "kpa",
      },
      {
        serial: "123456",
        name: "total",
        label: "AR droit",
        displayFormat: "integer",
        value: 22977,
        unit: "kpa",
      },
      {
        serial: "123456",
        name: "ratio",
        label: "AV droit",
        value: 4.65,
        displayFormat: "float",
        unit: "kpa",
      },
      {
        serial: "123456",
        name: "ratio",
        label: "AV gauche",
        value: 4.65,
        displayFormat: "float",
        unit: "kpa",
      },
    ],
  },
  {
    title: "Chargement",
    telemetries: [
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonnage instantané",
        value: 120,
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Facteur de chargement",
        value: 120,
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "123456",
        name: "tonage-instantané",
        label: "Tonnage journalier ",
        value: 120,
        unit: "%",
        displayFormat: "integer",
      },
    ],
  },
  {
    title: "Temps de marche",
    attributes: {
      telemetries: [
        {
          name: "EST11_REALISE_ROCHE",
          unit: "T",
          color: "#78F6EA",
          label: "Tempd de marche",
          serial: "D5KP29KL463AZXWE",
        },
        {
          name: "EST11_REALISE_ROCHE",
          unit: "T",
          color: "#B98EFF",
          label: "Temps de marche à vide",
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
