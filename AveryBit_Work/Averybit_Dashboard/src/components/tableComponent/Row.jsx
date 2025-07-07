import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { TableRow } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

function Row({ row }) {
  const [open, setOpen] = React.useState(false);
  console.log(row);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.employee_name}
        </TableCell>
        <TableCell colSpan={4}></TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {row.projects.map((project, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" gutterBottom component="div">
                  {project.project_name}
                </Typography>
                <Table size="small" aria-label="project-details">
                  <TableHead>
                    <TableRow>
                      <TableCell>Time Allocated</TableCell>
                      <TableCell align="right">Time Needed</TableCell>
                      <TableCell align="right">Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{project.time_allocated}</TableCell>
                      <TableCell align="right">
                        {project.time_needed_to_complete}
                      </TableCell>
                      <TableCell align="right">
                        {project.current_status}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            ))}
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
