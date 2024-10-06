import { useState } from "react";

export default function InputField({ name, icon, label, onChangeAmount, value }) {
  const [isZero, setIsZero] = useState(false);
  const handleChange = (event) => {
    onChangeAmount(name, event.target.value);
    if (event.target.value == 0) {
      setIsZero(true);
    } else {
      setIsZero(false);
    }
  };

  return (
    <div id="input-field">
      <img id="input-icon" src={icon} />
      <div id="helper-div">
        <label>{label}</label>
        {isZero ? <span id="warning">Can't be zero</span> : undefined}
      </div>
      <input
        className={isZero ? "wrong-input" : undefined}
        onChange={handleChange}
        placeholder={0}
        value={value}
      />
    </div>
  );
}
