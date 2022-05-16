import { useEffect, useState } from "react";

const ArtsSection = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.data);
      });
  }, []);

  console.log(artworks);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ul className="art-list">
          {artworks.map((artwork, index) => (
            <li key={index}>
              <div className="frame">
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
                  alt=""
                />
                <h3>{artwork.title}</h3>
                <p>Artist: {artwork.artist_titles}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                  {artwork.term_titles.map((termTitle, index) => (
                    <li key={index}>
                      <p>{termTitle}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ArtsSection;
