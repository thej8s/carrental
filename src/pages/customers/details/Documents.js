import React from "react";
import "./tabs.scss";

function Documents() {
  return (
    <div className="tabs">
      <div className="box-document">
        <div className="document">
          <h4>Driving License</h4>
          <img
            className="document-image"
            src="https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/dl.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Documents;
