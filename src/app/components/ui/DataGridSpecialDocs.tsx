import * as React from "react";
import {
  Chip,
  Button,
} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getNombreDoc } from "@/app/util/utils";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DangerousIcon from '@mui/icons-material/Dangerous';
import TimerIcon from '@mui/icons-material/Timer';

interface DocListTableProps {
  rows: Array<any>;
}

type ChipColor = "primary" | "secondary" | "success" | "error" | "info" | "warning" | "default";

const getStatusColor = (status: string): ChipColor => {
  switch (status) {
    case "Pendiente":
      return "warning";
    case "Aprobado":
      return "success";
    case "Rechazado":
      return "error";
    default:
      return "warning";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Pendiente":
      return <TimerIcon />;
    case "Aprobado":
      return <CheckCircleOutlineIcon />;
    case "Rechazado":
      return <DangerousIcon />;
    default:
      return <TimerIcon />;
  }
};

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 300, valueGetter: (params,row) => getNombreDoc(row.name) },
  {
    field: 'status',
    headerName: 'Estado',
    width: 150,
    renderCell: (params) => {
      const statusIcon = getStatusIcon(params.formattedValue);
      return (
        <>
          <Chip 
            label={params.formattedValue} 
            color={getStatusColor(params.formattedValue)} 
            icon={statusIcon}
            sx={{ ml: 1 }} // Add margin-left to space out the icon and text
          />
        </>
      );
    }
    ,
  },
  {
    field: 'uploadDate',
    headerName: 'Fecha',
    width: 200,
    valueGetter: (params,row) => getDate(row.uploadDate),
  },
  {
    field: 'action',
    headerName: 'Accion',
    width: 200,
    renderCell: (params) => (
      params.row.hash !== '' ? (
        <Button
          variant="contained"
          onClick={() => navigator.clipboard.writeText(params.row.hash)}
          >
          <ContentCopyIcon />
          Copy Hash
        </Button>
      ) : <></>
    ),
  }
];

export default function DataGridSpecialDocs({ rows }: DocListTableProps) {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      disableRowSelectionOnClick
    />
  );
}

function getDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

