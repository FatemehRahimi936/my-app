import React, { useState } from "react";
import "../css/Todolist.css";
import Counter from "../component/counter";

const Todolist = () => {
  const [currenItem, setCurrenItem] = useState("");
  const [itemList, updateItemlist] = useState([]);
  const [price, setprice] = useState();
  let myprice = parseInt(price);
  //   const [sum, setSum] = useState(0);
  //   const [run, setRun] = useState(0);

  const addItemToList = () => {
    const product = { title: currenItem, price: myprice };
    let temp = [...itemList];
    temp.push(product);
    updateItemlist(temp);
    // setSum(sum + 1);
    // setRun(run + myprice);

    // setTotalprice(TotalPrice + priceNumber);
    // setCurrenItem('');
    // setprice('');
  };
  //   const calcsum = (value, opration, index) => {
  //     if (opration == '+') {
  //       setSum(sum + value);
  //       setRun(run + itemList[index].price);

  //       // setTotalprice(TotalPrice + priceNumber);
  //       // SUM = SUM + value;
  //     } else {
  //       setSum(sum - value);
  //       setRun(run - itemList[index].price);
  //       //   setTotalprice(TotalPricex - priceNumber);
  //       // }
  //     }
  //   };

  // const calcprice = (myprice, opration, count) => {
  //   if (opration == '+' && run > 0 && count > 0) {
  //     setRun(run + myprice);
  //     setRun(RUN + 1);
  //   } else if (run > 0 && count > 0) {
  //     setRun(run - myprice);
  //     setRun(Run + 1);
  //   }
  // };

  // const defalt = value => {
  //   RUN = RUN + value;
  //   setRun(RUN);
  // };
  // const defalt = value => {
  //   SUM(SUM + value);
  //   setSum(SUM);
  // };

  // const calPrice =() =>{
  //   setRun(run+)
  //   setTotalprice
  // }

  /* <Count
        index={index}
        myprice={item.price}
        // defalt={defalt}
        // calcprice={calcprice}
        calcsum={calcsum}
      /> */

  return (
    <div className="container">
      <header className="header"></header>
      <body className="body">
        {itemList.map((item, index) => {
          return (
            <div className="cart">
              {console.log("kalaaa2222", item.title)}
              <div className="divcart">
                <p>
                  {console.log("kalaaa", item.title)}
                  {item.title}
                </p>
                <p>
                  {console.log("kalaaa", item.price)}
                  {item.price}
                </p>
                <Counter />
              </div>
            </div>
          );
        })}

        {/* <p>sum:{sum}</p>
      <p>TotalPrice:{run}</p> */}

        <div className="divinput">
          <div>
            <input
              className="input"
              type="text"
              onChange={(e) => {
                setCurrenItem(e.target.value);
              }}
              placeholder={"please Enter Text"}
            />
            <input
              className="input"
              type="tel"
              onChange={(e) => {
                setprice(e.target.value);
              }}
              placeholder={"please Enter price"}
            />
          </div>
          <button className="touch" onClick={addItemToList}>
            <p style={{ textAlign: "center" }}>Add</p>
          </button>
        </div>
      </body>
    </div>
  );
};

export default Todolist;
