import React, { Fragment, useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./customers.scss";

export default function Customers() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchLicense, setSearchLicense] = useState("");
  const [filteredCustomerData, setFilteredCustomerData] = useState([]);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClear = () => {
    setSearchOpen(false);
    setSearchName("");
    setSearchLicense("");
    // setSearchModel("");
    setFilteredCustomerData(customer);
  };

  const handleSearchSubmit = () => {
    const filteredData = customer.filter((customer) => {
      const nameMatch = customer.name
        .toLowerCase()
        .includes(searchName.toLowerCase());

      const licenseMatch = customer.license
        .toLowerCase()
        .includes(searchLicense.toLowerCase());

      // const modelMatch = car.model
      //   .toLowerCase()
      //   .includes(searchModel.toLowerCase());

      // const priceMatch =
      //   (minPrice === "" || parseInt(car.price) >= parseInt(minPrice)) &&
      //   (maxPrice === "" || parseInt(car.price) <= parseInt(maxPrice));

      // return numberPlateMatch && yearMatch && priceMatch && modelMatch;
      return nameMatch && licenseMatch;
    });
    setFilteredCustomerData(filteredData);
    setSearchOpen(false);
  };

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

  const customer = [
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

  useEffect(() => {
    setFilteredCustomerData(customer);
  }, []);

  const [page, setPage] = useState(0);
  const [customerPerPage, setCustomerPerPage] = useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangecustomerPerPage = (event) => {
    setCustomerPerPage(+event.target.value);
    setPage(0);
  };

  const handleCustomerDetails = (code) => {
    navigate(`/customers/${code}`);
  };

  return (
    <Fragment>
      <div className="">
        <h2 className="heading">Customers</h2>

        <div className="search-add">
          <div className="search">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                // width: 200,
                height: 35,
                marginLeft: "1rem",
              }}
            >
              <IconButton
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
                onClick={handleSearchOpen}
              >
                <SearchIcon />
              </IconButton>
            </Paper>
            <Dialog open={searchOpen} onClose={handleSearchClear}>
              <DialogTitle>Search</DialogTitle>
              <DialogContent>
                <div className="search-grid">
                  <TextField
                    id="outlined-basic"
                    sx={{ flex: 1 }}
                    label="Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "name" }}
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    sx={{ flex: 1 }}
                    label="License"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "license" }}
                    value={searchLicense}
                    onChange={(e) => setSearchLicense(e.target.value)}
                  />
                </div>
              </DialogContent>
              {/* <DialogTitle>Filter</DialogTitle> */}
              <DialogContent>
                <div className="search-grid">
                  {/* <TextField
                    id="outlined-basic"
                    sx={{ flex: 1 }}
                    label="Min Price"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "min-price" }}
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    sx={{ flex: 1 }}
                    label="Max Price"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "max-price" }}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  /> */}
                  <Button
                    sx={{ mt: "1rem" }}
                    variant="contained"
                    onClick={handleSearchSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    sx={{ mt: "1rem" }}
                    variant="outlined"
                    onClick={handleSearchClear}
                  >
                    Clear
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

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
                {filteredCustomerData
                  .slice(
                    page * customerPerPage,
                    page * customerPerPage + customerPerPage
                  )
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
            customerPerPageOptions={[10, 25, 100]}
            component="div"
            count={customer.length}
            customerPerPage={customerPerPage}
            page={page}
            onPageChange={handleChangePage}
            onCustomerPerPageChange={handleChangecustomerPerPage}
          />
        </Paper>
      </div>
    </Fragment>
  );
}
