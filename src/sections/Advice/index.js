import { useEffect, useState } from "react";

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
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <p>{advice}</p>
        <button onClick={() => getNewAdvice()}>Get More Advice</button>
        <button onClick={() => saveFavoriteAdvice()}>Save to Favourties</button>
      </section>
      <section className="favourtite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {adviceList.map((advice, index) => (
            <li key={index}>{advice}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default AdviceSection;
