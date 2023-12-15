import {useRef, useState} from "react";
import "./drag-and-drop-list.css";
import {DragAndDropTodoItem} from "../drag-and-drop-todo-item/DragAndDropTodoItem";
import {GhostItem} from "../ghost-item/GhostItem";

interface DragAndDropListProps {
  title: string
  listItems: Array<string>
  listId: number
  setListItems: (listItems: Array<string>) => void;
  onItemDropped?: (item: string, sourceListId: number, targetListId: number) => void;
}
interface Coordinates {
  x: number
  y: number
}

export function DragAndDropList(props: DragAndDropListProps) {
  const { title, listItems: items, setListItems: setItems, listId, onItemDropped } = props;

  const [dragStartIdx, setDragStartIdx] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [ghostPosition, setGhostPosition] = useState<Coordinates>({ x: 0, y: 0 });
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isOverDraggableArea, setIsOverDraggableArea] = useState(false);

  const droppableRef = useRef(null);

  function handleDragStart(e, id: string) {
    console.log(+id)
    setDragStartIdx(+id)
    setDraggedItem(items[+id]);
    setIsDragging(true);
    setGhostPosition({ x: e.clientX, y: e.clientY });
    e.dataTransfer.setData('text/plain', JSON.stringify({id, name: items[+id], listId}));

    const transparentImage = new Image();
    transparentImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // 1x1 transparent GIF
    e.dataTransfer.setDragImage(transparentImage, 0, 0);
  };

  function handleDrag(e) {
    setGhostPosition({ x: e.clientX, y: e.clientY });
  };

  function handleDragEnd() {
    setIsDragging(false);
    setDraggedItem(null);
  };

  function handleDragOver(e, index) {
    e.preventDefault();
    setHoverIndex(index);
    setIsOverDraggableArea(true);
  };

  function handleDrop(e) {
    const json = e.dataTransfer.getData('text/plain')
    const {id, name, listId: draggingItemsListId} = JSON.parse(json)

    if(draggingItemsListId === listId) {
      handleDropOnSameList(name, id)
    } else {
      handleDropOnDifferentList(name, +draggingItemsListId)
    }
  };

  function handleDropOnDifferentList(name: string, sourceId: number) {
    items.splice(hoverIndex, 0, name);
    setItems([...items])
    setIsDragging(false);
    setHoverIndex(null);

    if(onItemDropped) {
      if(sourceId === 1) onItemDropped(name, 1, 2);
      else onItemDropped(name, 2, 1);
    }
  }

  function handleDropOnSameList(name: string, id: string) {
    if(dragStartIdx < hoverIndex) {
      items.splice(+id, 1);
      items.splice(hoverIndex - 1, 0, name);
    } else {
      items.splice(+id, 1);
      items.splice(hoverIndex, 0, name);
    }
    setItems(items)
    setIsDragging(false);
    setHoverIndex(null);
  }

  function handleDragLeave() {
    setIsOverDraggableArea(false)
  }

  function itemClassName(index: number): string {
    if (index === items.length - 1) {
      return "last-item"
    }
    if (hoverIndex === index && isOverDraggableArea) {
      return 'item'
    } else {
      return 'item'
    }
  }

  return (
    <div className={'dragAndDropList'}>
      <h1>{title}</h1>
      <div ref={droppableRef}
           className='list'
           onDrop={(e) => handleDrop(e)}
           onDragOver={(e) => e.preventDefault()}
           onDragLeave={() => handleDragLeave()}
      >
        {items.map((item, index) => (
          <div
            key={index}
            draggable={index !== items.length - 1}
            onDragStart={(e) => handleDragStart(e, index)}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, index)}
          >
            {hoverIndex === index && isOverDraggableArea && <div className="drop-placeholder"></div>}
            <div className={itemClassName(index)}>
              <DragAndDropTodoItem classFn={(index) => itemClassName(index)} id={index} name={item}/>
            </div>
          </div>
        ))}
      </div>
      {isDragging && <GhostItem item={draggedItem} position={ghostPosition} />}
    </div>
  )
}