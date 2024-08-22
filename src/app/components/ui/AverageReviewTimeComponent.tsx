"use client";
import * as React from "react";

interface AverageReviewTimeProps {
  averageReviewTime: number;
}

const AverageReviewTimeComponent: React.FC<AverageReviewTimeProps> = ({ averageReviewTime }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Tiempo Promedio de Revision de Documentos</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {averageReviewTime.toFixed(1)} Dias
      </p>
    </div>
  );
};

export default AverageReviewTimeComponent;
