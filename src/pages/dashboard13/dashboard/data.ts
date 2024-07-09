export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_Engine Speed",
        label: "Vitesse",
        unit: "km/h",
        stops: [
          {
            stop: 900,
            color: "#78F6EA",
          },
          {
            stop: 1500,
            color: "#B98EFF",
          },
        ],
        extraTelemetries: [
          {
            serial: "EVN7HHSKAPM12QLR",
            name: "AD45_1_Forward distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_Ground Speed",
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
        serial: "EVN7HHSKAPM12QLR",
        telemetryName: "AD45_1_Fuel Gauge",
        label: "Niveau gasoil",
        unit: "%",
        stops: [
          {
            stop: 70,
            color: "#78F6EA",
          },
          {
            stop: 100,
            color: "#B98EFF",
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
            name: "AD45_1_Fuel rate",
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
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Engine Running",
        label: "Etat de marche",
        displayFormat: "onOff",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Parking Brake",
        label: "Frein stationnement",
        // unit: "Kg",
        displayFormat: "string",
      },
    ],
  },
  {
    title: "Temperatures",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "AD45_1_Ambient Air Temperature",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Enclosure Temperature",
          color: "#FF7514",
          label: "Enclosure",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Engine Coolant Temperature",
          color: "#256D7B",
          label: "Engine Coolant",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Fuel Température	",
          color: "#E1CC4F",
          label: "Fuel",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Hydraulic Oil Temperature",
          color: "#287233",
          label: "Hydraulic Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Inlet Air Temperature",
          color: "#84C3BE",
          label: "Inlet Air",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Rear Axle Oil Temperature",
          color: "#CC0605",
          label: "Rear Axle Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Torque Converter Outlet Temperature",
          color: "#FFA420",
          label: "Torque Converter Outlet",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Transmission Oil Temperature",
          color: "#CF3476",
          label: "Transmission Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Front Axle Oil Temperature",
          color: "#705335",
          label: "Front Axle Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
      ],
    },
  },
  {
    title: "Pression pneus",

    telemetries: [
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Left Rear Tire Pressure",
        label: "AR gauche",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Right Rear Tire Pressure",
        label: "AR droit",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Right Front Tire Pressure",
        label: "AV droit",
        displayFormat: "float",
        unit: "kpa",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Left Front Tire Pressure",
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
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Bucket Payload",
        label: "Tonnage instantané",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Engine Load Factor",
        label: "Facteur de chargement",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "EVN7HHSKAPM12QLR",
        name: "AD45_1_Tonnage_journaliers",
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
          name: "AD45_1_Total Operating Hours",
          unit: "h",
          color: "#78F6EA",
          label: "Tempd de marche",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          name: "AD45_1_Ground time",
          unit: "h",
          color: "#B98EFF",
          label: "Temps de marche à vide",
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
          color: "#B98EFF",
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
          color: "#B98EFF",
          label: "Fuel",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Transmission Oil Pressure",
          color: "#78F6EA",
          label: "Transmission Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Intake Manifold Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "EVN7HHSKAPM12QLR",
        },
        {
          area: false,
          name: "AD45_1_Parking Brake Oil Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "EVN7HHSKAPM12QLR",
        },
      ],
    },
  },
] as const;
