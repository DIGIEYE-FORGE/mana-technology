
export const data = {
  0: {
    title: "Moteur 1",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Puissance (KW)",
        color: "#FF5AF1",
        max:55,
        attributes: {
          telemetries: [
            {
              name: "s=Var1_Pw",
              serial: "0TKJJWS26V62QV15",
              label: "Puissance",
            },
          ],
        }
      },
      {
        title: "Vitesse (RPM)",
        color: "#FED41E",
        max:2000,
        attributes: {
          telemetries: [
            {
              name: "s=Var1_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            },
          ],
        }
      },
      {
        title: "Température (°C)",
        color: "#FF5AF1",
        max:120,
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM1",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            },
          ],
        }
      },
      {
        title: "Vibration (mm/s)",
        color: "#78F6EA",
        max:5,
        attributes: {
          telemetries: [
            {
              name: "s=Var1_VibDe",
              serial: "0TKJJWS26V62QV15",
              label: "Vibration",
            },
          ],
        }
      },
    ]
  },
  1: {
    title: "Moteur 2",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Puissance (KW)",
        color: "#FF5AF1",
        max:55,
        attributes: {
          telemetries: [
            {
              name: "s=Var2_Pw",
              serial: "0TKJJWS26V62QV15",
              label: "Puissance",
            },
          ],
        }
      },
      {
        title: "Vitesse (RPM)",
        color: "#FED41E",
        max:2000,
        attributes: {
          telemetries: [
            {
              name: "s=Var2_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            },
          ],
        }
      },
      {
        title: "Température (°C)",
        color: "#FF5AF1",
        max:120,
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM2",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            },
          ],
        }
      },
      {
        title: "Vibration (mm/s)",
        color: "#78F6EA",
        max:5,
        attributes: {
          telemetries: [
            {
              name: "s=Var2_VibDe",
              serial: "0TKJJWS26V62QV15",
              label: "Vibration",
            },
          ],
        }
      },
    ]
  },
  2: {
    title: "Moteur 1",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Puissance (KW)",
        max:55,
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var4_Pw",
              serial: "0TKJJWS26V62QV15",
              label: "Puissance",
            },
          ],
        }
      },
      {
        title: "Vitesse (RPM)",
        max:2000,
        color: "#FED41E",
        attributes: {
          telemetries: [
            {
              name: "s=Var4_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            },
          ],
        }
      },
      {
        title: "Température (°C)",
        color: "#FF5AF1",
        max:120,
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM4",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            },
          ],
        }
      },
      {
        title: "Vibration (mm/s)",
        color: "#78F6EA",
        max:5,
        attributes: {
          telemetries: [
            {
              name: "s=Var4_VibDe",
              serial: "0TKJJWS26V62QV15",
              label: "Vibration",
            },
          ],
        }
      },
    ]
  },
  3: {
    title: "Moteur 2",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Puissance (KW)",
        max:55,
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var5_Pw",
              serial: "0TKJJWS26V62QV15",
              label: "Puissance",
            },
          ],
        }
      },
      {
        title: "Vitesse (RPM)",
        max:2000,
        color: "#FED41E",
        attributes: {
          telemetries: [
            {
              name: "s=Var5_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            },
          ],
        }
      },
      {
        title: "Température (°C)",
        color: "#FF5AF1",
        max:120,
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM5",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            },
          ],
        }
      },
      {
        title: "Vibration (mm/s)",
        color: "#78F6EA",
        max:5,
        attributes: {
          telemetries: [
            {
              name: "s=Var5_VibDe",
              serial: "0TKJJWS26V62QV15",
              label: "Vibration",
            },
          ],
        }
      },
    ]
  },
}


export const qualitédair = {
  0: {
    title: "Niveau 100",
    children: {
      0: {
        title: "O2",
        stops:[
            { color: "red", offset: 16 },
            { color: "yellow", offset: 19 },
            { color: "green", offset: 20},
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_O2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#C99E3E",
              unit: "",
              max:20,
            }
          ]
        },
      },
      1: {
        title: "CO",
        stops:[
          { color: "red", offset: 100 },
          { color: "yellow", offset: 20 },
          { color: "green", offset: 15},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_CO",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#007D82",
              unit: "ppm",
              max:100,
            }
          ]
        }
      },
      2: {
        title: "NO2",
        stops:[
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_NO2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#F650A0",
              unit: "ppm",
              max:3,
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        stops:[
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.5},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_Vm/s",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#7A0BC0",
              unit: "m/s",
              max:0.5,
            },
          ]
        }
      },
      4: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_ToH",
              label: "Température Humide",
              serial: "0TKJJWS26V62QV15",
              color: "#fff",
            },
            {
              name: "s=Plc2_ToS",
              label: "Température Sèche",
              serial: "0TKJJWS26V62QV15",
              color: "#cda943",
            },
          ]
        }
      }
    }
  },
  1: {
    title: "Niveau 500",
    children: {
      0: {
        title: "O2",
        stops:[
          { color: "red", offset: 16 },
          { color: "yellow", offset: 19 },
          { color: "green", offset: 20},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_O2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#C99E3E",
              unit: "",
            }
          ]
        }
      },
      1: {
        title: "CO",
        stops:[
          { color: "red", offset: 100 },
          { color: "yellow", offset: 20 },
          { color: "green", offset: 15},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_CO",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#007D82",
              unit: "ppm",
            }
          ]
        }
      },
      2: {
        title: "NO2",
        stops:[
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5},
      ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_NO2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#F650A0",
              unit: "ppm",
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        stops:[
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.5},
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_Vm/s",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#7A0BC0",
              unit: "m/s",
            },
          ]
        }
      },
      4: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_ToH",
              label: "Température Humide",
              serial: "0TKJJWS26V62QV15",
              color: "#fff",
            },
            {
              name: "s=Plc3_ToS",
              label: "Température Sèche",
              serial: "0TKJJWS26V62QV15",
              color: "#cda943",
            },
          ]
        }
      }
    }
  },
  2: {
    title: "Niveau 1000",
    children: {
      0: {
        title: "O2",
        stops:[
          { color: "red", offset: 16 },
          { color: "yellow", offset: 19 },
          { color: "green", offset: 20},
      ],
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#C99E3E",
              unit: "%",
            }
          ]
        }
      },
      1: {
        title: "CO",
        stops:[
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5},
      ],
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#007D82",
              unit: "ppm",
            }
          ]
        }
      },
      2: {
        title: "NO2",
        stops:[
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5},
      ],
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#F650A0",
              unit: "ppm",
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        stops:[
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.5},
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_Vm/s",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#7A0BC0",
              unit: "m/s",
            },
          ]
        }
      },
      4: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Température Humide",
              serial: "0TKJJWS26V62QV15",
              color: "#fff",
            },
            {
              name: "",
              label: "Température Sèche",
              serial: "0TKJJWS26V62QV15",
              color: "#cda943",
            },
          ]
        }
      }
    }
  }
}

export const ventilation = {
  0: {
    title: "Energie Total (Kwh)",
    unit: "Kwh",
    telemetry: [
      {
        serial: "0TKJJWS26V62QV15",
        name: "s=plc1_DB_Conso2_kWhTotale",
        label: "v1"
      },
      {
        serial: "0TKJJWS26V62QV15",
        name: "s=plc1_DB_Conso1_kWhTotale",
        label: "v2"
      }
    ]
  },
  1: {
    title: "Puissance Thermique galerie",
    unit: "Kw",
    telemetry: [{
      serial: "0TKJJWS26V62QV15",
      name: "s=plc1_DB_Tag_PwDiesel",
    }]
  },
  2: {
    title: "Nombre d’Engins Présents",
    unit: "",
    telemetry: [{
      serial: "0TKJJWS26V62QV15",
      name: "s=plc1_DB_Tag_NbVehicule",
    }]
  },
}