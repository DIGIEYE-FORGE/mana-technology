
export const data = [
  {
    title: "Moteur 1",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Kw",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var1_Pw",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Speed",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var1_Vitesse",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Température",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM1",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Vibration",
        color: "#78F6EA",
        attributes: {
          telemetries: [
            {
              name: "s=Var1_VibDe",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
    ]
  },
  {
    title: "Moteur 2",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Kw",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var2_Pw",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Speed",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var2_Vitesse",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Température",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM2",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Vibration",
        color: "#78F6EA",
        attributes: {
          telemetries: [
            {
              name: "s=Var2_VibDe",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
    ]
  },
  {
    title: "Moteur 4",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Kw",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var4_Pw",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Speed",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var4_Vitesse",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Température",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM4",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Vibration",
        color: "#78F6EA",
        attributes: {
          telemetries: [
            {
              name: "s=Var4_VibDe",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
    ]
  },
  {
    title: "Moteur 5",
    cardType: "MoteurGroup",
    cardClassNames: "col-span-3 row-span-3 flex flex-col gap-1",
    children: [
      {
        title: "Kw",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var5_Pw",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Speed",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Var5_Vitesse",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Température",
        color: "#FF5AF1",
        attributes: {
          telemetries: [
            {
              name: "s=Pt100NdeM5",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
      {
        title: "Vibration",
        color: "#78F6EA",
        attributes: {
          telemetries: [
            {
              name: "s=Var5_VibDe",
              serial: "GQKOD91C6LNG9UGM",
            },
          ],
        }
      },
    ]
  },

]


export const qualitédair = {
  0: {
    title: "Niveau 100",
    children: {
      0: {
        title: "O2",
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_O2",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "%",
            }
          ]
        }
      },
      1: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_CO",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            }
          ]
        }
      },
      2: {
        title: "NO2",
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_No2",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_Vm/s",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
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
              name: "s=Plc2_T°H",
              label: "Température Humide",
              serial: "GQKOD91C6LNG9UGM",
              color: "#fff",
            },
            {
              name: "s=Plc2_T°S",
              label: "Température Sèche",
              serial: "GQKOD91C6LNG9UGM",
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
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_O2",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "%",
            }
          ]
        }
      },
      1: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_CO",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            }
          ]
        }
      },
      2: {
        title: "NO2",
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_No2",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_Vm/s",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
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
              name: "s=Plc3_T°H",
              label: "Température Humide",
              serial: "GQKOD91C6LNG9UGM",
              color: "#fff",
            },
            {
              name: "s=Plc3_T°S",
              label: "Température Sèche",
              serial: "GQKOD91C6LNG9UGM",
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
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "%",
            }
          ]
        }
      },
      1: {
        title: "CO",
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            }
          ]
        }
      },
      2: {
        title: "NO2",
        attributes: {
          telemetries: [
            {
              name: "",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
              unit: "ppm",
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_Vm/s",
              label: "Disponibilité",
              serial: "GQKOD91C6LNG9UGM",
              color: "#cda943",
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
              serial: "GQKOD91C6LNG9UGM",
              color: "#fff",
            },
            {
              name: "",
              label: "Température Sèche",
              serial: "GQKOD91C6LNG9UGM",
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
    title: "Puissance Totale KW",
    unit: "Kw",
    telemetry: [
      {
      serial: "GQKOD91C6LNG9UGM",
      name: "=plc1_DB_Conso2_kWhTotale",
      },
      {
      serial: "GQKOD91C6LNG9UGM",
      name: "=plc1_DB_Conso1_kWhTotale",
      }
    ]
  },
  1: {
    title: "Puissance Thermique galerie",
    unit: "Kw",
    telemetry: [{
      serial: "GQKOD91C6LNG9UGM",
      name: "s=plc1_DB_Tag_ΣPwDiesel",
    }]
  },
  2: {
    title: "Nombre d’Engins Présents",
    unit: "",
    telemetry: [{
      serial: "GQKOD91C6LNG9UGM",
      name: "s=plc1_DB_Tag_NbVéhicule",
    }]
  },
}