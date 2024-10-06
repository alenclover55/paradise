import Select from "react-select";
import "./CustomSelect.scss";
function CustomSelect() {
  const options = [
    { value: "public", label: "Публичный" },
    { value: "private", label: "Личный" },
  ];
  return (
    <Select
      classNamePrefix={"universal_select"}
      defaultValue={options[0]}
      options={options}
      placeholder={"Не выбран"}
    />
  );
}

export default CustomSelect;
