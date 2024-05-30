import React, { Fragment, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./editcustomer.scss";

export default function EditCustomer() {
  const [name, setName] = useState("Thejas");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <Fragment>
      <form action="">
        <h1 className="heading">Edit Customer</h1>
        <div className="edit-form">
          {/* <div className="left"> */}

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            size="small"
            fullWidth
            required
            name="name"
            // value={name}
            onChange={handleNameChange}
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
            label="Phone"
            variant="outlined"
            size="small"
            fullWidth
            required
            name="phone"
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
            // onChange={}
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
            // onChange={onInputChange}
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
            // onChange={onInputChange}
          />

          <TextField
            id="outlined-basic"
            label="ID or Passport No."
            variant="outlined"
            size="small"
            fullWidth
            required
            name="passport_no"
            // onChange={}
          />

          <TextField
            id="outlined-basic"
            label="ID or Passport Front"
            variant="outlined"
            size="small"
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            // required
            name="id_passport_front"
            className="customer_textfield"

            //   onChange={handleFileChange}
          />

          <TextField
            id="outlined-basic"
            label="ID or Passport Back"
            variant="outlined"
            size="small"
            type="file"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            // required
            name="id_passport_back"
            className="customer_textfield"

            //   onChange={handleFileChange}
          />

          <TextField
            id="outlined-basic"
            label="ID or Passport Expiry Date"
            variant="outlined"
            size="small"
            type="Date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            required
            name="passport_expiry"
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
            // onChange={}
          />

          {/* <TextField
            id="outlined-basic"
            label="Company Reg. No."
            variant="outlined"
            size="small"
            fullWidth
            required
            name="company_reg_no"
            // onChange={}
          /> */}

          <TextField
            id="outlined-basic"
            label="Bank Name"
            variant="outlined"
            size="small"
            fullWidth
            required
            name="bank_name"
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
            // onChange={onInputChange}
          />
          {/* </div>

          <div className="right"> */}
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

          {/* <TextField
            id="outlined-basic"
            label="Company Name"
            variant="outlined"
            size="small"
            fullWidth
            required
            name="company_name"
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
            // onChange={}
          /> */}

          {/* </Box> */}
          {/* </div> */}
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
