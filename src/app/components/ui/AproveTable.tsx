import React from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AproveTable = () => {
  function createData(
    name: string,
    status: string,
    legajo: number,
    aprobar: string
  ) {
    return { name, status, legajo, aprobar };
  }

  const rows = [
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
    createData("Certicado de alumno regular", "pendiente", 48409, "aprobar"),
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Tipo de Documento</b>{" "}
            </TableCell>
            <TableCell align="center">
              <b>Estado</b>
            </TableCell>
            <TableCell align="center">
              <b>Legajo</b>
            </TableCell>
            <TableCell align="center">
              <b>Acción</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.legajo}</TableCell>
              <TableCell align="center">
                <Button color="secondary" className="circular-btn" fullWidth>
                  Aprobar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AproveTable;
