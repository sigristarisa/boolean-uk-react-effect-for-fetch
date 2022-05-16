import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavouriteSlipsList";

const AdviceSection = () => {
  const [advice, setAdvice] = useState("");
  const [adviceList, setAdviceList] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((adviceData) => setAdvice(adviceData.slip.advice));
  }, [advice]);

  const getNewAdvice = () => setAdvice("");

  const saveFavoriteAdvice = () => setAdviceList([...adviceList, advice]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        advice={advice}
        getNewAdvice={getNewAdvice}
        saveFavoriteAdvice={saveFavoriteAdvice}
      />
      <FavoriteSlipsList adviceList={adviceList} />
    </section>
  );
};

export default AdviceSection;
