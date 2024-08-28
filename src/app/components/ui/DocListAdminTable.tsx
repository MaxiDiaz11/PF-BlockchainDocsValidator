import * as React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Chip } from "@mui/material";
import { useRouter } from "next/navigation";
import { getDate } from "../../util/utils";

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
      renderCell: (params) => (
        <Chip label={params.value} color={getStatusColor(params.value as string)} />
      ),
    },
    {
      field: 'action',
      headerName: 'Accion',
      width: 200,
      renderCell: (params) => (
        <Button
          color="secondary"
          className="circular-btn"
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
