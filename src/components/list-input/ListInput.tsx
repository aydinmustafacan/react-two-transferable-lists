import {ChangeEvent, useEffect, useState} from "react";
import {calculateWordCount, debounce} from "../../utils";

interface ListInputProps {
  onAddToList: (item: string) => void;
}

export const ListInput = ({ onAddToList }: ListInputProps) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [currWordCount, setCurrWordCount] = useState<number>(0);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }

  const debouncedCalcWordCount = debounce((text) => {
    const wordCount = calculateWordCount(text);
    setCurrWordCount(wordCount);
  }, 100);

  useEffect(() => {
    debouncedCalcWordCount(inputValue);
  }, [inputValue]);

  return (
    <div>
      <p style={{ color: 'blue' }}> Current Word Count : {currWordCount}</p>
  
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
