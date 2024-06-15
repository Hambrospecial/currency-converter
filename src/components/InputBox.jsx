import { useId } from "react";
import styles from "./inputbox.module.css";

export default function InputBox({
  label,
  amount,
  selectedCurrency = "usd",
  onAmountChange,
  onCurrencyChange,
  amountDisabled = false,
  currencyDisabled = false,
  currencyOptions = [],
}) {
  return (
    <div className={styles.inputbox}>
      <div>
        <label>{label}</label>
        <input
          type="number"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          placeholder="0"
          disabled={amountDisabled}
        />
      </div>
      <div>
        <label>Currency Type</label>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
