import * as React from "react";
import {
  Chip,
  Button,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getDate, getNombreDoc } from "@/app/util/utils";

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

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 300, valueGetter: (params,row) => getNombreDoc(row.name) },
  {
    field: 'status',
    headerName: 'Estado',
    width: 150,
    renderCell: (params) => {
        return <Chip label={params.formattedValue} color={getStatusColor(params.formattedValue)} />
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
    field: '',
    headerName: 'Accion',
    width: 200,
    renderCell: (params) => 
        {
            return params.row.hash ? (
                <Button
                  variant="contained"
                  onClick={() => navigator.clipboard.writeText(params.row.hash)}
                >
                  <ContentCopyIcon />
                  <Typography sx={{ mx: 2 }}>
                    Get Hash
                  </Typography>
                </Button>
              ) : <></>
        
        }
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
