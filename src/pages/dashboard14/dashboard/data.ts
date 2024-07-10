export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_GND Speed",
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
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Travel_distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_RPM",
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
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_Fuel Gauge",
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
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Total Fuel",
            label: "AR droit",
            displayFormat: "integer",
            unit: "L",
          },
          {
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Fuel Rate",
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
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Status engine",
        label: "Etat de marche",
        displayFormat: "string",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Parking Brake",
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
          name: "AD45_2_Brake Oil Temperature",
          color: "#B98EFF",
          label: "Brake Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Engine Coolant Temperature",
          color: "#FF7514",
          label: "Engine Coolant",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Fuel Temperature",
          color: "#256D7B",
          label: "Fuel",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Intake Manifold Air Temperature",
          color: "#E1CC4F",
          label: "Intake Manifold Air",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
      ],
    },
  },
  {
    title: "Temps de marche",

    telemetries: [
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Total OP Hour",
        label: "Temps de marche total",
        displayFormat: "integer",
        unit: "h",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Idle Time",
        label: "Temps d'inactivité",
        displayFormat: "integer",
        unit: "h",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Gear Neutral Time",
        label: "Temps de marche à vide",
        displayFormat: "float",
        unit: "h",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Body Position Angle",
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
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Payload Weight",
        label: "Production instantané",
        unit: "kg",
        displayFormat: "integer",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Cumul_Payload",
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
          name: "AD45_2_Total OP Hour",
          unit: "h",
          color: "#78F6EA",
          label: "Temps total de marche",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          name: "AD45_2_Idle Time",
          unit: "h",
          color: "#B98EFF",
          label: "Idle",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          name: "AD45_2_Gear Neutral Time",
          unit: "h",
          color: "#256D7B",
          label: "à vide",
          serial: "Z4Z1PTA1YFUYXO4M",
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
          name: "AD45_2_Atmospheric Pressure",
          color: "#E1CC4F",
          label: "Atmospheric",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Boost Pressure",
          color: "#78F6EA",
          label: "Boost",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Fuel Pressure",
          color: "#256D7B",
          label: "Fuel",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
      ],
    },
  },
] as const;
