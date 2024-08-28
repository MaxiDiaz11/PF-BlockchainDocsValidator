import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button } from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface RowData {
  id: number;
  name: string;
  uploadDate: string;
  hash: string;
}

const columns: GridColDef<RowData>[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nombre',
    width: 300,
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
      params.hash !== '' ? (
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


export default function DataGridDocs({rows}) {
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

// Utility function to format dates
function getDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}
