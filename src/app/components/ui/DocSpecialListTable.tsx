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
  Button,
  Typography
} from "@mui/material";
import { getDate } from "@/app/util/utils";
import { getNombreDoc } from "../../util/utils";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface DocListTableProps {
  rows: Array<any>;
}

type ChipColor = "primary" | "secondary" | "success" | "error" | "info" | "warning" | "default";


const DocSpecialListTable: React.FC<DocListTableProps> = ({ rows }) => {
  const getStatusColor = (status: string): ChipColor => {
    let backgroundColor: ChipColor;
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



const copyHash = (hash : string) => {
  navigator.clipboard.writeText(hash)
}



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <b>Name</b>{" "}
            </TableCell>
            <TableCell align="center">
              <b>Estado</b>
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
                {getNombreDoc(row.name)}
              </TableCell>
              <TableCell align="center">
                <Chip label={row.status} color={getStatusColor(row.status)} />
              </TableCell>
              <TableCell align="center">{getDate(row.uploadDate)}</TableCell>
              <TableCell align="center">
              {
                  row.hash ?
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

export default DocSpecialListTable;
