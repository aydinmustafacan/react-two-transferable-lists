import { Fragment, useState } from "react";

function Item({ itemName, handleCheck }) {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input type="checkbox" onChange={handleCheck} />
      {itemName}
    </div>
  );
}

export default Item;
