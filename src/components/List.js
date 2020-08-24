import React from "react";
import list_items from "../List_Items";
import Items from "./Items";

function List() {
  return (
    <div className="list">
      {list_items.map((item) => (
        <div className="kind">
          <h2 className="list_title">{item.kind}</h2>
          <ul>
            <Items product={item.products} />
          </ul>
        </div>
      ))}
    </div>
  );
}

export default List;
