import {DragAndDropList} from "../../components/drag-and-drop-list/DragAndDropList";
import "./drag-and-drop.css"
import {useState} from "react";


export function DragAndDropApp() {
  const [listOneItems, setListOneItems] = useState<Array<string>>(['item 1', 'item 2', 'item 3', '--']);
  const [listTwoItems, setListTwoItems] = useState<Array<string>>(['item 4', 'item 5', 'item 6', '--']);

  function onItemDropped(item: string, sourceListId: number, targetListId: number) {
    if (sourceListId === targetListId) return

    if (sourceListId === 1 && targetListId === 2) {
      setListOneItems(listOneItems.filter(i => i !== item));
    } else if (sourceListId === 2 && targetListId === 1) {
      setListTwoItems(listTwoItems.filter(i => i !== item));
    }
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
        Drag and Drop List App
      </h1>
      <div className={"dragAndDropApp"}>
        <DragAndDropList listId={1}
                         listItems={listOneItems}
                         setListItems={setListOneItems}
                         title={"List 1"}
                         onItemDropped={onItemDropped}
        />
        <DragAndDropList listId={2}
                         listItems={listTwoItems}
                         setListItems={setListTwoItems}
                         title={"List 2"}
                         onItemDropped={onItemDropped}
        />
      </div>
    </>
  )
}
