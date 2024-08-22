"use client";
import * as React from "react";

interface TotalDocumentProps {
  totalDocument: number;
}

const TotalDocumentComponent: React.FC<TotalDocumentProps> = ({ totalDocument }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h2>Total de Documentos en la Blockchain</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
        {totalDocument} Documentos
      </p>
    </div>
  );
};

export default TotalDocumentComponent;
