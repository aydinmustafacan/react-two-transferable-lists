import {useState} from "react";
import {TabItem} from "../tab-item/TabItem";
import './Tabs.css';
interface TabsProps {
  activeIdx: number
  setActiveIdx: (idx: number) => void
}

export function Tabs(props : TabsProps) {
  const {activeIdx, setActiveIdx} = props;

  return (
      <div className="tabs">
        <TabItem onClick={() => setActiveIdx(0)} title={"Transfer List"} isActive={activeIdx === 0}/>
        <TabItem onClick={() => setActiveIdx(1)} title={"Drag and Drop List"} isActive={activeIdx === 1}/>
        <TabItem onClick={() => setActiveIdx(2)} title={"Tic Tac Toe"} isActive={activeIdx === 2}/>
        <TabItem onClick={() => setActiveIdx(3)} title={"Checked Tree"} isActive={activeIdx === 3}/>
        <TabItem onClick={() => setActiveIdx(4)} title={"List with pagination"} isActive={activeIdx === 4}/>
        <TabItem onClick={() => setActiveIdx(5)} title={"Tiling Window Manager"} isActive={activeIdx === 5}/>
        <TabItem onClick={() => setActiveIdx(6)} title={"???"} isActive={activeIdx === 6}/>
      </div>
  )
}