const BioCard = ({ intro = [], sections = [] }) => {
  return (
    <div className="careerpage">
      {intro.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {sections.map((section) => (
        <div key={section.heading}>
          <h1>{section.heading}</h1>
          <hr />
          {(section.paragraphs ?? []).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BioCard;
