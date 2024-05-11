import React, { Fragment } from "react";
import "./addcar.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddCar() {
  return (
    <Fragment>
      <form action="">
        <h1 className="heading">Add Car</h1>
        <div className="car-form">
          <div className="left">
            <TextField
              id="outlined-basic"
              label="Model"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="model"
              // onChange={}
            />

            <TextField
              id="outlined-basic"
              label="Photo"
              variant="outlined"
              size="small"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              // required
              name="photo"
              //   onChange={handleFileChange}
            />

            <TextField
              id="outlined-basic"
              label="Make"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="make"
              // onChange={}
            />
            <TextField
              id="outlined-basic"
              label="License No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="license_no"
              // onChange={}
            />

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Vehicle Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Vehicle Type"
                required
                name="vehicle_type"
                //   onChange={onInputChange}
              >
                <MenuItem value={"Compact"}>Compact</MenuItem>
                <MenuItem value={"Full Size"}>Full Size</MenuItem>
                <MenuItem value={"Mid Size"}>Mid Size</MenuItem>
                <MenuItem value={"Mini Van"}>Mini Van</MenuItem>
                <MenuItem value={"SUV"}>SUV</MenuItem>
                <MenuItem value={"Sedan"}>Sedan</MenuItem>
                <MenuItem value={"Luxury"}>Luxury</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">
                Transmission
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Transmission"
                required
                name="transmission"
                //   onChange={onInputChange}
              >
                <MenuItem value={"Automatic"}>Automatic</MenuItem>
                <MenuItem value={"Manual"}>Manual</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Current Odometer"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="current_odometer"
              // onChange={}
            />
          </div>

          <div className="right">
            {/* <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: "40ch",
              },
            }}
            noValidate
            autoComplete="off"
          > */}
            <TextField
              id="outlined-basic"
              label="Year"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="year"
              // onChange={}
            />

            <TextField
              id="outlined-basic"
              label="Rent Per Hour"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="rent_per_hour"
              // onChange={}
            />

            <TextField
              id="outlined-basic"
              label="Colour"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="colour"
              // onChange={}
            />

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Status"
                required
                name="status"
                //   onChange={onInputChange}
              >
                <MenuItem value={"Available"}>Available</MenuItem>
                <MenuItem value={"Unavailable"}>Unavailable</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel id="demo-simple-select-label">Fuel Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                label="Fuel Type"
                required
                name="fuel_type"
                //   onChange={onInputChange}
              >
                <MenuItem value={"Diesel"}>Diesel</MenuItem>
                <MenuItem value={"Petrol"}>Petrol</MenuItem>
                <MenuItem value={"Electric"}>Electric</MenuItem>
                <MenuItem value={"Gas"}>Gas</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Tank Size"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="tank_size"
              // onChange={}
            />

            <TextField
              id="outlined-basic"
              label="Insurance Company"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="insurance_company"
              // onChange={}
            />

            {/* </Box> */}
          </div>
        </div>
        <div className="submit-btn">
          <Button
            variant="contained"
            fullWidth
            style={{ textTransform: "none", fontSize: "1rem" }}
            type="submit"
          >
            Add
            {/* {submitBtn ? "Adding..." : "Add Car"} */}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
