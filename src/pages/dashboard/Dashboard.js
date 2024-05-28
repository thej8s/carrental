import React from "react";
import "./dashboard.scss";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function Dashboard() {
  const dummyData = [
    { id: 1, vehicleType: "Full Size", mileage: "20", rate: "40" },
    { id: 2, vehicleType: "Mid Size", mileage: "25", rate: "35" },
    { id: 3, vehicleType: "Mini Van", mileage: "18", rate: "50" },
    { id: 4, vehicleType: "SUV", mileage: "15", rate: "60" },
    { id: 5, vehicleType: "Luxury", mileage: "12", rate: "100" },
    { id: 6, vehicleType: "Sedan", mileage: "30", rate: "45" },
    { id: 7, vehicleType: "Compact", mileage: "35", rate: "30" },
  ];

  const columns = [
    { id: "vehicleType", label: "Vehicle Type", minWidth: 150 },
    { id: "mileage", label: "Mileage", minWidth: 100 },
    { id: "rate", label: "Rate", minWidth: 100 },
  ];

  return (
    <div className="dashboard">
      <div className="image-section">
        <img src="/images/dashboard-image.png" alt="Dashboard Image" />
      </div>
      <div className="data-section">
        <h2 className="dashboard-title">Vehicle Summary</h2>
        <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: "1rem" }}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="left"
                      style={{
                        minWidth: column.minWidth,
                        backgroundColor: "#242424",
                        color: "#fff",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((row) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align="left">
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}
