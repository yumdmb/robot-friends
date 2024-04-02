import React from "react";

//chhilderen

//{{ }} is used to pass a javascript object, outer {} is to pass javascript, inner {} is to pass an object
//overflow
const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "600px",
      }}
    >
      {props.children}
    </div>
  );
  //return <h1> props.children </h1>; //this will return the word props.children
};

export default Scroll;
