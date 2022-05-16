const AdviceSlip = ({ advice, getNewAdvice, saveFavoriteAdvice }) => {
  return (
    <section className="advice-slip">
      <h3>Some Advice</h3>
      <p>{advice}</p>
      <button onClick={() => getNewAdvice()}>Get More Advice</button>
      <button onClick={() => saveFavoriteAdvice()}>Save to Favourties</button>
    </section>
  );
};

export default AdviceSlip;
