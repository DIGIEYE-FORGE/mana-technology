export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "3KFVTKPZQGLUCGIB",
        telemetryName: "R1700_2_Ground Speed",
        label: "Vitesse",
        unit: "km/h",
        stops: [
          {
            stop: 25,
            color: "#78F6EA",
          },
          {
            stop: 40,
            color: "#B98EFF",
          },
        ],
        extraTelemetries: [
          {
            serial: "3KFVTKPZQGLUCGIB",
            name: "R1700_2_Forward distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        telemetryName: "R1700_2_Engine Speed",
        label: "Tr/min",
        unit: "rpm",
        stops: [
          {
            stop: 1800,
            color: "#78F6EA",
          },
          {
            stop: 2500,
            color: "#B98EFF",
          },
        ],
        extraTelemetries: [],
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        telemetryName: "R1700_2_Fuel Gauge",
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
            serial: "3KFVTKPZQGLUCGIB",
            name: "R1700_2_Total Fuel",
            label: "AR droit",
            displayFormat: "integer",
            unit: "L",
          },
          {
            serial: "3KFVTKPZQGLUCGIB",
            name: "R1700_2_Fuel rate",
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
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Engine Running",
        label: "Etat de marche",
        displayFormat: "onOff",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Parking Brake",
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
          name: "R1700_2_Ambient Air Temperature",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Enclosure Temperature",
          color: "#FF7514",
          label: "Enclosure",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Engine Coolant Temperature",
          color: "#256D7B",
          label: "Engine Coolant",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Fuel Température	",
          color: "#E1CC4F",
          label: "Fuel",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Hydraulic Oil Temperature",
          color: "#287233",
          label: "Hydraulic Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Inlet Air Temperature",
          color: "#84C3BE",
          label: "Inlet Air",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Rear Axle Oil Temperature",
          color: "#CC0605",
          label: "Rear Axle Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Torque Converter Outlet Temperature",
          color: "#FFA420",
          label: "Torque Converter Outlet",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Transmission Oil Temperature",
          color: "#CF3476",
          label: "Transmission Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Front Axle Oil Temperature",
          color: "#705335",
          label: "Front Axle Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
      ],
    },
  },
  {
    title: "Pression pneus",

    telemetries: [
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Left Rear Tire Pressure",
        label: "AR gauche",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Right Rear Tire Pressure",
        label: "AR droit",
        displayFormat: "integer",
        unit: "kpa",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Right Front Tire Pressure",
        label: "AV droit",
        displayFormat: "float",
        unit: "kpa",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Left Front Tire Pressure",
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
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Bucket Payload",
        label: "Tonnage instantané",
        unit: "t",
        displayFormat: "integer",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Engine Load Factor",
        label: "Facteur de chargement",
        unit: "%",
        displayFormat: "integer",
      },
      {
        serial: "3KFVTKPZQGLUCGIB",
        name: "R1700_2_Tonnage_journaliers",
        label: "Tonnage journalier ",
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
          name: "R1700_2_Total Operating Hours",
          unit: "h",
          color: "#78F6EA",
          label: "Temps de marche",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          name: "R1700_2_Ground time",
          unit: "h",
          color: "#B98EFF",
          label: "Temps de marche à vide",
          serial: "3KFVTKPZQGLUCGIB",
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
          name: "R1700_2_Atmospheric Pressure",
          color: "#B98EFF",
          label: "Atmospheric",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Boost Pressure",
          color: "#78F6EA",
          label: "Boost",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Fuel Pressure",
          color: "#B98EFF",
          label: "Fuel",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Transmission Oil Pressure",
          color: "#78F6EA",
          label: "Transmission Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Intake Manifold Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "3KFVTKPZQGLUCGIB",
        },
        {
          area: false,
          name: "R1700_2_Parking Brake Oil Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "3KFVTKPZQGLUCGIB",
        },
      ],
    },
  },
] as const;
