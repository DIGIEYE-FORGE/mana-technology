export const serial = "EVN7HHSKAPM12QLR";
export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_GND Speed",
        label: "Vitesse",
        unit: "km/h",
        stops: [
          {
            stop: 50,
            color: "#F5A81C",
          },
        ],
        extraTelemetries: [
          {
            serial: "EVN7HHSKAPM12QLR",
            name: "AD45_1_Travel_distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_RPM",
        label: "Tr/min",
        unit: "rpm",
        stops: [
          {
            stop: 3500,
            color: "#F5A81C",
          },
        ],
        extraTelemetries: [],
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_Fuel Gauge",
        label: "Niveau gasoil",
        unit: "%",
        stops: [
          {
            stop: 30,
            color: "#F00",
          },
          {
            stop: 100,
            color: "#F5A81C",
          },
        ],
        extraTelemetries: [
          {
            serial: "EVN7HHSKAPM12QLR",
            name: "AD45_1_Total Fuel",
            label: "AR droit",
            displayFormat: "integer",
            unit: "L",
          },
          {
            serial: "EVN7HHSKAPM12QLR",
            name: "AD45_1_Fuel Rate",
            label: "AV droit",
            displayFormat: "float",
            unit: "L/h",
          },
        ],
      },
    ],
  },
  {
    image: "/ad45.png",
  },
  {
    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Status engine",
        label: "Etat de marche",
        displayFormat: "string",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Parking Brake",
        label: "Frein stationnement",
        displayFormat: "string",
      },
    ],
  },
  {
    title: "Températures",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "AD45_1_Brake Oil Temperature",
          color: "#B98EFF",
          label: "Brake Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Engine Coolant Temperature",
          color: "#FF7514",
          label: "Engine Coolant",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Fuel Temperature",
          color: "#256D7B",
          label: "Fuel",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Intake Manifold Air Temperature",
          color: "#E1CC4F",
          label: "Intake Manifold Air",
          serial: "EVN7HHSKAPM12QLR",
        },
      ],
    },
  },
  {
    title: "Temps de marche",

    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Total OP Hour",
        label: "Temps de marche total",
        displayFormat: "integer",
        unit: "h",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Idle Time",
        label: "Temps d'inactivité",
        displayFormat: "integer",
        unit: "h",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Gear Neutral Time",
        label: "Temps de marche à vide",
        displayFormat: "float",
        unit: "h",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Body Position Angle",
        label: "Angle de la benne",
        displayFormat: "float",
        unit: "°",
      },
    ],
  },
  {
    title: "Chargement",
    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Payload Weight",
        label: "Production instantané",
        unit: "kg",
        displayFormat: "integer",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Cumul_Payload",
        label: "Cumule journalier",
        unit: "t",
        displayFormat: "integer",
      },
    ],
  },
  {
    title: "Temps de marche",
    attributes: {
      telemetries: [
        {
          name: "AD45_1_Total OP Hour",
          unit: "h",
          color: "#78F6EA",
          label: "Temps total de marche",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          name: "AD45_1_Idle Time",
          unit: "h",
          color: "#B98EFF",
          label: "Idle",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          name: "AD45_1_Gear Neutral Time",
          unit: "h",
          color: "#256D7B",
          label: "à vide",
          serial: "EVN7HHSKAPM12QLR",
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
          name: "AD45_1_Atmospheric Pressure",
          color: "#E1CC4F",
          label: "Atmospheric",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Boost Pressure",
          color: "#78F6EA",
          label: "Boost",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Fuel Pressure",
          color: "#256D7B",
          label: "Fuel",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
      ],
    },
  },
] as const;
