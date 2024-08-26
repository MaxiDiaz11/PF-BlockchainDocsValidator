import React from "react";
import {
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getDate } from "@/app/util/utils";
import { getNombreDoc } from "../../util/utils";

interface DocListTableProps {
  rows: Array<any>;
}

const DocSpecialListTable: React.FC<DocListTableProps> = ({ rows }) => {
  const getStatusColor = (status: string) => {
    let backgroundColor;
    switch (status) {
      case "Pendiente":
        backgroundColor = "warning";
        break;
      case "Aprobado":
        backgroundColor = "success";
        break;
      case "Rechazado":
        backgroundColor = "error";
        break;
      default:
        backgroundColor = "warning";
    }
    return backgroundColor;
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Name</b>{" "}
            </TableCell>
            <TableCell align="center">
              <b>Hash</b>
            </TableCell>
            <TableCell align="center">
              <b>Estado</b>
            </TableCell>
            <TableCell align="center">
              <b>Fecha</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.hash}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {getNombreDoc(row.name)}
              </TableCell>
              <TableCell align="center">{row.hash}</TableCell>
              <TableCell align="center">
                <Chip label={row.status} color={getStatusColor(row.status)} />
              </TableCell>
              <TableCell align="center">{getDate(row.uploadDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocSpecialListTable;
