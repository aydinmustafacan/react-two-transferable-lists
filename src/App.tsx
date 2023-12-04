import React, {useState} from "react";
import './App.css';
import {Tabs} from "./components/tabs/Tabs";
import TransferListApp from "./apps/transfer-list/TransferListApp";
import {DragAndDropList} from "./components/drag-and-drop-list/DragAndDropList";
import {DragAndDropApp} from "./apps/drag-and-drop/DragAndDropApp";
import {TicTacToeApp} from "./apps/tic-tac-toe/TicTacToeApp";


const tabComponents: Record<number, React.FC> = {
  0: TransferListApp,
  1: DragAndDropApp,
  2: TicTacToeApp,
  3: TicTacToeApp,
  4: TicTacToeApp,
};


function App() {
  const [activeIdx, setActiveIdx] = useState<number>(0)
  const ActiveComponent = tabComponents[activeIdx];

  return (
    <div>
      <h1 style={{textAlign:"center"}}> Practice App </h1>
      <Tabs activeIdx={activeIdx} setActiveIdx={setActiveIdx}/>
      {ActiveComponent && <ActiveComponent />}
    </div>
  )
}

export default App;