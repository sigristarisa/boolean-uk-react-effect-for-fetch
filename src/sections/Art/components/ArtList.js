import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

const ArtList = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        setArtworks(data.data);
      });
  }, []);

  return (
    <ul className="art-list">
      {artworks.map((artwork, index) => (
        <ArtListItem key={index} artwork={artwork} />
      ))}
    </ul>
  );
};

export default ArtList;
