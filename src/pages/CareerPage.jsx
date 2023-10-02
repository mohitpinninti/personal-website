import Skill from "../components/Skill";
import ProgressBar from "../components/ProgressBar";
import Job from "../components/Job";
import Project from "../components/Project";

const CareerPage = () => {
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

  const jobs = [
    {
      title: "Software Engineering Intern",
      company: "Qualcomm",
      team: "AR/VR Graphics Arch",
      startDate: "May 2023",
      endDate: "Aug 2023",
      descItems: [
        "Improved visual quality of a mobile rendering pipeline by incorporating a super-resolution algorithm into a VR simulation tool using C++ and OpenGL.",
        "Improved framerate by 350% on a customer’s laser-beam scanning display by designing a GPU simulation to remap an image to take advantage of cache optimizations using OpenGL and C++.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "ADM",
      team: "Digital Lab",
      startDate: "May 2022",
      endDate: "May 2023",
      descItems: [
        "Created an MVP for crop classification at up to 85% accuracy using deep learning to estimate crop yields",
        "Analyzed time-series satellite images to detect deforestation at scale using anomaly detection algorithms.",
        "Created Flask API supporting image retrieval, crop prediction, and storage in Azure Blob Storage and Cosmos DB.",
        "Presented comprehensive crop yield estimation proposal to VPs, highlighting how advancements in accurate crop pricing increase profit margins for Agricultural Services & Oilseeds business unit.",
      ],
    },
    {
      title: "Research Assistant",
      company: "Georgia Institute of Technology",
      team: "Contextual Computing Group - Dr. Thad Starner",
      startDate: "Aug 2022",
      endDate: "Present",
      descItems: [
        "Developing software applications to allow text captioning on smart glasses to be used for communication by a deaf film crew on the set of an upcoming movie.",
        " Created and presented demonstrations of key aspects of head-worn displays including weight, focal length, and social acceptability at the International Symposium of Wearable Computing.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Georgia Institute of Technology",
      team: "ECE 2031 - Digital Design Lab",
      startDate: "Jan 2022",
      endDate: "Present",
      descItems: [
        "Assisted 30+ students in problem-solving using rapid prototyping of digital circuits using VHDL, FPGAs, breadboard prototyping, and writing assembly.",
        "Graded student work through digital check-offs of lab work and in-class practical exercises.",
      ],
    },
  ];

  const projects = [
    {
      title: "Mbed Fruit Ninja",
      description: "A fruit ninja spin-off in C++ from scratch using an Mbed microcontroller, uLCD display, buttons and accelerometer controls.",
      projectLinkURL:"https://github.com/mohitpinninti/SociaLite",
      imageURL: "\\assets\\mbed_fruit_ninja.jpg",
      tools: ["C++", "Mbed"],
    },
    {
      title: "Space Shooter",
      description: "An endless space combat shooter with abilities and powerups where the player gains points for destroying asteroids.",
      projectLinkURL:"https://codepen.io/pinnintimohit/pen/mLVQrz",
      imageURL: "\\assets\\space_shooter.png",
      tools: ["HTML", "CSS", "JS", "Processing.js"],
    },
    {
      title: "SociaLite",
      description: "A fully functional social media app with authentication, profiles, location tracking, and live feeds.",
      projectLinkURL:"https://github.com/mohitpinninti/SociaLite",
      imageURL: "\\assets\\socialite.png",
      tools: ["Flutter", "Dart", "Firebase"],
    },
  ];

  return (
    <div className="careerPage">
      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Career Summary</h1>
        <hr />
        <p style={{lineHeight: "1.3em"}}>
        {/* <p> */}
          {/* Hi there! I'm Mohit!  */}
          Let's get down to business! I'm a 4<sup>th</sup> year Computer
          Engineering student at Georgia Tech. On paper, my concentrations are
          Distributed Systems &amp; Software Design and Cybersecurity &#40;you
          have to compromise somehow right? 😮‍💨{/*&#128531;*/}&#41; but my deepest
          interests lie at the intersection of Mixed Reality and Machine
          Learning. My goal is to create augmented reality glasses that can
          intelligently integrate information into our daily lives, without
          taking away focus from the physical world.
        </p>
        <br />
        <p style={{lineHeight: "1.3em"}}>
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
      {/* Test 1 */}
      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Skills</h1>
        <hr />

        <ul>
          <h3 className="careerpage-heading-3">Languages</h3>
          {languages.map((language) => (
            <Skill key={language} text={language} />
          ))}

          <h3 className="careerpage-heading-3">Tools and Technologies</h3>
          {toolsTech.map((tool) => (
            <Skill key={tool} text={tool} />
          ))}

          <h3 className="careerpage-heading-3">Interests</h3>
          {interests.map((interest) => (
            <Skill key={interest} text={interest} />
          ))}
        </ul>
      </div>

      {/* Dashboard section work in progress */}
      {/* <div style={{marginTop: "35px"}}>
        <h1 className="careerpage-heading-1">Dashboard</h1>
        <hr />
        <ProgressBar />
      </div>       */}

      <div className="careerpage-section-spacing">
        <h1 className="careerpage-heading-2">Experience</h1>
        <hr />
        {jobs.map((job) => (
            <Job key={job.company + "_" + job.startDate} job={job} />
        ))}
      </div>
      <div>
        <h1 className="careerpage-heading-2">Projects</h1>
        <hr />
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </div>
  );
};

export default CareerPage;