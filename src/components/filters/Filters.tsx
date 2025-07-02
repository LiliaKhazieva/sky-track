import React from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  setSelectedValue: (e: any) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedValue,
  setSelectedValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select value={selectedValue} onChange={handleChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
