import Logo from "./assets/logo.svg";
import DollarIcon from "./assets/icon-dollar.svg";
import PersonIcon from "./assets/icon-person.svg";
import "./App.css";
import InputField from "./components/InputField";
import TipOptions from "./components/TipOptions";
import CalculatedTipBoard from "./components/CalculatedTipBoard";
import { useState } from "react";

const INPUT_NUMBERS = {
  bill: "",
  people: "",
  tip: "",
  customTip: "",
};

function App() {
  const [billVariables, setBillVariables] = useState(INPUT_NUMBERS);

  const handleChangeAmount = (field, newVal) => {
    setBillVariables((previousValues) => {
      if(field == "tip"){
        previousValues.customTip = ""
      }else if(field == "customTip"){
        previousValues.tip = ""
      }
      return {
        ...previousValues,
        [field]: newVal,
      };
    });
  };

  const handleReset = () => {
    setBillVariables(INPUT_NUMBERS);
  };

  return (
    <div id="app">
      <img id="logo" src={Logo} />

      <div id="calculator">
        <div id="calculator-inner">
          <InputField
            icon={DollarIcon}
            name="bill"
            label="Bill"
            onChangeAmount={handleChangeAmount}
            value={billVariables.bill}
          />
          <TipOptions
            onChangeAmount={handleChangeAmount}
            value={billVariables.customTip}
          />
          <InputField
            icon={PersonIcon}
            name="people"
            label="Number of people"
            onChangeAmount={handleChangeAmount}
            value={billVariables.people}
          />
        </div>

        <CalculatedTipBoard onReset={handleReset} values={billVariables} />
      </div>
    </div>
  );
}

export default App;
