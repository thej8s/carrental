import React from "react";
import "./tabs.scss";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Notes() {
  const date = new Date().toISOString().slice(0, 10);

  return (
    <div className="tabs">
      <div className="notes-update">
        <div className="button">
          <Button
            component={Link}
            to="/edit-note"
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "lightgreen",
            }}
          >
            Edit
            <EditIcon
              style={{
                color: "white",
                fontSize: "inherit",
                borderRadius: "20%",
                // marginLeft: "5px",
              }}
            />
          </Button>
        </div>
        <div className="button">
          <Button
            component={Link}
            to="/delete-note"
            variant="contained"
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "red",
            }}
          >
            Delete
            <EditIcon
              style={{
                color: "white",
                fontSize: "inherit",
                borderRadius: "20%",
                // marginLeft: "5px",
              }}
            />
          </Button>
        </div>
      </div>

      <div className="box notes">
        <div className="note">
          <h4>Todays Note</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h5>Created On:{date}</h5>
        </div>
      </div>
    </div>
  );
}

export default Notes;
