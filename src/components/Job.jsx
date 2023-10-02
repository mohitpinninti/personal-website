const Job = (props) => {
  // props:
  //   jobs: 

  const divStyle = {
    textAlign: "left",
    // marginLeft: "10%"
    marginTop: "15px",
    marginBottom: "15px",
  };

  const h1style = {
    fontSize: "1em",
    fontFamily: "Comic Neue",
    fontWeight: "800",
    color: "#adaab5",
    // marginTop: "6px",
    // paddingTop: "8px",
  };

  const h2style = {
    fontSize: "0.8em",
    fontFamily: "Fira Mono",
    fontWeight: "800",
    color: "#adaab5",
    // marginTop: "6px",
    // paddingTop: "8px",
  };

  const listStyle = {
    textAlign: "left",
    marginLeft: "10%",
  };

  return (
    <div style={divStyle}>
      <h1 className="careercard-heading-3">
        {props.job.title} &middot; {props.job.company}
      </h1>
      <h2 style={h1style}>
        {props.job.team} &nbsp; | &nbsp; {props.job.startDate} - {props.job.endDate}
      </h2>
      <ul style={listStyle}>
        {props.job.descItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
