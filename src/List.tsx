import { ListItem } from "./App";
import "./List.css";

interface ListProps {
  title: string;
  items: Array<ListItem>;
  handleCheck: (item: ListItem, checked: boolean) => void;
}

function List({ title, items, handleCheck }: ListProps) {

  return (
    <div className="container">
      <h2 style={{ color: "red", textAlign: "center" }}>
        {title}
      </h2>
      <p style={{ textAlign: "center" }}>
        Number of items: {items.length}{" "}
      </p>
      <div className="myDiv">
        {items.map((item) => (
          <div key={item.id} style={{ display: 'flex', gap: '8px' }}>
            <input type="checkbox" onChange={(event) => handleCheck(item, event.target.checked)} />
            <p>
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  // show number of items in the list visually
}

export default List;
