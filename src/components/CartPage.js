import "../App.css";
import sideBack from "../img/sideBack.jpg";
import cart from "../img/cart2.jpg";
import { useState } from "react";
import Button from "@material-ui/core/Button";
import { productContext } from "./Context";

import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
function CartPage() {
  const letter1 = [];
  const letter2 = [];
  const letter3 = [];
  const letter4 = [];
  let text = "6395991167777259";
  for (let i = 0; i < 4; i++) {
    letter1[i] = text.charAt(i);
  }
  for (let i = 4; i < 8; i++) {
    letter2[i] = text.charAt(i);
  }
  for (let i = 8; i < 12; i++) {
    letter3[i] = text.charAt(i);
  }
  for (let i = 12; i < 17; i++) {
    letter4[i] = text.charAt(i);
  }
  return (
    <div className="CartPage">
      <div className="container">
        <div
          className="frame"
          style={{ backgroundColor: "white", width: "400px", height: "480px" }}
        >
          <div
            classname="cart"
            style={{
              backgroundImage: `url(${cart})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              width: "300px",
              height: "170px",
              marginTop: "40px",
            }}
          >
            <p className="cartNumber1">{letter1}</p>
            <p className="cartNumber2">{letter2}</p>
            <p className="cartNumber3">{letter3}</p>
            <p className="cartNumber4">{letter4}</p>
            <p className="expire">تاریخ انقضا : 04/02 </p>
            <p className="cvv2">CVV2 : 1845 </p>
          </div>

          <nav>
            <Link to="/Pardakht">
              <Button
                style={{ width: "100px", height: "50px", marginTop: "100px" }}
                className="Button"
                variant="contained"
                color="primary"
              >
                مرحله بعد
              </Button>
            </Link>
          </nav>
        </div>

        <div
          classname="image"
          style={{
            backgroundImage: `url(${sideBack})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "400px",
            height: "500px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default CartPage;
