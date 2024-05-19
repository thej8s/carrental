import React from "react";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import "./tabs.scss";

function Summary() {
  return (
    <div className="tabs">
      <div className="box summary">
        <div>
          <h4>
            <PriorityHighIcon /> Personal Information
          </h4>
        </div>
      </div>

      <div className="box summary">
        <div className="detail-item">
          <h4>Company Name</h4>
          <p>Tata Motors</p>
        </div>
        <div className="detail-item">
          <h4>Company Reg No.</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>License Category</h4>
          <p>-</p>
        </div>
      </div>

      <div className="box summary">
        <div className="detail-item">
          <h4>License No</h4>
          <p>Tata Motors</p>
        </div>
        <div className="detail-item">
          <h4>License Issue Date</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>License Expiry Date</h4>
          <p>-</p>
        </div>
      </div>

      <div className="box summary">
        <div className="detail-item">
          <h4>Passport No.</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Passport Issue Date</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Passport Expiry Date</h4>
          <p>-</p>
        </div>
      </div>

      <div className="box summary">
        <div className="detail-item">
          <h4>Account No.</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Bank Name</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Bank Swift Code</h4>
          <p>-</p>
        </div>
      </div>

      <div className="box summary">
        <div className="detail-item">
          <h4>Emergency Contact No.</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Date of Birth</h4>
          <p>-</p>
        </div>
        <div className="detail-item">
          <h4>Driving Experience</h4>
          <p>-</p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
