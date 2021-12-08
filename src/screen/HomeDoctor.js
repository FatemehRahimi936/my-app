import "../css/DoctorList.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function HomeDoctor() {
  const [data, setData] = useState([]);
  const num = "salam";
  const doctorList = async () => {
    try {
      const response = await fetch(
        "https://www.tebinja.com/api/v1/doctors/searchi"
      );
      const json = await response.json();
      setData(json.doctors.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    doctorList();
  }, []);

  return (
    <div className="HomeDoctor">
      {data.map((item, index) => {
        return (
          <nav>
            <Link
              to={`DetailDoctor/${item._source.fname}`}
              state={{ props: item, num: num }}
            >
              <div className="kart">
                <p className="text">نام:{item._source.fname}</p>
                <p className="text">نام خانوادگی:{item._source.lname}</p>
                <img
                  src={
                    "https://www.tebinja.com/img/uploads/doctors/thumbnails/" +
                    item._source.url
                  }
                  alt="doctor"
                  className="image"
                ></img>
              </div>
            </Link>
          </nav>
        );
      })}
    </div>
  );
}
export default HomeDoctor;
