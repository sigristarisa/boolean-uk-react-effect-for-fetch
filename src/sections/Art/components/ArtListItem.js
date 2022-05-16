import SubjectList from "./SubjectList";

const ArtListItem = ({ artwork }) => {
  return (
    <li>
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
            <SubjectList key={index} termTitle={termTitle} />
          ))}
        </ul>
      </div>
    </li>
  );
};

export default ArtListItem;
