import "../App.css";
import * as React from "react";
import sideBack from "../img/sideBack.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import TextField from "@material-ui/core/TextField";
// import { productContext } from "./Context";
// import { Link } from "react-router-dom";

function Pardakht() {
  // const { destination, setDestination, price, setPrice } =
  //   React.useContext(productContext);
  return (
    <div className="App">
      <div className="container">
        <div
          className="frame"
          style={{ backgroundColor: "white", width: "400px", height: "480px" }}
        >
          <TextField
            sx={{ width: "300px", height: "50px", marginTop: "50px" }}
            placeholder=""
            label="لطفا کارت مقصد را وارد کنید"
            variant="outlined"
            type="number"
            // onChange={destination}
          />
          <TextField
            color="warning"
            sx={{ width: "300px", height: "50px", marginTop: "50px" }}
            placeholder=""
            label="لطفا مبلغ را وارد کنید"
            variant="outlined"
          />
          <nav>
            {/* <Link className="Button"> */}
            <Button
              sx={{
                width: "200px",
                height: "50px",
                marginTop: "100px",
                // backgroundColor: "red",
              }}
              className="Button"
              variant="contained"
              color="primary"
              type="number"
              // onChange={price}
            >
              انتقال
            </Button>
            {/* </Link> */}
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

export default Pardakht;
