import { useEffect } from "react";
import { useState } from "react";

export default function useCurrencyInfo(curreny) {
  const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch(`https://open.er-api.com/v6/latest/${curreny.toUpperCase()}`)
  //       .then((res) => res.json)
  //       .then((res) => setData(res["rates"]));
  //   }, [curreny]);

  useEffect(() => {
    async function searchCurrencies() {
      const url = `https://open.er-api.com/v6/latest/${curreny.toUpperCase()}`;
      const res = await fetch(url);
      const data = await res.json();
      setData(data["rates"]);
    }
    searchCurrencies();
  }, [curreny]);

  return data;
}
