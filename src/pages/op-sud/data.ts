export type Widget = {
  type:
    | "lineChart"
    | "barChart"
    | "progressChart"
    | "multiProgress"
    | "tableWidget";
  title: string;
  className: string;
  attributes: {
    serial?: string;
    progressTelemetryName?: string;
    accumulationTelemetryName?: string;
    progressColor?: string;
    currentTargetColor?: string;
    finalTargetColor?: string;
    unit?: string;
    stacked?: boolean;
    telemetries?: {
      name: string;
      color: string;
      label: string;
      serial: string;
      area?: boolean;
      unit?: string;
    }[];
    element?: string;
    mappings?: {
      displayName: string;
      telemetryName: string;
    }[];
  };
};

export const homePageWidgets: Widget[] = [
  {
    type: "lineChart",
    title: "Evolution Production cumule",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5",
    attributes: {
      telemetries: [
        {
          area: false,
          name: "EST_PLANIFIE_ROCHE_CUMUL",
          color: "#ed8936",
          label: "Cumulative planifié",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          area: true,
          name: "EST_REALISE_ROCHE_CUMUL_Ton",
          color: "#4299e1",
          label: "Cumulative realisé",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "barChart",
    title: "Production Journalière",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5",
    attributes: {
      stacked: true,
      telemetries: [
        {
          name: "EST11_REALISE_ROCHE",
          unit: "T",
          color: "#78F6EA",
          label: "Est 11",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST12_REALISE_ROCHE",
          unit: "T",
          color: "#B98EFF",
          label: "Est 12",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "barChart",
    title: "Stérile / Minerai",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-5",
    attributes: {
      telemetries: [
        {
          name: "EST_PLANIFIE_MINERAI",
          unit: "T",
          color: "#FE22EB",
          label: "MINERAI Planifié",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_PLANIFIE_STERILE",
          unit: "T",
          color: "#B98EFF",
          label: "STERILE Planifié",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_REALISE_MIENRAI",
          unit: "T",
          color: "#FEC33A",
          label: "MINERAI Realisé",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_REALISE_STERILE",
          unit: "T",
          color: "#78F6EA",
          label: "STERILE Realisé",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "progressChart",
    title: "Evolution de la Production vs Planifié",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4",
    attributes: {
      serial: "U9XQMQ1DXYT7LJIP",
      progressColor: "#FF5AF1",
      currentTargetColor: "#727DC6",
      finalTargetColor: "#64748b",
      progressTelemetryName: "EST_REALISE_ROCHE_CUMUL_Ton",
      accumulationTelemetryName: "EST_PLANIFIE_ROCHE_CUMUL",
    },
  },
  {
    type: "barChart",
    title: "Production par fosse",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4",
    attributes: {
      stacked: false,
      telemetries: [
        {
          name: "EST_PLANIFIE_ROCHE",
          unit: "T",
          color: "#78F6EA",
          label: "Planifié",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "EST_REALISE_ROCHE_Ton",
          unit: "T",
          color: "#B98EFF",
          label: "Realisé",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "lineChart",
    title: "Production cumulée par qualité",
    className:
      "col-span-full row-span-3 flex flex-col p-6 lg:col-span-6 2xl:col-span-4",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#B98EFF",
          label: "Realisé ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          area: false,
          name: "EST_PLANIFIE_FORATION",
          color: "#78F6EA",
          label: "Objectif ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "tableWidget",
    title: "Suivi des Tirs",
    className: "col-span-full row-span-3 p-4 lg:col-span-8 ",
    attributes: {
      serial: "C6XPYU0D920L1M07",
      element: "telemetries",
      mappings: [
        {
          displayName: "",
          telemetryName: "NUMERO_DE_TIR",
        },
        {
          displayName: "",
          telemetryName: "NUMERO_DE_TIR",
        },
        {
          displayName: "",
          telemetryName: "QUNTITE_EXPLOSIF_TIRE",
        },
        {
          displayName: "",
          telemetryName: "ZONE DE TIRE",
        },
        {
          displayName: "",
          telemetryName: "TONNAE_MINERAI_ABATTU",
        },
        {
          displayName: "",
          telemetryName: "TONNAE_STERILE_ABATTU",
        },
      ],
    },
  },
  {
    type: "lineChart",
    title: "Foration (ml)",
    className: "col-span-full row-span-3 flex flex-col p-6 lg:col-span-4",
    attributes: {
      telemetries: [
        {
          area: true,
          name: "EST_REALISE_FORATION",
          color: "#B98EFF",
          label: "Realisé ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          area: false,
          name: "EST_PLANIFIE_FORATION",
          color: "#78F6EA",
          label: "Objectif ML/J",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
  {
    type: "multiProgress",
    title: "Disponibilité Engine GMC",
    className:
      "col-span-full row-span-6 flex flex-col gap-3 p-4 2xl:col-span-3",
    attributes: {
      telemetries: [
        {
          name: "GMC_FOREUSE_EPRIROC_T45_01_DISPO",
          color: "#ecc94b",
          label: "Foreuse Epiroc  T45 (1)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_FOREUSE_EPRIROC_T45_02_DISPO",
          color: "#ecc94b",
          label: "Foreuse Epiroc  T45 (2)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_FOREUSE_EPRIROC_T35_01_DISPO",
          color: "#ecc94b",
          label: "Foreuse Epiroc T35 ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT374_01_DISPO",
          color: "#ecc94b",
          label: "Pelle CAT 374 (1)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT374_02_DISPO",
          color: "#ecc94b",
          label: "Pelle CAT 374 (2) ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT374_03_DISPO",
          color: "#ecc94b",
          label: "Pelle CAT 374 (3)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT350_01_DISPO",
          color: "#ecc94b",
          label: "Pelle CAT 350 (1)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT350_02_DISPO",
          color: "#ecc94b",
          label: "Pelle CAT 350",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_PELLE_CAT_0000_01",
          color: "#ecc94b",
          label: " Pelle CAT ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_CAMIONS_SCANIA50T_GROUPE",
          color: "#ecc94b",
          label: "Camions Scania 50t (15)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_DOZER_D8_01",
          color: "#ecc94b",
          label: "D8 ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_DOZER_D8_02",
          color: "#ecc94b",
          label: "D8 (2)",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_NIVELEUSE_01",
          color: "#ecc94b",
          label: "Niveleuse ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_COMPACTEUR_01",
          color: "#ecc94b",
          label: "Compacteur ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
        {
          name: "GMC_CITERNE_01",
          color: "#ecc94b",
          label: "Citerne d'arrosage ",
          serial: "U9XQMQ1DXYT7LJIP",
        },
      ],
    },
  },
];
