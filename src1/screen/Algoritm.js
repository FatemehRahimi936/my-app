// import React from "react";
import "../css/Algoritm.css";
// hesab kardan miyangiiin/////////////////////////////////////////////////////////////////////////////////
// function App() {
//   let Array = [10, 15, 65];
// let sum = 0;
// for (const mark of Array) {
//   sum = sum + mark;
// }
// let avg = sum / Array.length;
// return (
//   <div className="container">
//     <p>Hellow Words!</p>
//     <p>{avg}</p>
//     {console.log("Miyaangiiiiinnnnnnn", avg)}
//   </div>
// );
//   let sum = 0;
//   for (let i = 0; i < Array.length; i++) {
//     sum = sum + Array[i];
//   }
//   let avg = sum / Array.length;
//   return (
//     <div className="container">
//       <p>Hellow Words!</p>
//       <p>{avg}</p>
//       {console.log("Miyaangiiiiinnnnnnn", avg)}
//     </div>
//   );
// }
// export default App;
// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// Moratab Saziii
function Sort() {
  const Array = [23, 56, 12, 8, 3, 62];

  for (let i = 0; i < Array.length; i++) {
    for (let j = 0; j < Array.length; j++) {
      if (Array[i] > Array[j]) {
        let temp = Array[i];
        Array[i] = Array[j];
        Array[j] = temp;
        // console.log("jjjjjjjjjjjjjjj", temp);
      }
    }
  }
  for (let k = 0; k < Array.length; k++) {
    // return (
    //   <div className="container">
    //     <p>Hellow Words!</p>
    //     <p>{Array[k]}</p>
    {
      console.log("Arraaaaaaaaaay", Array[k]);
    }
    //   </div>
    // );
  }
}
export default Sort;
// //////////////////////////////////////////////////////////////////////////////////////////////////////////
// function Mosalas() {
//   const a = [1, 2, 4];

//   if (a[0] + a[1] > a[2] && a[1] + a[2] > a[0] && a[0] + a[2] > a[1]) {
//     console.log("YES");
//   } else {
//     console.log("NO");
//   }
// }
// export default Mosalas;
