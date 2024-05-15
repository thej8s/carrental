import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "./addcustomer.scss"

export default function AddCustomer() {
  return (
    <Fragment>
      <form action="">
        <h1 className="heading ">Add Customer</h1>
        <div  className="car-form">
          <div  className="left customer">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              required
              name="name"
              fullWidth
              className="customer_textfield"

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
              className="customer_textfield"

              //   onChange={handleFileChange}
            />

            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="phone"
              className="customer_textfield"
              // onChange={}
            />

<TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="email"
              className="customer_textfield"
              // onChange={}
            />

<TextField
              id="outlined-basic"
              label="Address"
              multiline={true}
              rows={3}
              variant="outlined"
              size="large"
              fullWidth
              required
              name="address"
              className="customer_textfield"
              // onChange={onInputChange}
            />

            <TextField
              id="outlined-basic"
              label="License No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="license_no"
              className="customer_textfield"
              // onChange={}
            />



            <TextField
              id="outlined-basic"
              label="License Category"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="license_category"
              className="customer_textfield"
              // onChange={}
            />



<TextField
              id="outlined-basic"
              label="License Expiry Date"
              variant="outlined"
              size="small"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              name="license_expiry"
              className="customer_textfield"
              // onChange={onInputChange}
            />

            <TextField
              id="outlined-basic"
              label="License Issue Date"
              variant="outlined"
              size="small"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              name="license_issue"
              className="customer_textfield"
              // onChange={onInputChange}
            />

<TextField
              id="outlined-basic"
              label="Driving Experience"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="driving_experience"
              className="customer_textfield"
              // onChange={}
            />

<TextField
              id="outlined-basic"
              label="Passport No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="passport_no"
              className="customer_textfield"
              // onChange={}
            />



<TextField
              id="outlined-basic"
              label="Passport Expiry Date"
              variant="outlined"
              size="small"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              name="passport_expiry"
              className="customer_textfield"
              // onChange={onInputChange}
            />

            <TextField
              id="outlined-basic"
              label="Passport Issue Date"
              variant="outlined"
              size="small"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              name="passport_issue"
              className="customer_textfield"
              // onChange={onInputChange}
            />

<TextField
              id="outlined-basic"
              label="Company Name"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="company_name"
              className="customer_textfield"
              // onChange={}
            />

            <TextField
              id="outlined-basic"
              label="Company Reg. No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="company_reg_no"
              className="customer_textfield"
              // onChange={}
            />

<TextField
              id="outlined-basic"
              label="Account No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="account_no"
              className="customer_textfield"
              // onChange={}
            />


            <TextField
              id="outlined-basic"
              label="Bank Name"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="bank_name"
              className="customer_textfield"
              // onChange={}
            />
            <TextField
              id="outlined-basic"
              label="Bank Swift Code"
              variant="outlined"
              size="small"
              fullWidth
              required
              name="bank_swift_code"
              className="customer_textfield"
              // onChange={}
            />
            
<TextField
              id="outlined-basic"
              label="Emergency Contact No."
              variant="outlined"
              size="small"
              fullWidth
              required
              name="emergency_contact_no"
              className="customer_textfield"
              // onChange={}
            />



            <TextField
              id="outlined-basic"
              label="Date of Birth "
              variant="outlined"
              size="small"
              type="Date"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              required
              name="dob"
              className="customer_textfield"
              // onChange={onInputChange}
            />
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
