import { useEffect, useState } from "react";
import ArtListItem from "./ArtListItem";

const ArtList = () => {
  const [artworkData, setArtworkData] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((artworks) => {
        setArtworkData(artworks.data);
      });
  }, []);

  return (
    <ul className="art-list">
      {artworkData.map((artwork, index) => (
        <ArtListItem key={index} artwork={artwork} />
      ))}
    </ul>
  );
};

export default ArtList;
