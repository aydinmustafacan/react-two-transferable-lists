import {createPortal} from "react-dom";

interface GhostItemProps {
  item: string;
  position: { x: number; y: number };
}

export function GhostItem(props: GhostItemProps) {
  const {item, position} = props;

  return createPortal(
    <div style={{ color: 'blue', position: 'fixed', left: position.x, top: position.y, pointerEvents: 'none' }}>
      {item}
    </div>,
    document.body
  );
};