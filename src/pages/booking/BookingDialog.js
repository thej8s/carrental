import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./bookingdialog.scss";
import { Autocomplete } from "@mui/material";

export default function BookingDialog() {
  const [open, setOpen] = useState(false);

  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [currentOdometer, setCurrentOdometer] = useState("");
  const [selectedNumberPlate, setSelectedNumberPlate] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [availability, setAvailability] = useState(null);
  const [dateError, setDateError] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePickupDateChange = (event) => {
    setPickupDate(event.target.value);
    validateDates(event.target.value, dropoffDate);
  };

  const handleDropoffDateChange = (event) => {
    setDropoffDate(event.target.value);
    validateDates(pickupDate, event.target.value);
  };

  const validateDates = (pickup, dropoff) => {
    if (dropoff != null) {
      if (new Date(pickup) >= new Date(dropoff)) {
        setDateError("Drop-off date must be after pick-up date.");
      } else {
        setDateError("");
      }
    }
  };

  const handleOdometerChange = (event) => {
    setCurrentOdometer(event.target.value);
  };

  const handleNumberPlateChange = (event, newValue) => {
    setSelectedNumberPlate(newValue);
    setSelectedVehicle(newValue);
    // console.log("handle number plate change called");
    // console.log(newValue);
    // setSelectedNumberPlate(newValue ? newValue.numberPlate : "");
    // console.log(selectedNumberPlate);

    // const vehicle = availableVehicles.find(
    //   (v) => v.numberPlate === (newValue ? newValue.numberPlate : "")
    // );
    // setSelectedVehicle(vehicle);
  };

  const checkAvailability = () => {
    // Check if a vehicle is selected
    if (!selectedVehicle) return;

    // Simulate checking availability (Replace with actual logic)
    const isAvailable = selectedVehicle.available;

    // Set availability state
    setAvailability(isAvailable);
  };

  const availableVehicles = [
    {
      model: "Toyota Corolla",
      make: "Toyota",
      color: "Red",
      year: 2021,
      numberPlate: "KL60U2250",
      available: true,
    },
    {
      model: "Honda Civic",
      make: "Honda",
      color: "Blue",
      year: 2019,
      numberPlate: "KL14A1111",
      available: false,
    },
    {
      model: "Ford Mustang",
      make: "Ford",
      color: "Black",
      year: 2020,
      numberPlate: "KL13B2222",
      available: true,
    },
  ];

  return (
    <Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        RESERVE
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>
          Booking Details
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form action="">
            <div className="form">
              <TextField
                sx={{ minWidth: "235px" }}
                id="outlined-basic"
                label="Pickup Date"
                value={pickupDate}
                onChange={handlePickupDateChange}
                inputVariant="standard"
                variant="outlined"
                size="small"
                type="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
                name="pickup_date"
                // onChange={onInputChange}
              />
              <TextField
                sx={{ minWidth: "235px" }}
                id="outlined-basic"
                label="Dropoff Date"
                value={dropoffDate}
                onChange={handleDropoffDateChange}
                inputVariant="standard"
                variant="outlined"
                size="small"
                type="Date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                required
                name="dropoff_date"
                error={!!dateError}
                helperText={dateError}
                // onChange={onInputChange}
              />
              <Autocomplete
                options={availableVehicles}
                getOptionLabel={(option) => option.numberPlate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Number Plate"
                    variant="outlined"
                    fullWidth
                  />
                )}
                value={selectedNumberPlate}
                onChange={handleNumberPlateChange}
              />
              <TextField
                autoFocus
                required
                margin="dense"
                id="current-odometer"
                label="Current Odometer"
                type="text"
                fullWidth
                variant="standard"
                value={currentOdometer}
                onChange={handleOdometerChange}
              />
              {selectedVehicle && (
                <TextField
                  margin="dense"
                  id="vehicle-model"
                  label="Model"
                  fullWidth
                  variant="standard"
                  value={selectedVehicle.model}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              )}
              {selectedVehicle && (
                <TextField
                  margin="dense"
                  id="vehicle-year"
                  label="Year"
                  fullWidth
                  variant="standard"
                  value={selectedVehicle.year}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              )}
              {selectedVehicle && (
                <TextField
                  margin="dense"
                  id="vehicle-make"
                  label="Make"
                  fullWidth
                  variant="standard"
                  value={selectedVehicle.make}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              )}
              {selectedVehicle && (
                <TextField
                  margin="dense"
                  id="vehicle-color"
                  label="Color"
                  fullWidth
                  variant="standard"
                  value={selectedVehicle.color}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              )}
              <Button
                variant="primary"
                style={{ backgroundColor: "lightgray" }}
                onClick={checkAvailability}
              >
                Check Availability
              </Button>
              {/* Display availability status */}
              {availability !== null && (
                <div
                  style={{
                    color: availability ? "green" : "red",
                    border: `1px solid ${availability ? "green" : "red"}`,
                    borderRadius: "5px",
                    padding: "5px",
                    textAlign: "center",
                  }}
                >
                  {availability ? "Available" : "Unavailable"}
                </div>
              )}
            </div>
          </form>

          <Button
            sx={{ m: "1rem 1rem 0 0" }}
            variant="contained"
            // onClick={handleSearchSubmit}
          >
            Submit
          </Button>
          <Button
            sx={{ mt: "1rem" }}
            variant="outlined"
            // onClick={handleSearchClear}
          >
            Close
          </Button>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions> */}
      </Dialog>
    </Fragment>
  );
}
