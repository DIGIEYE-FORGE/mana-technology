export type TLocation = {
  name: string;
  click: string;
  bottom?: `${number}%`;
  top?: `${number}%`;
  right?: `${number}%`;
  left?: `${number}%`;
  quickAccess?: {
    side: "top" | "bottom" | "left" | "right";
    items: {
      type: "link" | "video" | "image";
      image: string;
      title?: string;
      url?: string;
    }[];
  };
};

export const locations: TLocation[] = [
  {
    name: "OPEN PIT",
    top: "32%",
    right: "13%",
    click: "Open Pit",
  },
  {
    name: "EST",
    bottom: "50%",
    right: "23%",
    click: "Pit EST",
  },
  {
    name: "SUD",
    bottom: "19%",
    right: "13%",
    click: "Pit SUD",
  },
  {
    name: "PLANT",
    top: "35%",
    left: "45%",
    click: "Process plant",
  },
  {
    name: "ELECTRICAL LINE",
    bottom: "45%",
    left: "5%",
    click: "Electrical power line",
  },
  {
    name: "PIPELINE",
    bottom: "20%",
    left: "14%",
    click: "Pipeline",
    quickAccess: {
      side: "left",
      items: [
        {
          type: "video",
          image: "/video.svg",
        },
      ],
    },
  },
];
