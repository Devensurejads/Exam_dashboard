import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartOne() {
  const options: ApexOptions = {
    chart: {
      type: "pie",
      fontFamily: "Outfit, sans-serif",
    },
    labels: ["Sales", "Revenue", "Profit"], // Required for pie chart
    colors: ["#FFA500", "#16A449", "#1A73E8"],
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    tooltip: {
      enabled: true,
    },
    dataLabels: {
      enabled: true,
    },
  };

  // Flat array of values for pie chart
  const series = [3350, 2195, 2900]; // e.g. sum of monthly data for Sales, Revenue, Profit

  return (
    <div className="max-w-full overflow-x-auto custom-scrollbar">
      <div id="chartPie" className="min-w-[300px]">
        <Chart options={options} series={series} type="pie" height={310} />
      </div>
    </div>
  );
}
