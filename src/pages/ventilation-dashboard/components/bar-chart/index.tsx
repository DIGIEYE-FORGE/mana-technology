import Chart from "react-apexcharts";

export const BarChart = () => {
  const series = [
    {
      name: "Temperature",
      data: [20, 30],
    },
  ];

  return (
    <Chart
      options={{
        theme: { mode: "dark" },
        tooltip: { cssClass: "text-black" },
        chart: {
          type: "bar",
          toolbar: { show: false },
          animations: { enabled: true },
          zoom: { enabled: false },
          selection: { enabled: false },
          dropShadow: { enabled: false },
          background: "transparent",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            // endingShape: "flat",
          },
        },
        dataLabels: {
          enabled: true, // Enable data labels
          formatter: function (val) {
            return val + "°C"; // Format the label to include °C
          },
          offsetY: 30,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          type: "category",
          categories: ["Température Humide", "Température Sèche"],
          axisBorder: { show: false },
          axisTicks: { show: false },
          labels: {
            style: {
              fontSize: "7px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 600,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        yaxis: {
          min: 0,
          max: series[0].data.reduce((a, b) => Math.max(a, b)) + 20,
          tickAmount: 1,
          axisBorder: { show: false },
          axisTicks: { show: false },
        },

        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "#FFDC8C",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#C99E3E",
                opacity: 1,
              },
            ],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100],
          },
        },
      }}
      series={series}
      type="bar"
      height="80%"
    />
  );
};
