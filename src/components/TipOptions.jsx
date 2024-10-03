export default function TipOptions() {
  const setTips = [5, 10, 15, 25, 50];
  return (
    <div>
      <p>Select Tip %</p>
      <div>
        {setTips.map((amount) => (
          <button className="tip-option">{amount}%</button>
        ))}
      </div>
    </div>
  );
}
