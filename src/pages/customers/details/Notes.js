import React from "react";
import "./tabs.scss";
import EditIcon from "@mui/icons-material/Edit";

function Notes() {
  return (
    <div className="tabs">
      <div className="box">
        <div>
          <h4>Notes</h4>
        </div>
      </div>

      <div className="box-notes">
        <div className="note">
          <h4>
            Todays Note
            <EditIcon
              style={{
                color: "white",
                fontSize: "1rem",
                backgroundColor: "lightgreen",
                borderRadius: "20%",
                padding: "5px",
                marginLeft: "5px",
              }}
            />
          </h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <h6>2023-05-02</h6>
        </div>
      </div>
    </div>
  );
}

export default Notes;
