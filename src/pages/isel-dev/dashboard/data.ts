export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Engine Speed",
        label: "Vitesse",
        // value: 25,
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
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Ground Speed",
        label: "Tr/min",
        // value: 20,
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
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Fuel Gauge",
        label: "Niveau gasoil",
        // value: 10,
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
    ],
  },
  {
    title: "",

    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Forward distance",
        label: "AR gauche",
        displayFormat: "integer",
        // value: 229771,
        unit: "km",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Total Fuel",
        label: "AR droit",
        displayFormat: "integer",
        // value: 22977,
        unit: "L",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Fuel rate",
        label: "AV droit",
        // value: 4.65,
        displayFormat: "float",
        unit: "L/h",
      },
    ],
  },
  {
    // title: "Chargements",
    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Engine Running",
        label: "Etat de marche",
        displayFormat: "boolean",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Parking Brake",
        label: "Frein stationnement",
        // unit: "Kg",
        displayFormat: "text",
      },
    ],
  },
  {
    title: "Temperatures",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "R1700_1_Ambient Air Temperature",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "R1700_1_Enclosure Temperature",
          color: "#FF7514",
          label: "Enclosure",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "R1700_1_Engine Coolant Temperature",
          color: "#256D7B",
          label: "Engine Coolant",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: true,
          name: "",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
      ],
    },
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
  {
    title: "Chargement",
    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Bucket Payload",
        label: "Tonnage instantané",
        value: 120,
        unit: "Kg",
        displayFormat: "integer",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Engine Load Factor",
        label: "Frein stationnement",
        value: 1200,
        unit: "Kg",
        displayFormat: "integer",
      },
    ],
  },
  {
    title: "Chargement",
    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Bucket Payload",
        label: "Tonnage instantané",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Engine Load Factor",
        label: "Facteur de chargement",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Tonnage_journaliers",
        label: "Tonnage journalier ",
        unit: "%",
        displayFormat: "integer",
      },
    ],
  },
  {
    title: "Pression pneus",

    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Left Rear Tire Pressure",
        label: "AR gauche",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Right Rear Tire Pressure",
        label: "AR droit",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Right Front Tire Pressure",
        label: "AV droit",
        displayFormat: "float",
        unit: "kpa",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Left Front Tire Pressure",
        label: "AV gauche",
        displayFormat: "float",
        unit: "kpa",
      },
    ],
  },
] as const;
