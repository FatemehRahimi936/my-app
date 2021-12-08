import React from "react";
import { useLocation } from "react-router-dom";

function ImageDoctor() {
  const location = useLocation();

  // console.log("lllllllllllllllll", location.state.props._source.lname);

  return (
    <div className="div3">
      {/* <div style={{ flex: 4, alignItems: "center", justifyContent: "center" }}> */}
      <img className="image3" src={location.state.props} alt="Docters"></img>
      {/* <p>,kjbhugufutyfgyg</p> */}
    </div>
  );
}
export default ImageDoctor;
