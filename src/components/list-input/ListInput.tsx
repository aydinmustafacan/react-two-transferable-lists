import { ChangeEvent, useState } from "react";
import { calculateWordCount } from "../../utils";

interface ListInputProps {
  onAddToList: (item: string) => void;
}

export const ListInput = ({ onAddToList }: ListInputProps) => {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <p style={{ color: 'blue' }}> Current Word Count : {calculateWordCount(inputValue)}</p>
  
      <input
        style={{ marginRight: "10px" }}
        value={inputValue}
        onChange={handleInputChange}
      />
      {/* Todo: Add debounce */}
      <button onClick={() => onAddToList(inputValue)}> Add to list </button>
    </div>
  )
};
