import { useEffect, useState } from "react";
import TransferButtons from "./TransferButtons";
import List from "./List";
import {
  calculateWordCount,
  debounce,
  intersection,
  not,
} from "./utils";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [currWordCount, setCurrWordCount] = useState(0);
  const [firstListItems, setFirstListItems] = useState([
    "one",
    "two",
    "three",
    "four",
  ]);
  const [secondListItems, setSecondListItems] = useState([]);

  const [checkedItems, setChecktedItems] = useState([]);
  const leftCheckedItems = intersection(checkedItems, firstListItems);
  const rightCheckedItems = intersection(checkedItems, secondListItems);

  function handleCheck(item) {
    const currIdx = checkedItems.indexOf(item);
    const checkedItemsToUpdate = [...checkedItems];

    if (currIdx === -1) {
      //does not found
      checkedItemsToUpdate.push(item);
    } else {
      checkedItemsToUpdate.splice(currIdx, 1);
    }

    setChecktedItems(checkedItemsToUpdate);
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

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleAddToList() {
    setFirstListItems([...firstListItems, inputValue]);
    setInputValue("");
  }

  const debouncedCalcWordCount = debounce(
    (text) => {
      const wordCount = calculateWordCount(text)
      setCurrWordCount(wordCount)
    }, 100)

  useEffect(
    function () {
      debouncedCalcWordCount(inputValue)
    },
    [inputValue],
  );

  return (
    <>
      <Title />
      <div style={{display: "flex", justifyContent: "center", marginBottom: "20px"}}>
        <input
          style={{ marginRight: "10px" }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <span style={{color: 'blue', marginRight: "10px"}}> Current Word Count : {currWordCount}</span>
        <button onClick={handleAddToList}> Add to list </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <List title="list 1" items={firstListItems} handleCheck={handleCheck} />
        <Break />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TransferButtons
            handleLeftMove={handleLeftMove}
            handleRightMove={handleRightMove}
          />
        </div>
        <Break />
        <List
          title="list 2"
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

function Title() {
  return (
    <h1
      style={{
        textAlign: "center",
        marginBottom: "50px",
        marginTop: "20px",
        fontFamily: "sans-serif",
      }}
    >
      Title
    </h1>
  );
}

export default App;
