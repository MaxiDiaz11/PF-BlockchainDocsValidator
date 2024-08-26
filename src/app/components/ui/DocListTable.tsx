import React from "react";
import { getDate } from "../../util/utils";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface DocListTableProps {
  rows: Array<any>;
}

const DocListTable: React.FC<DocListTableProps> = ({ rows }) => {
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
                {row.name}
              </TableCell>
              <TableCell align="center">{row.hash}</TableCell>
              <TableCell align="center">{getDate(row.uploadDate)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocListTable;
