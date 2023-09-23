import WipAlert from "./WipAlert";

const BioCard = () => {
  return (
    <div className="biocard">
      <div className="biocard-careerPage-note">
        <p>
          <b>Note: </b> 
          {/* I know this might look like a personal portfolio website, but I want
          this to represent who I am holistically, instead of just being an
          appealing online resume. As a result, this page will be less about my
          achievements and work and more about my personality and interests. */}
          This page is a representation of my personality and interests. 
        </p>
        {/* <br /> */}
        <br />
        <p>
          Interested in my career or work?
        </p>
        <p>Check out my</p>
        <button className="biocard-careerPageButton" onClick={() => setIsVisible(false)}>Dismiss</button>
        {/* <div className="wipAlert">
          <h1>Note: This website is a work in progress. <br /> <span>Much of what you see is unfinished!</span></h1>
          <button className="wipAlertButton" onClick={() => setIsVisible(false)}>Dismiss</button>
        </div> */}
      </div>
    </div>
  );
};

export default BioCard;

{
  /* <h1 className="biocard-heading">Career Summary</h1>
<hr />

<div className="biocard-section-spacing">
  <p>
    Hi there! I'm Mohit! I'm a 4<sup>th</sup> year Computer Engineering
    student at Georgia Tech. On paper, my concentrations are Distributed
    Systems &amp; Software Design and Cybersecurity &#40;you have to
    conform somehow right? {/*&#128531;}&#41; but my deepest interests
    lie at the intersection of Mixed Reality and Machine Learning. My goal
    is to create augmented reality glasses that can intelligently
    integrate information into our daily lives, without taking away focus
    from the physical world.
  </p>
  <br />
  <p>
    Until then though, I plan to gain as much knowledge about ML and XR as
    possible. Most recently, I've worked at Qualcomm as a Software
    Engineer Intern in the Graphics Research department, specifically on
    the AR/VR Hardware Architecture team. Before that, I interned at ADM,
    creating ML models to classify crops given raw satellite data. I've
    also done research in head-worn displays at the Contextual Computing
    Group, studying the effect of physical specs such as transparency,
    weight, and size while building small-scale software applications for
    niche use cases.
  </p>
</div>
<div>{/* INSERT 3D GLASSES HERE }</div>
<div>
  <h1 className="biocard-heading">Fun Facts</h1>
  <hr />
  <p>If you really want to learn about me, the bes</p>
</div> */
}
