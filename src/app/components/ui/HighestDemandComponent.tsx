"use client";
import * as React from "react";

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

interface HighestDemandProps {
  highestDemand: {
    month: string;
    total_count: number;
  };
}

const HighestDemandComponent: React.FC<HighestDemandProps> = ({ highestDemand }) => {
  const [year, monthNumber] = highestDemand.month.split("-");

  const monthName = monthNames[monthNumber];

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Mayor Demanda</h2>
      <p style={{ fontSize: '20px', margin: '5px 0' }}>
        Mes: <strong>{monthName} {year}</strong>
      </p>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        Total: {highestDemand.total_count}
      </p>
    </div>
  );
};

export default HighestDemandComponent;
