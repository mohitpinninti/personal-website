const BioCard = () => {
  return (
    <div className="biocard">
      <p className="biocard-heading-1">Bio</p>
      <hr />
      <p>
        Hi there! I'm Mohit! I'm a 4<sup>th</sup> year Computer Engineering student at Georgia Tech. On paper,
         my concentrations are Distributed Systems &amp; Software Design and Cybersecurity 	&#40; you have to
         conform somehow right? {/*&#128531;*/}&#41; but my deepest interests lie at the intersection of Mixed
         Reality and Machine Learning. My goal is to create augmented reality glasses that can intelligently
         integrate information into our daily lives, without taking away focus from the physical world.
      </p>
      <br />
      <p>
        Until then though, I plan to gain as much knowledge about ML and XR as possible. Most recently, I've
        worked at Qualcomm as a Software Engineer Intern in the Graphics Research department, specifically on
        the AR/VR Hardware Architecture team. Before that, I interned at ADM, creating ML models to classify
        crops given raw satellite data. I've also done research in head-worn displays at the Contextual
        Computing Group, studying the effect of physical specs such as transparency, weight, and size while
        building small-scale software applications for individual use cases.
      </p>
    </div>
  );
};

export default BioCard;
