import "./ThreeBank.css";
import sideBack from "./img/sideBack.jpg";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div
          className="frame"
          style={{ backgroundColor: "white", width: "400px", height: "480px" }}
        >
          <TextField
            color="warning"
            style={{
              width: "300px",
              height: "50px",
              marginTop: "50px",
              borderColor: "blue",
              borderBlockColor: "blue",
            }}
            placeholder=""
            label="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
            variant="outlined"
          />

          <TextField
            style={{ width: "300px", height: "50px", marginTop: "50px" }}
            placeholder=""
            label=" مبلغ را وارد کنید"
            variant="outlined"
          />
          <p>hhhhhh</p>
          <Button
            style={{ width: "100px", height: "50px", marginTop: "100px" }}
            className="Button"
            variant="contained"
            color="primary"
          >
            انتقال
          </Button>
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

export default App;
