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
  Button
} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Typography } from "../../../../node_modules/@mui/material/index";

interface DocListTableProps {
  rows: Array<any>;
}

const DocListTable: React.FC<DocListTableProps> = ({ rows }) => {

  const copyHash = (hash : string) => {
    navigator.clipboard.writeText(hash)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Nombre</b>{" "}
            </TableCell>
            <TableCell align="center">
              <b>Fecha</b>
            </TableCell>
            <TableCell align="center">
              <b>Accion</b>
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
              <TableCell align="center">{getDate(row.uploadDate)}</TableCell>
              <TableCell align="center">
                {
                  row.hash !== '' ?
                  <Button
                  variant="contained"
                  onClick={() => copyHash(row.hash)}>
                    <ContentCopyIcon/>
                    <Typography sx={{mx:2}}>
                          Get Hash
                    </Typography>
                </Button>
                : <></>
                }
                
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocListTable;
