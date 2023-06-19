import { useState } from "react";

const ExperienceCard = () => {
  // FIXME: When this gets settled, fix this experience obj array - first remove this experience const, then add all work info
  const experience = [
    {
      position: "Software Engineer Intern - AR/VR Graphics Research Team",
      company: "Qualcomm",
      timeRange: "May 2023 - August 2023",
      description: [
        // TODO: Fill in this description
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id voluptas assumenda dolorem placeat rerum ratione, aspernatur asperiores rem pariatur.",
        "Hic vitae error sequi praesentium provident atque eligendi eius maxime distinctio possimus voluptas itaque, unde ab in minus eum ratione?",
        "Nesciunt, nihil vel accusantium possimus quod officiis libero tempora dolorum inventore earum optio, alias nisi recusandae nemo explicabo, dolor quos.",
      ],
    },
    {
      position: "Software Engineer Intern - Digital Lab",
      company: "Archer Daniels Midland",
      timeRange: "May 2022 - Present",
      description: [
        // TODO: Fill in this description
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id voluptas assumenda dolorem placeat rerum ratione, aspernatur asperiores rem pariatur.",
        "Hic vitae error sequi praesentium provident atque eligendi eius maxime distinctio possimus voluptas itaque, unde ab in minus eum ratione?",
        "Nesciunt, nihil vel accusantium possimus quod officiis libero tempora dolorum inventore earum optio, alias nisi recusandae nemo explicabo, dolor quos.",
      ],
    },
    {
      position: "Research Assistant - Contextual Computing Group",
      company: "CCG - Georgia Tech",
      timeRange: "August 2022 - Present",
      description: [
        // TODO: Fill in this description
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id voluptas assumenda dolorem placeat rerum ratione, aspernatur asperiores rem pariatur.",
        "Hic vitae error sequi praesentium provident atque eligendi eius maxime distinctio possimus voluptas itaque, unde ab in minus eum ratione?",
        "Nesciunt, nihil vel accusantium possimus quod officiis libero tempora dolorum inventore earum optio, alias nisi recusandae nemo explicabo, dolor quos.",
      ],
    },
    {
      position: "Teaching Assistant - ECE 2031",
      company: "ECE 2031 - Georgia Tech",
      timeRange: "January 2022 - Present",
      description: [
        // TODO: Fill in this description
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati id voluptas assumenda dolorem placeat rerum ratione, aspernatur asperiores rem pariatur.",
        "Hic vitae error sequi praesentium provident atque eligendi eius maxime distinctio possimus voluptas itaque, unde ab in minus eum ratione?",
        "Nesciunt, nihil vel accusantium possimus quod officiis libero tempora dolorum inventore earum optio, alias nisi recusandae nemo explicabo, dolor quos.",
      ],
    },
  ];

//   const handleOnClick = (item) => {
//     console.log(item);
//   }
  const [exp, setExp] = useState(experience[0]);

  return (
    <>
      <h1>Experience</h1>
      <ul>
        {experience.map((item, i) => (
          <li key={item.company} onClick={() => setExp(item)}>{item.company}</li>
        ))}
      </ul>
      <div>
        <h3>{exp.position} @ {exp.company}</h3>
        <h5>{exp.timeRange}</h5>
        {exp.description.map((bulletPoint, i) => (
            <li key={i}>{bulletPoint}</li>
        ))}
        {/* <p>{exp.description}</p> */}
      </div>
    </>
  );
};

export default ExperienceCard;
