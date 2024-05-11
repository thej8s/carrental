import React, { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function BookingDialog() {
  const [open, setOpen] = useState(false);

  const [pickupDate, setPickupDate] = useState(null);
  const [dropoffDate, setDropoffDate] = useState(null);
  const [currentOdometer, setCurrentOdometer] = useState("");
  const [selectedNumberPlate, setSelectedNumberPlate] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleDropoffDateChange = (date) => {
    setDropoffDate(date);
  };

  const handleOdometerChange = (event) => {
    setCurrentOdometer(event.target.value);
  };

  const handleNumberPlateChange = (event) => {
    const plate = event.target.value;
    setSelectedNumberPlate(plate);
    // Find the vehicle matching the selected number plate
    const vehicle = availableVehicles.find((v) => v.numberPlate === plate);
    setSelectedVehicle(vehicle);
  };

  // Mock data for available vehicles
  const availableVehicles = [
    {
      model: "Toyota Corolla",
      make: "Toyota",
      color: "Red",
      year: 2021,
      numberPlate: "KL60U2250",
    },
    {
      model: "Honda Civic",
      make: "Honda",
      color: "Blue",
      year: 2019,
      numberPlate: "KL14A1111",
    },
    {
      model: "Ford Mustang",
      make: "Ford",
      color: "Black",
      year: 2020,
      numberPlate: "KL13B2222",
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
        <DialogTitle>Booking Details</DialogTitle>
        <DialogContent>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{ marginBottom: "1rem" }}
          >
            <div style={{ display: "flex", gap: "1rem" }}>
              <DatePicker
                label="Pickup Date"
                value={pickupDate}
                onChange={handlePickupDateChange}
                inputVariant="standard"
                required
              />
              <DatePicker
                label="Dropoff Date"
                value={dropoffDate}
                onChange={handleDropoffDateChange}
                inputVariant="standard"
                required
              />
            </div>
          </LocalizationProvider>

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
          <FormControl sx={{ marginTop: "1rem" }} fullWidth>
            <InputLabel id="number-plate-label">Number Plate</InputLabel>
            <Select
              labelId="number-plate-label"
              id="number-plate"
              value={selectedNumberPlate}
              onChange={handleNumberPlateChange}
              required
            >
              {availableVehicles.map((vehicle) => (
                <MenuItem key={vehicle.numberPlate} value={vehicle.numberPlate}>
                  {vehicle.numberPlate}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedVehicle && (
            <div>
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
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
