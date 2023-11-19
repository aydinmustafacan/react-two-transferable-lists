import {createPortal} from "react-dom";

interface GhostItemProps {
  item: string;
  position: { x: number; y: number };
}

export function GhostItem(props: GhostItemProps) {
  const {item, position} = props;

  return createPortal(
    <div style={{
      border: 'solid 2px magenta',
      borderRadius: '5px',
      color: 'blue',
      left: position.x,
      padding: '3px',
      pointerEvents: 'none',
      position: 'fixed',
      top: position.y
    }}>
      <strong>{item}</strong>
    </div>,
    document.body
  );
};