import "../css/contentscreen.css";
import * as React from "react";
import Button from "@mui/material/Button";
const ContentScreen = (props) => {
  return (
    <>
      <div className="screenContainer">
        <div className="screenElement">
          <table>
            <tr>
              <th>Units</th>
              <th>Items</th>
              <th>Calories</th>
            </tr>
            <tr>
              <td>2</td>
              <td>Banana</td>
              <td>200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Egg(Omelet)</td>
              <td>200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Coldrink</td>
              <td>200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Egg(Omelet)</td>
              <td>200</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Egg(Omelet)</td>
              <td>200</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="buttonContainer">
        <Button sx={{ background: "#24DC2F" }}>Taken</Button>
        <Button sx={{ background: "#D42525" }}>Not Taken</Button>
        <Button sx={{ background: "#25D4B5" }}>About to</Button>
      </div>
    </>
  );
};
export default ContentScreen;
