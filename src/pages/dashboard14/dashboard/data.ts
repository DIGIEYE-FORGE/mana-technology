export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_Engine Speed",
        label: "Vitesse",
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
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Forward distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_Ground Speed",
        label: "Tr/min",
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
        serial: "Z4Z1PTA1YFUYXO4M",
        telemetryName: "AD45_2_Fuel Gauge",
        label: "Niveau gasoil",
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
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Total Fuel",
            label: "AR droit",
            displayFormat: "integer",
            unit: "L",
          },
          {
            serial: "Z4Z1PTA1YFUYXO4M",
            name: "AD45_2_Fuel rate",
            label: "AV droit",
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
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Engine Running",
        label: "Etat de marche",
        displayFormat: "onOff",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Parking Brake",
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
          area: false,
          name: "AD45_2_Ambient Air Temperature",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Enclosure Temperature",
          color: "#FF7514",
          label: "Enclosure",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Engine Coolant Temperature",
          color: "#256D7B",
          label: "Engine Coolant",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Fuel Température	",
          color: "#E1CC4F",
          label: "Fuel",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Hydraulic Oil Temperature",
          color: "#287233",
          label: "Hydraulic Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Inlet Air Temperature",
          color: "#84C3BE",
          label: "Inlet Air",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Rear Axle Oil Temperature",
          color: "#CC0605",
          label: "Rear Axle Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Torque Converter Outlet Temperature",
          color: "#FFA420",
          label: "Torque Converter Outlet",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Transmission Oil Temperature",
          color: "#CF3476",
          label: "Transmission Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Front Axle Oil Temperature",
          color: "#705335",
          label: "Front Axle Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
      ],
    },
  },
  {
    title: "Pression pneus",

    telemetries: [
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Left Rear Tire Pressure",
        label: "AR gauche",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Right Rear Tire Pressure",
        label: "AR droit",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Right Front Tire Pressure",
        label: "AV droit",
        displayFormat: "float",
        unit: "kpa",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Left Front Tire Pressure",
        label: "AV gauche",
        displayFormat: "float",
        unit: "kpa",
      },
    ],
  },
  {
    title: "Chargement",
    telemetries: [
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Bucket Payload",
        label: "Tonnage instantané",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Engine Load Factor",
        label: "Facteur de chargement",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "Z4Z1PTA1YFUYXO4M",
        name: "AD45_2_Tonnage_journaliers",
        label: "Tonnage journalier ",
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
          name: "AD45_2_Total Operating Hours",
          unit: "h",
          color: "#78F6EA",
          label: "Tempd de marche",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          name: "AD45_2_Ground time",
          unit: "h",
          color: "#B98EFF",
          label: "Temps de marche à vide",
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
          color: "#B98EFF",
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
          color: "#B98EFF",
          label: "Fuel",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Transmission Oil Pressure",
          color: "#78F6EA",
          label: "Transmission Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Intake Manifold Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
        {
          area: false,
          name: "AD45_2_Parking Brake Oil Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "Z4Z1PTA1YFUYXO4M",
        },
      ],
    },
  },
] as const;
