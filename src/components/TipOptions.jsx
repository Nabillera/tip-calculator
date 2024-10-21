import { useState } from "react";

export default function TipOptions({ onChangeAmount, value }) {
  const setTips = [5, 10, 15, 25, 50];
  const [activeOption, setActiveOption] = useState();

  const handleTipOption = (key, amount, index) => {
    onChangeAmount(key, amount);
    setActiveOption(index);
  };

  return (
    <div id="tip-options-div">
      <p>Select Tip %</p>
      <div id="grid-container">
        {setTips.map((amount, index) => (
          <button
            className={`tip-option ${
              activeOption == index ? "active" : undefined
            }`}
            key={index}
            onClick={() => handleTipOption("tip", amount, index)}
          >
            {amount}%
          </button>
        ))}
        <input
          onChange={(e) => handleTipOption("customTip", e.target.value)}
          id="custom-tip-option"
          placeholder="Custom"
          maxLength={3}
          value={value}
        />
      </div>
    </div>
  );
}
