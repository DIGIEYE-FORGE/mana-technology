import { Widget } from "@/pages/home/data";

interface DashboardWidgetProps {
  widget: Widget;
}

import TableWidget from "@/components/table-widget";
import LineChartWidget from "@/components/line-chart-widget";
import BarChartWidget from "@/components/bar-chart-widget";
import MultiProgressWidget from "@/components/multi-progress-widget";
import { ProgressAccumulation } from "@/pages/home/_components/progress-accumulation";

export const DashboardWidget = ({ widget }: DashboardWidgetProps) => {
  if (widget.type === "lineChart") {
    return (
      <div className="flex-1">
        <LineChartWidget attributes={widget.attributes} />
      </div>
    );
  }
  if (widget.type === "barChart") {
    return (
      <div className="flex-1">
        <BarChartWidget attributes={widget.attributes} />
      </div>
    );
  }
  if (widget.type === "tableWidget") {
    return (
      <div className="h-1 flex-1">
        <TableWidget attributes={widget.attributes} />
      </div>
    );
  }
  if (widget.type === "multiProgress") {
    return <MultiProgressWidget attributes={widget.attributes} />;
  }
  if (widget.type === "progressChart") {
    return <ProgressAccumulation attributes={widget.attributes} />;
  }
  return null;
};
