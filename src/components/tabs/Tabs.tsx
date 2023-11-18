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
      </div>
  )
}