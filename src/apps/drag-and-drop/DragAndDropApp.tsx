import {DragAndDropList} from "../../components/drag-and-drop-list/DragAndDropList";
import "./drag-and-drop.css"
interface DragAndDropAppProps {

}

export function DragAndDropApp() {

  return (
      <div className={"dragAndDropApp"}>
         <DragAndDropList listItems={['item 1', 'item 2', 'item 3']} title={"List 1"} />
         <DragAndDropList listItems={['item 4', 'item 5', 'item 6']} title={"List 2"} />
      </div>
  )
}