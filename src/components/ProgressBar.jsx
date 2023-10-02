const ProgressBar = (props) => {
    // FIXME: Unused progress bar - css & react not working
    // props:
    //   text: 
    //   color:
    //   percentDone: 

    // const style = {
    //     width: "500px"
    // };

  return (
    <>
      {/* <h1></h1> */}
      {/* className="progressBar" */}
      <progress className="progressBar" max={100} value={32}></progress>
      {/* <div></div> */}
    </>
  );
};

export default ProgressBar;
