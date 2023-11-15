import Item from "./Item";

function List({ title, items, handleCheck }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          border: "solid 2px black",
          padding: "50px",
          borderRadius: "10%",
        }}
      >
        {items.map((item) => {
          return (
            <Item
              itemName={item}
              key={item}
              handleCheck={() => handleCheck(item)}
            />
          );
        })}
      </div>
      <h1 style={{ fontSize: "14px", color: "red", textAlign: "center" }}>
        {title}
      </h1>
      <p style={{ textAlign: "center", margin: "0px" }}>
        Number of items : {items.length}{" "}
      </p>
    </div>
  );
  // show number of items in the list visually
}

export default List;
