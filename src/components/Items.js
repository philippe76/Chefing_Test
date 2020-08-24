import React from "react";
import list_items from "../List_Items";

function Items(props) {
  return (
    <>
      {props.product.map((item) => (
        <li>{item}</li>
      ))}
    </>
  );
}

export default Items;
