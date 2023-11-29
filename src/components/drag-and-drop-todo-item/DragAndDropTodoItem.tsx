import "./DragAndDropTodoItem.css";
interface DragAndDropTodoItemProps {
  id: number
  name: string;
  classFn: (id: number) => string;
}

export function DragAndDropTodoItem(props: DragAndDropTodoItemProps) {
  const {id, name, classFn} = props;

  return (
    <div className={classFn(id)}>
      {id} {name}
    </div>
  )
}