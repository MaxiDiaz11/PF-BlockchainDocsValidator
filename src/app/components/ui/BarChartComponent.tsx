"use client";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { useEffect, useState } from "react";

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
  const combinedData = documentsByMonth.reduce((acc, doc) => {
    const existing = acc.find((item) => item.month === doc.month);
    if (existing) {
      existing.count += typeof doc.count === 'string' ? parseInt(doc.count, 10) : doc.count;
    } else {
      acc.push({
        ...doc,
        count: typeof doc.count === 'string' ? parseInt(doc.count, 10) : doc.count,
      });
    }
    return acc;
  }, [] as { month: string; count: number }[]);

  const [tickPlacement, setTickPlacement] = useState<
    "start" | "end" | "middle" | "extremities"
  >("middle");
  const [tickLabelPlacement, setTickLabelPlacement] = useState<
    "middle" | "tick"
  >("middle");

  const year = combinedData[0]?.month.split("-")[0] || "2024";

  const fullYearData = initializeYear(year).map((monthData) => {
    const found = combinedData.find((doc) => doc.month === monthData.month);
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
            label: "Documentos por mes",
            valueFormatter,
          },
        ]}
        {...chartSetting}
      />
    </div>
  );
}