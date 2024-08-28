import * as React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { getDate } from "../../util/utils";
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


export default function DocListAdminTable({ rows }: DocListTableProps) {
  const router = useRouter();

  const goToEvaluarDocument = (id: string) => {
    router.push(`/dashboard/admin/aprobar-doc/${id}`);
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Nombre', width: 300 },
    { field: 'uploadDate', headerName: 'Fecha', width: 200, valueGetter: (params,row) => getDate(row.uploadDate) },
    {
      field: 'estado',
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
      </>)
      },
    },
    {
      field: 'action',
      headerName: 'Accion',
      width: 200,
      renderCell: (params) => (
        <Button
          color="secondary"
          className="circular-btn"
          disabled={params.row.estado == "Aprobado" || params.row.estado == "Rechazado"}
          onClick={() => goToEvaluarDocument(params.row.id)}
        >
          Evaluar
        </Button>
      ),
    }
  ];

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
