import React from "react";
import "../tiactac.css"

// const Square = ({ value, onClick }) => {
//   return (
//     <button className="square" onClick={onClick}>
//       
//     </button>
//   );
// };
const Square = ({ value, onClick }) => {
  <div className="square">
  return <button  onClick={onClick}>
   {value}
  </button>;

  </div>
};

export default Square;
