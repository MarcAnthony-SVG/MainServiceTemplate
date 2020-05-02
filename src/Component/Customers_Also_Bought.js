import React from "react";
import "../App.css";

export default function AlsoBought() {
  return (
    <div className="OuterBox">
      <div className="ItemBox">
        <img
          className="Image"
          src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
        ></img>
        <h5 className="ItemName">
          HengRunXin Protective Mask for Daily Use -50 pcs/box
        </h5>
        <h6 className="Price">$29.99</h6>
        <input type="checkbox"></input>
        <span className="">ADD TO COMPARE</span>
      </div>
      <div className="ItemBox">
        <img
          className="Image"
          src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
        ></img>
        <h5 className="ItemName">
          LEMI Disposable Protective Mask -50 pcs / box
        </h5>
        <h6 className="Price">$29.99</h6>
        <input type="checkbox"></input>
        <span className="">ADD TO COMPARE</span>
      </div>
      <div className="ItemBox">
        <img
          className="Image"
          src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
        ></img>
        <h5 className="ItemName">PURELL Soup, Purell, 1500ml, Clr 856104</h5>
        <h6 className="Price">$23.99</h6>
        <input type="checkbox"></input>
        <span className="">ADD TO COMPARE</span>
      </div>
      <div className="ItemBox">
        <img
          className="Image"
          src="https://recommendedforyou.s3.us-east-2.amazonaws.com/Img_1.jpg"
        ></img>
        <h5 className="ItemName">
          50 pcs Pack Disposable Mask 3-layer Protective Mask Tie-on
          Earloop/Elastic
        </h5>
        <h6 className="Price">$33.49</h6>
        <input type="checkbox"></input>
        <span className="">ADD TO COMPARE</span>
      </div>
    </div>
  );
}
