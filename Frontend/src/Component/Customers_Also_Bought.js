import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function AlsoBought() {
  return (
    <div className="Customers_Also_Bought">
      <div className="item_1">
        <FormGroup aria-label="position" row>
          <FormControl component="fieldset">
            <h1>"item 1"</h1>
            <h2>"price"</h2>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="ADD TO COMPARE"
              // labelPlacement="end"
            />
          </FormControl>
        </FormGroup>
      </div>
      <div className="item_2">
        <FormGroup aria-label="position" row>
          <FormControl component="fieldset">
            <h1>"item_2"</h1>
            <h2>"price"</h2>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="ADD TO COMPARE"
              // labelPlacement="end"
            />
          </FormControl>
        </FormGroup>
      </div>
      <div className="item_3">
        <FormGroup aria-label="position" row>
          <FormControl component="fieldset">
            <h1>"item_3"</h1>
            <h2>"price"</h2>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="ADD TO COMPARE"
              // labelPlacement="end"
            />
          </FormControl>
        </FormGroup>
      </div>
      <div className="item_4">
        <FormGroup aria-label="position" row>
          <FormControl component="fieldset">
            <h1>"item_4"</h1>
            <h2>"price"</h2>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="ADD TO COMPARE"
              // labelPlacement="end"
            />
          </FormControl>
        </FormGroup>
      </div>
    </div>
  );
}
