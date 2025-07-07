import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import employeeData from "../../data";
import Row from "./Row";
import { CardContent } from "@mui/material";

export default function DataTable() {
  return (
    <CardContent
      sx={{ padding: "20px", width: "700px", bgcolor: "#AFEEEE", mx: "auto" }}
    >
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Employee Name</TableCell>
              <TableCell />
              <TableCell />
              <TableCell />
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((employee) => (
              <Row key={employee.id} row={employee} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </CardContent>
  );
}
