import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const fromCurrencyInfo = useCurrencyInfo(fromCurrency);

  // Conversion function
  const convert = () => {
  if (amount <= 0) return;

  if (fromCurrencyInfo && fromCurrencyInfo[toCurrency]) {
    const rate = fromCurrencyInfo[toCurrency];
    const result = amount * rate;

    // Round to 4 decimal places
    setConvertedAmount(Number(result.toFixed(4)));
  } else {
    setConvertedAmount(0);
  }
};


  // Swap currencies
  const swap = () => {
    const tempFrom = fromCurrency;
    const tempTo = toCurrency;
    const tempAmount = amount;
    const tempConverted = convertedAmount;

    setFromCurrency(tempTo);
    setToCurrency(tempFrom);
    setAmount(tempConverted);
    setConvertedAmount(tempAmount);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-white/30 shadow-2xl rounded-2xl p-8 backdrop-blur-lg bg-white/40 hover:bg-white/50 transition-all duration-300">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Currency */}
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={setAmount}
                onCurrencyChange={setFromCurrency}
                currencyOptions={
                  Object.keys(fromCurrencyInfo).length > 0
                    ? Object.keys(fromCurrencyInfo)
                    : ["usd", "inr", "eur"]
                }
                selectedCurrency={fromCurrency}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5 my-8">
              <button
                type="button"
                onClick={swap}
                className="
                  absolute left-1/2 -translate-x-1/2 -translate-y-1/2
                  border-2 border-blue-500
                  rounded-full
                  bg-gradient-to-r from-blue-500 to-blue-700
                  text-white
                  px-5 py-2
                  shadow-xl
                  hover:scale-110
                  active:scale-95
                  transition-transform duration-200
                "
              >
                Swap
              </button>
            </div>

            {/* To Currency */}
            <div className="w-full mt-4 mb-8">
              <InputBox
                label="To"
                amount={convertedAmount}
                onAmountChange={setConvertedAmount}
                onCurrencyChange={setToCurrency}
                currencyOptions={
                  Object.keys(fromCurrencyInfo).length > 0
                    ? Object.keys(fromCurrencyInfo)
                    : ["usd", "inr", "eur"]
                }
                selectedCurrency={toCurrency}
                isDisabled={true} // Fixed prop
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="
                w-full
                bg-gradient-to-r from-blue-500 to-blue-700
                text-white
                px-6 py-3
                rounded-xl
                font-semibold
                shadow-lg
                hover:shadow-xl
                hover:from-blue-600 hover:to-blue-800
                active:scale-95
                transition-all duration-200
              "
            >
              Convert {amount} {fromCurrency.toUpperCase()} to{" "}
              {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
