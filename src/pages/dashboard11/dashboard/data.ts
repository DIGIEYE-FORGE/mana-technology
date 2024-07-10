export const serial = "L604RV7OPGGQGQ6R";
export const widgetData = [
  {
    title: "",
    telemetries: [
      {
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Ground Speed",
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
            serial: "L604RV7OPGGQGQ6R",
            name: "R1700_1_Forward distance",
            label: "AR gauche",
            displayFormat: "integer",
            unit: "km",
          },
        ],
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Engine Speed",
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
        serial: "L604RV7OPGGQGQ6R",
        telemetryName: "R1700_1_Fuel Gauge",
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
            serial: "L604RV7OPGGQGQ6R",
            name: "R1700_1_Total Fuel",
            label: "AR droit",
            displayFormat: "integer",
            unit: "L",
          },
          {
            serial: "L604RV7OPGGQGQ6R",
            name: "R1700_1_Fuel rate",
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
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Engine Running",
        label: "Etat de marche",
        displayFormat: "onOff",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Parking Brake",
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
          name: "R1700_1_Ambient Air Temperature",
          color: "#B98EFF",
          label: "Ambient Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Enclosure Temperature",
          color: "#FF7514",
          label: "Enclosure",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Engine Coolant Temperature",
          color: "#256D7B",
          label: "Engine Coolant",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Fuel Température	",
          color: "#E1CC4F",
          label: "Fuel",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Hydraulic Oil Temperature",
          color: "#287233",
          label: "Hydraulic Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Inlet Air Temperature",
          color: "#84C3BE",
          label: "Inlet Air",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Rear Axle Oil Temperature",
          color: "#CC0605",
          label: "Rear Axle Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Torque Converter Outlet Temperature",
          color: "#FFA420",
          label: "Torque Converter Outlet",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Transmission Oil Temperature",
          color: "#CF3476",
          label: "Transmission Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Front Axle Oil Temperature",
          color: "#705335",
          label: "Front Axle Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
      ],
    },
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
        unit: "%",
        displayFormat: "integer",
      },
      {
        serial: "L604RV7OPGGQGQ6R",
        name: "R1700_1_Tonnage_journaliers",
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
          name: "R1700_1_Total Operating Hours",
          unit: "h",
          color: "#78F6EA",
          label: "Temps de marche",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          name: "R1700_1_Ground time",
          unit: "h",
          color: "#B98EFF",
          label: "Temps de marche à vide",
          serial: "L604RV7OPGGQGQ6R",
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
          name: "R1700_1_Atmospheric Pressure",
          color: "#B98EFF",
          label: "Atmospheric",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Boost Pressure",
          color: "#78F6EA",
          label: "Boost",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Fuel Pressure",
          color: "#B98EFF",
          label: "Fuel",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Transmission Oil Pressure",
          color: "#78F6EA",
          label: "Transmission Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Engine Oil Pressure",
          color: "#B98EFF",
          label: "Engine Oil",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Intake Manifold Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "L604RV7OPGGQGQ6R",
        },
        {
          area: false,
          name: "R1700_1_Parking Brake Oil Pressure",
          color: "#78F6EA",
          label: "ntake Manifold",
          serial: "L604RV7OPGGQGQ6R",
        },
      ],
    },
  },
] as const;
