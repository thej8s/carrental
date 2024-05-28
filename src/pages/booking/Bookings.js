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
import "./bookings.scss";

export default function Bookings() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchCarMake, setSearchCarMake] = useState("");
  const [searchCustomerName, setSearchCustomerName] = useState("");
  const [filteredBookingData, setFilteredBookingData] = useState([]);

  const handleSearchOpen = () => {
    setSearchOpen(true);
  };

  const handleSearchClear = () => {
    setSearchOpen(false);
    setSearchCarMake("");
    setSearchCustomerName("");
    setFilteredBookingData(bookings);
  };

  const handleSearchSubmit = () => {
    const filteredData = bookings.filter((booking) => {
      const carMakeMatch = booking.car_make
        .toLowerCase()
        .includes(searchCarMake.toLowerCase());

      const customerNameMatch = booking.customer_name
        .toLowerCase()
        .includes(searchCustomerName.toLowerCase());

      return carMakeMatch && customerNameMatch;
    });
    setFilteredBookingData(filteredData);
    setSearchOpen(false);
  };

  const columns = [
    { id: "car_make", label: "Car Make", minWidth: 150 },
    { id: "year", label: "Year", minWidth: 100, align: "left" },
    { id: "odometer", label: "Odometer", minWidth: 100, align: "left" },
    { id: "pickup_date", label: "Pickup Date", minWidth: 120, align: "left" },
    { id: "dropoff_date", label: "Dropoff Date", minWidth: 120, align: "left" },
    {
      id: "customer_name",
      label: "Customer Name",
      minWidth: 150,
      align: "left",
    },
    {
      id: "customer_license",
      label: "Customer License",
      minWidth: 150,
      align: "left",
    },
  ];

  const bookings = [
    {
      id: 1,
      car_make: "Toyota",
      year: 2020,
      odometer: 15000,
      pickup_date: "2024-06-01",
      dropoff_date: "2024-06-10",
      customer_name: "John Doe",
      customer_license: "AB1234567890",
    },
    {
      id: 2,
      car_make: "Honda",
      year: 2019,
      odometer: 30000,
      pickup_date: "2024-06-05",
      dropoff_date: "2024-06-15",
      customer_name: "Alice Smith",
      customer_license: "XY4567890123",
    },
    // Add more mock data as needed
  ];

  useEffect(() => {
    setFilteredBookingData(bookings);
  }, []);

  const [page, setPage] = useState(0);
  const [bookingsPerPage, setBookingsPerPage] = useState(10);

  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeBookingsPerPage = (event) => {
    setBookingsPerPage(+event.target.value);
    setPage(0);
  };

  const handleBookingDetails = (id) => {
    navigate(`/bookings/${id}`);
  };

  return (
    <Fragment>
      <div className="">
        <h2 className="heading">Bookings</h2>

        <div className="search-add">
          <div className="search">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                height: 35,
                marginLeft: "1rem",
                marginBottom: "1rem",
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
                    label="Car Make"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "car-make" }}
                    value={searchCarMake}
                    onChange={(e) => setSearchCarMake(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    sx={{ flex: 1 }}
                    label="Customer Name"
                    variant="outlined"
                    size="small"
                    fullWidth
                    inputProps={{ "aria-label": "customer-name" }}
                    value={searchCustomerName}
                    onChange={(e) => setSearchCustomerName(e.target.value)}
                  />
                </div>
              </DialogContent>
              <DialogTitle>Filter</DialogTitle>
              <DialogContent>
                <div className="search-grid">
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

          {/* <Link to={"/add-booking"} className="add-button">
            <Button
              variant="contained"
              style={{
                marginBottom: "1rem",
              }}
            >
              Add Booking
            </Button>
          </Link> */}
        </div>

        <Paper sx={{ width: "100%", overflow: "hidden", marginBottom: "1rem" }}>
          <TableContainer>
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
                {filteredBookingData
                  .slice(
                    page * bookingsPerPage,
                    page * bookingsPerPage + bookingsPerPage
                  )
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.id}
                        onClick={() => {
                          console.log("Row clicked with ID:", row.id);
                          handleBookingDetails(row.id);
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
            count={bookings.length}
            rowsPerPage={bookingsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeBookingsPerPage}
          />
        </Paper>
      </div>
    </Fragment>
  );
}
