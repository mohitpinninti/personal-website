const Job = (props) => {
  // props:
  //   jobs
  return (
    <div className="job">
      <h1 className="careercard-heading-3">
        {props.job.title} &middot; {props.job.company}
      </h1>
      <h2 className="job-intro">
        {props.job.team} &nbsp; | &nbsp; {props.job.startDate} - {props.job.endDate}
      </h2>
      <ul className="job-desc">
        {props.job.descItems.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Job;
