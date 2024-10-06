import CalculatedField from "./CalculatedField";

const roundNumber = (num) => {
  return Math.round(num * 100) / 100;
};

export default function CalculatedTipBoard({ onReset, values }) {
  const { bill, people, tip } = { ...values };
  const [billNum, peopleNum, tipNum] = [+bill, +people, +tip / 100];

  let tipPerPerson, totalPerPerson, isActive;

  if (bill && people && tip) {
    tipPerPerson = roundNumber((billNum * tipNum) / peopleNum);
    totalPerPerson = roundNumber((billNum * (1 + tipNum)) / peopleNum);
    isActive = true;
  } else {
    tipPerPerson, (totalPerPerson = 0);
    isActive = false;
  }

  return (
    <div id="calculated-tip-div">
      <div id="calculated-tip-inner">
        <CalculatedField value={tipPerPerson} label="Tip Amount" />
        <CalculatedField value={totalPerPerson} label="Total" />
      </div>
      <button onClick={onReset} disabled={!isActive} id="reset-button">
        RESET
      </button>
    </div>
  );
}
