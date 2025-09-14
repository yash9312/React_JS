import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "inr",
  isDisabled = false,
  currencyDisabled = false,
  className = ""
}) {
  const amountId = useId();

  return (
    <div
      className={`bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 p-5 rounded-2xl shadow-lg text-sm flex gap-6 border border-blue-100 transition-all duration-300 hover:shadow-xl ${className}`}
    >
      {/* Amount Input */}
      <div className="w-1/2">
        <label
          htmlFor={amountId}
          className="text-blue-800 font-semibold mb-2 inline-block tracking-wide"
        >
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          placeholder="Amount"
          disabled={isDisabled} // Fixed here
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="outline-none w-full bg-white py-2.5 px-3.5 rounded-lg border border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-gray-800 placeholder-gray-400 transition duration-200 shadow-sm hover:border-blue-300"
        />
      </div>

      {/* Currency Dropdown */}
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-blue-800 font-semibold mb-2 w-full tracking-wide">
          Currency Type
        </p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
          className="
            w-44
            rounded-lg
            px-3
            py-2.5
            bg-white
            border
            border-blue-200
            text-gray-800
            cursor-pointer
            outline-none
            shadow-sm
            transition-all
            duration-200
            ease-in-out
            hover:border-blue-300
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200
          "
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
