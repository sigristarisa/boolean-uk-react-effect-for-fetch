const FavoriteSlipsList = ({ adviceList }) => {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {adviceList.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </section>
  );
};

export default FavoriteSlipsList;
