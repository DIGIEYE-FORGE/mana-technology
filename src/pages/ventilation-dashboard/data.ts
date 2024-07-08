
export const data = {
  0: {
    children: [
      {
        title: "O2",
        max: 25,
        attributes: {
          telemetries: [
            {
              color: "#FF5AF1",
              name: "s=Plc2_O2",
              serial: "0TKJJWS26V62QV15",
              label: "L100",
            },
            {
              color: "#FED41E",
              name: "s=Plc3_O2",
              serial: "0TKJJWS26V62QV15",
              label: "L500",
            }
          ],
        }
      },
      {
        title: "CO",
        max: 2000,
        attributes: {
          telemetries: [
            {
              color: "#FF5AF1",
              name: "s=Plc2_CO",
              serial: "0TKJJWS26V62QV15",
              label: "L100",
            },
            {
              color: "#FED41E",
              name: "s=Plc3_CO",
              serial: "0TKJJWS26V62QV15",
              label: "L500",
            }
          ],
        }
      },
      {
        title: "NO2",
        max: 120,
        attributes: {
          telemetries: [
            {
              color: "#FF5AF1",
              name: "s=Plc2_NO2",
              serial: "0TKJJWS26V62QV15",
              label: "L100",
            },
            {
              color: "#FED41E",
              name: "s=Plc2_NO2",
              serial: "0TKJJWS26V62QV15",
              label: "L500",
            }
          ],
        }
      },
      {
        title: "Vitesse de l’air",
        max: 1,
        attributes: {
          telemetries: [
            {
              color: "#78F6EA",
              name: "s=Plc2_Vm/s",
              serial: "0TKJJWS26V62QV15",
              label: "L100",
            },
            {
              color: "#CCC",
              name: "s=Plc3_Vm/s",
              serial: "0TKJJWS26V62QV15",
              label: "L500",
            }

          ],
        }
      },
    ]
  },
  1: {
    children: [
      {
        title: "Vitesse (RPM)",
        max: 55,
        attributes: {
          telemetries: [
            {
              color: "#FED41E",
              name: "s=Var1_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "M1 V1",
            },
            {
              color: "#FF5AF1",
              name: "s=Var3_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "M1 V2",
            },
            {
              color: "#78F6EA",
              name: "s=Var2_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "M2 V1",
            },
            {
              color: "#CCC",
              name: "s=Var4_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "M2 V2",
            }
          ],
        }
      },
      {
        title: "Puissance (KW)",
        max: 2000,
        attributes: {
          telemetries: [
            {
              color: "#FED41E",
              name: "s=Var4_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            },
            {
              color: "#FED41E",
              name: "s=Var5_Vitesse",
              serial: "0TKJJWS26V62QV15",
              label: "Vitesse",
            }
          ],
        }
      },
      {
        title: "Vibration (mm/s)",
        max: 120,
        attributes: {
          telemetries: [
            {
              color: "#FED41E",
              name: "s=Pt100NdeM4",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            },
            {
              color: "#FF5AF1",
              name: "s=Pt100NdeM5",
              serial: "0TKJJWS26V62QV15",
              label: "Température",
            }
          ],
        }
      },
      {
        title: "Température (°C)",
        max: 5,
        attributes: {
          telemetries: [
            {
              color: "#78F6EA",
              name: "s=Plc2_ToH",
              serial: "0TKJJWS26V62QV15",
              label: "Humide (L100)",
            },
            {
              color: "#78F6EA",
              name: "s=Plc3_ToH",
              serial: "0TKJJWS26V62QV15",
              label: "Humide (L500)",
            },
            {
              color: "#78F6EA",
              name: "s=Plc2_ToS",
              serial: "0TKJJWS26V62QV15",
              label: "Sêche (L100)",
            },
            {
              color: "#78F6EA",
              name: "s=Plc3_ToS",
              serial: "0TKJJWS26V62QV15",
              label: "Sêche (L500)",
            }
          ],
        }
      },
    ]
  },
  2: {
    children: [
      {
        title: "Température (°C)",
        max: 55,
        attributes: {
          telemetries: [
            {
              color: "#FED41E",
              name: "s=Plc2_ToH",
              serial: "0TKJJWS26V62QV15",
              label: "Humide (L100)",
            },
            {
              color: "#FF5AF1",
              name: "s=Plc3_ToH",
              serial: "0TKJJWS26V62QV15",
              label: "Humide (L500)",
            },
            {
              color: "#78F6EA",
              name: "s=Plc2_ToS",
              serial: "0TKJJWS26V62QV15",
              label: "Sêche (L100)",
            },
            {
              color: "#CCC",
              name: "s=Plc3_ToS",
              serial: "0TKJJWS26V62QV15",
              label: "Sêche (L%00)",
            }
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
        stops: [
          { color: "red", offset: 16 },
          { color: "yellow", offset: 19 },
          { color: "green", offset: 20 },
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_O2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#C99E3E",
              unit: "%",
              max: 20,
            }
          ]
        },
      },
      1: {
        title: "CO",
        stops: [
          { color: "red", offset: 100 },
          { color: "yellow", offset: 20 },
          { color: "green", offset: 15 },
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_CO",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#007D82",
              unit: "ppm",
              max: 100,
            }
          ]
        }
      },
      2: {
        title: "NO2",
        stops: [
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5 },
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_NO2",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#F650A0",
              unit: "ppm",
              max: 3,
            },
          ]
        }
      },
      3: {
        title: "Vitesse air",
        stops: [
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.6 },
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc2_Vm/s",
              label: "Disponibilité",
              serial: "0TKJJWS26V62QV15",
              color: "#7A0BC0",
              unit: "m/s",
              max: 0.5,
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
        stops: [
          { color: "red", offset: 16 },
          { color: "yellow", offset: 19 },
          { color: "green", offset: 20 },
        ],
        attributes: {
          telemetries: [
            {
              name: "s=Plc3_O2",
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
        stops: [
          { color: "red", offset: 100 },
          { color: "yellow", offset: 20 },
          { color: "green", offset: 15 },
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
        stops: [
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5 },
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
        stops: [
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.5 },
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
        stops: [
          { color: "red", offset: 16 },
          { color: "yellow", offset: 19 },
          { color: "green", offset: 20 },
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
        stops: [
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5 },
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
        stops: [
          { color: "red", offset: 3 },
          { color: "yellow", offset: 2 },
          { color: "green", offset: 1.5 },
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
        stops: [
          { color: "red", offset: 0.1 },
          { color: "yellow", offset: 0.3 },
          { color: "green", offset: 0.5 },
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
        label: "v1",
        color: "#78F6EA",
      },
      {
        serial: "0TKJJWS26V62QV15",
        name: "s=plc1_DB_Conso1_kWhTotale",
        label: "v2",
        color: "#FF5AF1",
      }
    ]
  },
  1: {
    title: "Puissance Thermique galerie",
    unit: "Kw",
    telemetry: [{
      serial: "0TKJJWS26V62QV15",
      name: "s=plc1_DB_Tag_+PwDiesel",
      color: "#FF5AF1",
    }]
  },
  2: {
    title: "Nombre d’Engins Présents",
    unit: "",
    telemetry: [{
      serial: "0TKJJWS26V62QV15",
      name: "s=plc1_DB_Tag_NbVehicule",
      color: "#FF5AF1",
    }]
  },
}