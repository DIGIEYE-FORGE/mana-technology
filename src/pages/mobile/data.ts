export type TLocation = {
  name: string;
  bottom?: `${number}%`;
  top?: `${number}%`;
  right?: `${number}%`;
  left?: `${number}%`;
  quickAccess?: {
    side: "top" | "bottom" | "left" | "right";
    items: {
      type: "link" | "video" | "image";
      thumb: string;
      title?: string;
      url?: string;
    }[];
  };
  info?: {
    className?: string;
    title: string;
    data: {
      [key: string]: string;
    };
  };
};

export const locations: TLocation[] = [
  {
    name: "OPEN PIT",
    bottom: "50%",
    right: "6%",
    quickAccess: {
      side: "right",
      items: [
        {
          type: "video",
          thumb: "/video.svg",
          url: "/est_vd.mp4",
        },
      ],
    },
    info: {
      className: "bottom-full right-0 xl:w-[17.5rem] xl:translate-x-12",
      title: "Open Pit",
      data: {
        "Mineral reserves": "7,6 Mt @0,85% Cu & 23 ",
        "Waste tonnage": "61.8 Mt ",
        "Rock production ": "69.5 Mt",
        "Life of mine ": "4 years ",
      },
    },
  },
  {
    name: "EST",
    bottom: "50%",
    right: "23%",
    quickAccess: {
      side: "left",
      items: [
        {
          type: "video",
          thumb: "/video.svg",
          url: "/est_vd.mp4",
        },
      ],
    },
    info: {
      className: "bottom-full right-0 xl:w-[20rem] gap-0 xl:text-sm",
      title: "Pit EST",
      data: {
        "Mineral reserves": "4,5 Mt @0,8 % Cu et 27 g/t Ag ",
        "Waste tonnage": "39 Mt ",
        "Rock production ": "1,2 Mt rock per month",
        "Life of mine ": "4 years ",
      },
    },
  },
  {
    name: "SUD",
    bottom: "22%",
    right: "13%",
    quickAccess: {
      side: "left",
      items: [
        {
          type: "video",
          thumb: "/video.svg",
          url: "/est_vd.mp4",
          title: "Pit SUD",
        },
      ],
    },
  },
  {
    name: "PLANT",
    top: "35%",
    left: "45%",
    quickAccess: {
      side: "left",
      items: [
        {
          title: "Plant",
          thumb: "/video.svg",
          type: "video",
          url: "/3dvideo.mp4",
        },
      ],
    },
    info: {
      className: "bottom-full right-0",
      title: "Process plant",
      data: {
        "Processing method": "Flotation",
        Product: "Copper Silver concentrate",
        "Production capacity": "120 Ktonnes per year",
      },
    },
  },
  {
    name: "ELECTRICAL LINE",
    bottom: "50%",
    left: "5%",
    quickAccess: {
      side: "right",
      items: [
        {
          title: "Electrical power line",
          type: "image",
          thumb: "/video.svg",
          url: "/ElectricalPowerLine.png",
        },
      ],
    },
    info: {
      className: "bottom-full left-0",
      title: "Electrical power line",
      data: {
        ["60 kV line"]: "72 Km",
        ["22 kV line"]: "52 Km",
        ["Electrical substation"]: "60/22 kV",
      },
    },
  },
  {
    name: "PIPELINE",
    bottom: "18%",
    left: "14%",
    quickAccess: {
      side: "left",
      items: [
        {
          title: "Pipeline",
          type: "image",
          thumb: "/video.svg",
          url: "/PIPELINE.png",
        },
      ],
    },
    info: {
      className: "top-full left-0 xl:-translate-x-1/2",
      title: "Pipeline",
      data: {
        "Pipe length": "146 km ",
        "Pipe diameter": "400 mm ",
        "Pumping station's": "8 PS /1350m",
        Origine: "Treated waste water",
      },
    },
  },
];

export const undergroundLocations: TLocation[] = [
  {
    name: "Underground",
    bottom: "60%",
    left: "50%",
    quickAccess: {
      side: "top",
      items: [
        {
          title: "Underground Mine",
          type: "video",
          thumb: "/video.svg",
          url: "/Underground.mp4",
        },
      ],
    },
    info: {
      className:
        "right-[120%] bottom-1/2 translate-y-1/2 w-[10rem] sm:w-[12rem]  xl:w-[20rem]",
      title: "Underground Mine",
      data: {
        "Mineral reserves": "54 Mt @ 0,9 %Cu et 19 g/t Ag",
        "Mining methods": "R&P /LHOS",
        "Total development": "230 km lateral",
        "Daily production capacity": "10800 tpd from 2028",
        "Extraction method": "Belt conveyor",
        Backfilling: "Paste backfilling",
        "Life of mine": "15 years",
      },
    },
  },
];
