import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        );
        const result = await response.json();

        // Extract only the currency object
        if (result && result[currency]) {
          setData(result[currency]);
        } else {
          setData({});
        }
      } catch (error) {
        console.error("Error fetching currency data:", error);
        setData({});
      }
    };

    fetchCurrencyData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
