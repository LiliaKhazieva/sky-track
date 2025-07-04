import styles from "./Filters.module.scss";

interface Props {
  options: { value: string; label: string }[];
  selectedValue: string;
  setSelectedValue: (e: string) => void;
}

export function Select({ options, selectedValue, setSelectedValue }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
