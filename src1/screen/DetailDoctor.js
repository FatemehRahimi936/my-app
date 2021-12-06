import "../css/DoctorList.css";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function DetailDoctor({ match }) {
  const location = useLocation();

  console.log(match);
  console.log("iiiiiiiiiiii", location.state.props._source.fname);

  return (
    <div>
      {/* <div style={{ flex: 4, alignItems: "center", justifyContent: "center" }}> */}

      <nav>
        <Link
          to={"/ImageDoctor"}
          state={{
            props:
              "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
              location.state.props._source.url,
          }}
        >
          <img
            className="image2"
            src={
              "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
              location.state.props._source.url
            }
            alt="Docters"
          ></img>
        </Link>
      </nav>

      {/* </div> */}
      {/* <div style={{ flex: 6, alignItems: "flex-end" }}> */}
      <p>نام:{location.state.props._source.fname}</p>

      <p>نام خانوادگی:{location.state.props._source.lname}</p>
      <p>کد پزشکی:{location.state.props._id}</p>
      <p>تخصص:{location.state.props._source.spUnis[0].specialty.name}</p>
      <p>تخصص:{location.state.num}</p>
      {/* </div> */}
    </div>
  );
}
export default DetailDoctor;
