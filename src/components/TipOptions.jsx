export default function TipOptions({ onChangeAmount, value }) {
  const setTips = [5, 10, 15, 25, 50];
  const handleTipAmount = (amount) => {
    onChangeAmount("tip", amount);
  };

  return (
    <div style={{ margin: "32px 8px 32px 8px" }}>
      <p>Select Tip %</p>
      <div id="grid-container">
        {setTips.map((amount, index) => (
          <button
            className="tip-option"
            key={index}
            onClick={() => handleTipAmount(amount)}
          >
            {amount}%
          </button>
        ))}
        <input
          onChange={(e) => handleTipAmount(e.target.value)}
          id="custom-tip-option"
          placeholder="Custom"
          maxLength={3}
          value={value}
        />
      </div>
    </div>
  );
}
