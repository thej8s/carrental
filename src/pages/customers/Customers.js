import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

export default function Customers() {
  const columns = [
    { id: "name", label: "Name", minWidth: 150 },
    { id: "license", label: "License Number", minWidth: 120, align: "left" },
    { id: "email", label: "Email", minWidth: 100, align: "left" },
    { id: "phone", label: "Phone Number", minWidth: 100, align: "left" },
    {
      id: "license_expiry",
      label: "License Expiry Date",
      minWidth: 130,
      align: "left",
    },
    { id: "address", label: "Address", minWidth: 200, align: "left" },
  ];

  const rows = [
    {
      id: 1,
      name: "John Doe",
      license: "AB1234567890",
      email: "john@example.com",
      phone: "1234567890",
      license_expiry: "2025-08-15",
      address: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      name: "Alice Smith",
      license: "XY4567890123",
      email: "alice@example.com",
      phone: "9876543210",
      license_expiry: "2024-12-31",
      address: "456 Elm St, Othertown, USA",
    },
    {
      id: 3,
      name: "Bob Johnson",
      license: "DE7890123456",
      email: "bob@example.com",
      phone: "5555555555",
      license_expiry: "2023-05-20",
      address: "789 Oak St, Anothertown, USA",
    },
    {
      id: 4,
      name: "Emily Brown",
      license: "FG2345678901",
      email: "emily@example.com",
      phone: "1112223333",
      license_expiry: "2026-09-30",
      address: "567 Pine St, Somewhere, USA",
    },
    {
      id: 5,
      name: "Michael Lee",
      license: "HI3456789012",
      email: "michael@example.com",
      phone: "9998887777",
      license_expiry: "2024-11-25",
      address: "890 Cedar St, Nowhere, USA",
    },
    {
      id: 6,
      name: "Sarah Taylor",
      license: "JK4567890123",
      email: "sarah@example.com",
      phone: "4443332222",
      license_expiry: "2023-07-12",
      address: "234 Maple St, Elsewhere, USA",
    },
    {
      id: 7,
      name: "David Wilson",
      license: "LM5678901234",
      email: "david@example.com",
      phone: "7776665555",
      license_expiry: "2025-03-18",
      address: "678 Oak St, Nowhere, USA",
    },
    {
      id: 8,
      name: "Jennifer Garcia",
      license: "NO6789012345",
      email: "jennifer@example.com",
      phone: "3334445555",
      license_expiry: "2023-12-05",
      address: "123 Elm St, Somewhere, USA",
    },
    {
      id: 9,
      name: "James Martinez",
      license: "PQ7890123456",
      email: "james@example.com",
      phone: "6667778888",
      license_expiry: "2024-06-28",
      address: "456 Pine St, Anytown, USA",
    },
    {
      id: 10,
      name: "Jessica Hernandez",
      license: "RS8901234567",
      email: "jessica@example.com",
      phone: "2223334444",
      license_expiry: "2022-10-15",
      address: "789 Maple St, Othertown, USA",
    },
    {
      id: 11,
      name: "Matthew Clark",
      license: "TU9012345678",
      email: "matthew@example.com",
      phone: "8889990000",
      license_expiry: "2023-09-22",
      address: "567 Oak St, Anothertown, USA",
    },
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleCustomerDetails = (code) => {
    navigate(`/customers/${code}`);
  };

  return (
    <div className="">
      <h2 className="heading">Customers</h2>

      <div className="search-add">
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: 200,
            height: 35,
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

        <Link to={"/add-customer"} className="add-button">
          <Button
            variant="contained"
            style={{
              marginBottom: "1rem",
            }}
          >
            Add Customer
          </Button>
        </Link>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: "1rem" }}>
        <TableContainer sx={{}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#f0f0f0",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.license}
                      onClick={() => {
                        console.log("Row clicked with License:", row.license);
                        handleCustomerDetails(row.license);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
