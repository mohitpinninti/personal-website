import Skill from "./Skill";

const CareerCard = () => {
  //TODO: Offload these variables into a backend
  const languages = [
    "Java",
    "C",
    "C++",
    "Python",
    "Dart",
    "JavaScript",
    "HTML",
    "CSS",
    "C#",
    "x86",
    "MIPS",
    "VHDL",
    "Verilog",
  ];

  const toolsTech = [
    "Git",
    "TensorFlow",
    "PyTorch",
    "Flutter",
    "AWS",
    "OpenGL",
    "Firebase",
    "Azure",
    "FPGAs",
    "Unity",
    "Docker",
  ];

  const interests = [
    "Mixed Reality",
    "Machine Learning",
    "Cloud Architecture",
    "GPGPU",
  ];

  return (
    <div className="careercard">
      <h1 className="careercard-heading-2">Career Summary</h1>
      <hr />

      <div className="careercard-section-spacing">
        <p>
          Hi there! I'm Mohit! I'm a 4<sup>th</sup> year Computer Engineering
          student at Georgia Tech. On paper, my concentrations are Distributed
          Systems &amp; Software Design and Cybersecurity &#40;you have to
          conform somehow right? {/*&#128531;*/}&#41; but my deepest interests
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
      <div>{/* INSERT 3D GLASSES HERE */}</div>
      <div>
        <h1 className="careercard-heading-1">Skills</h1>
        {/* <hr /> */}

        <ul>
          <h3 className="careercard-heading-3">Languages</h3>
          <hr className="skills-hr"/>
          {languages.map((language) => (
            <Skill text={language} />
          ))}

          <h3 className="careercard-heading-3">Tools and Technologies</h3>
          <hr className="skills-hr"/>
          {toolsTech.map((tool) => (
            <Skill text={tool} />
          ))}

          <h3 className="careercard-heading-3">Interests</h3>
          <hr className="skills-hr"/>
          {interests.map((interest) => (
            <Skill text={interest} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CareerCard;
