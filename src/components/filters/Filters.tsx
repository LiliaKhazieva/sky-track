import { useState } from "react";
import styles from "./Filters.module.scss";
import { ChevronDown } from "lucide-react";

interface Props {
  options: string[];
  selectedValue: string | null;
  setSelectedValue: (e: string) => void;
}

export function Select({ options, selectedValue, setSelectedValue }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.selected} onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedValue}</span>
        <ChevronDown />
      </div>
      {isOpen && (
        <ul
          className={
            selectedValue
              ? `${styles.select} ${styles.show}`
              : `${styles.select}`
          }
        >
          {options.map((option, i) => (
            <li key={i} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
