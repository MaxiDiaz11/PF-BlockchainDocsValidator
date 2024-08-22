"use client";
import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

// Define the props interface
interface BarChartComponentProps {
  documentsByMonth: { month: string; count: number }[];
}

// Spanish month names mapping
const monthNames: { [key: string]: string } = {
  "01": "Enero",
  "02": "Febrero",
  "03": "Marzo",
  "04": "Abril",
  "05": "Mayo",
  "06": "Junio",
  "07": "Julio",
  "08": "Agosto",
  "09": "Septiembre",
  "10": "Octubre",
  "11": "Noviembre",
  "12": "Diciembre",
};

// Initialize all months with a count of 0
const initializeYear = (year: string) => {
  return Object.keys(monthNames).map((monthNumber) => ({
    month: `${year}-${monthNumber}`,
    count: 0,
  }));
};

// Update the valueFormatter to format the document count
const valueFormatter = (value: number | null) => `${value} documentos`;

const chartSetting = {
  yAxis: [
    {
      label: "Documentos",
    },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: "translateX(-10px)",
    },
  },
};

export default function BarChartComponent({ documentsByMonth }: BarChartComponentProps) {
  const [tickPlacement, setTickPlacement] = React.useState<
    "start" | "end" | "middle" | "extremities"
  >("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState<
    "middle" | "tick"
  >("middle");

  // Extract year from the first item, default to "2024" if empty
  const year = documentsByMonth[0]?.month.split("-")[0] || "2024";

  // Fill the entire year with 0 counts
  const fullYearData = initializeYear(year).map((monthData) => {
    const found = documentsByMonth.find(
      (doc) => doc.month === monthData.month
    );
    return found ? found : monthData;
  });

  return (
    <div style={{ width: "100%" }}>
      <BarChart
        dataset={fullYearData}
        xAxis={[
          {
            scaleType: "band",
            dataKey: "month",
            tickPlacement,
            tickLabelPlacement,
            valueFormatter: (value) => {
              const [, monthNumber] = value.split("-");
              return monthNames[monthNumber];
            },
          },
        ]}
        series={[
          {
            dataKey: "count",
            label: "Documentos por Mes",
            valueFormatter,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}
