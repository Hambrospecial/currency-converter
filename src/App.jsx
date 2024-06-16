import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("usd");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    const tempAmount = amount;
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  const currencyInfo = useCurrencyInfo(selectedCurrency);
  const currencyOptions = Object.keys(currencyInfo);
  const convert = () => {
    if (fromCurrency === toCurrency) setConvertedAmount(amount);
    else setConvertedAmount(amount * currencyInfo[toCurrency]);
  };

  return (
    <div className="app-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="input-container">
          <InputBox
            label="From"
            amount={amount}
            selectedCurrency={fromCurrency}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={setFromCurrency}
            currencyOptions={currencyOptions}
          />
          <button
            type="button"
            className="swap-button"
            onClick={swapCurrencies}
          >
            ↔
          </button>
          <InputBox
            label="To"
            amount={convertedAmount}
            selectedCurrency={toCurrency}
            onCurrencyChange={setToCurrency}
            currencyOptions={currencyOptions}
            amountDisabled
          />
        </div>
        <button type="submit" className="convert-button">
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </form>
    </div>
  );
}

export default App;
