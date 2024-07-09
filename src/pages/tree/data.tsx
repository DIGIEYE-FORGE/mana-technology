import { Dashboard1 } from "./components/dashboard-01";
import { Dashboard2 } from "./components/dashboard-02";
import { Dashboard3 } from "./components/dashboard-03";
import { Dashboard4 } from "./components/dashboard-04";
import { Dashboard5 } from "./components/dashboard-05";
import { Dashboard6 } from "./components/dashboard-06";

export const machines = [
  {
    name: "Foration Simba E70S",
    image: "/machine-01.png",
    align: "end",
    side: "left",
    dashboard: {
      title: "Foration",
      component: <Dashboard1 />,
    },
    disabled: true,
  },
  {
    name: "Foration Jumbo M20",
    image: "/machine-02.png",
    align: "center",
    side: "left",
    dashboard: {
      title: "Foration",
      component: <Dashboard2 />,
    },
  },
  {
    name: "Chargement Explosif & Tir",
    image: "/machine-03.png",
    align: "center",
    sideOffset: -50,
    dashboard: {
      title: "Chargement Explosif & Tir ",
      component: <Dashboard3 />,
    },
  },
  {
    name: "Déblayage R1700",
    image: "/machine-04.png",
    align: "center",
    sideOffset: -50,
    dashboard: {
      title: "Déblayage ",
      component: <Dashboard4 />,
    },
  },
  {
    name: "Soutènement boltec M10",
    image: "/machine-05.png",
    align: "center",
    side: "right",
    sideOffset: 50,
    dashboard: {
      title: "Soutènement",
      component: <Dashboard5 />,
    },
  },
  {
    name: "Transport AD45",
    image: "/machine-06.png",
    align: "end",
    side: "left",
    sideOffset: 50,
    dashboard: {
      title: "Transport",
      component: <Dashboard6 />,
    },
  },
];
