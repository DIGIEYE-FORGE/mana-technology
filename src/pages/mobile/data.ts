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
  },
  {
    name: "ELECTRICAL LINE",
    bottom: "50%",
    left: "5%",
    quickAccess: {
      side: "top",
      items: [
        {
          title: "Electrical power line",
          type: "image",
          thumb: "/video.svg",
          url: "/ElectricalPowerLine.png",
        },
      ],
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
  },
];
