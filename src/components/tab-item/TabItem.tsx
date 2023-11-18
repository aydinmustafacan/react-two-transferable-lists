import './TabItem.css';

interface TabItemProps {
  title: string
  isActive: boolean
  onClick: () => void
}

export function TabItem(props: TabItemProps) {
  const { title, isActive, onClick } = props;

  const tabClassName = isActive ? "tabitem active" : "tabitem";
  console.log(isActive)

  return (
      <div className={tabClassName} onClick={onClick}> {title} </div>
  )
}