import { useState } from "react";
import TransferButtons from "../../components/transfer-list-buttons/TransferButtons";
import List from "../../components/transfer-list/List";
import {
  intersection,
  not,
} from "../../utils";
import { ListInput } from "../../components/list-input/ListInput";
import '../../App.css';

export type ListItem =  { 
  id: string; 
  name: string; 
};

const initialListItems: Array<ListItem> = [
  { id: "1", name: "item 1" },
  { id: "2", name: "item 2" },
]

function TransferListApp() {
  const [firstListItems, setFirstListItems] = useState<Array<ListItem>>(initialListItems);
  const [secondListItems, setSecondListItems] = useState<Array<ListItem>>([]);
  const [checkedItems, setChecktedItems] = useState<Array<ListItem>>([]);
  
  const leftCheckedItems = intersection(checkedItems, firstListItems);
  const rightCheckedItems = intersection(checkedItems, secondListItems);

  function handleCheck(item: ListItem, checked: boolean) {
    if (checked) {
      setChecktedItems((prev) => [...prev, item]);
    } else {
      setChecktedItems((prev) => prev.filter((prevItem) => prevItem.id !== item.id));
    }
  }

  function handleLeftMove() {
    setFirstListItems(firstListItems.concat(rightCheckedItems));
    setSecondListItems(not(secondListItems, rightCheckedItems));
    setChecktedItems(not(checkedItems, rightCheckedItems));
  }

  function handleRightMove() {
    setSecondListItems(secondListItems.concat(leftCheckedItems));
    setFirstListItems(not(firstListItems, leftCheckedItems));
    setChecktedItems(not(checkedItems, leftCheckedItems));
  }

  function handleAddToList(item: string) {
    setFirstListItems((prev) => [...prev, { name: item, id: crypto.randomUUID()}]);
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
        Title
      </h1>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <ListInput onAddToList={handleAddToList} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <List title="List 1" items={firstListItems} handleCheck={handleCheck} />
        <Break />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TransferButtons
            handleLeftMove={handleLeftMove}
            handleRightMove={handleRightMove}
          />
        </div>
        <Break />
        <List
          title="List 2"
          items={secondListItems}
          handleCheck={handleCheck}
        />
      </div>
    </>
  );
}

function Break() {
  return <div style={{ width: "50px" }} />;
}

export default TransferListApp;
