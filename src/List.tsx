import { ListItem } from "./App";
import {makeStyles} from 'tss-react'

interface ListProps {
  title: string;
  items: Array<ListItem>;
  handleCheck: (item: ListItem, checked: boolean) => void;
}

const useStyles = makeStyles()(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
  }
}))

function List({ title, items, handleCheck }: ListProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <h2 style={{ color: "red", textAlign: "center" }}>
        {title}
      </h2>
      <p style={{ textAlign: "center" }}>
        Number of items: {items.length}{" "}
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "solid 2px black",
          padding: "50px",
          borderRadius: "10%",
          height: 250,
          width: 250,
          overflow: 'scroll'
        }}
      >
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
