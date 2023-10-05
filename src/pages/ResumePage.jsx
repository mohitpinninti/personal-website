const ResumePage = () => {

  return (
    <section className="resume-holder">
        {/* <div className="resume"></div> */}
      {/* <iframe></iframe> */}
      {/* <ReactPDF
        file={{
          url: "public/assets/M.Pinninti_09_04_2023 Resume.pdf",
        }}
      /> */}

{/* <object width="800px" height="800px" data="public/assets/M.Pinninti_09_04_2023 Resume.pdf" type="application/pdf">   </object> */}
<object className="resume" width="50%" height="100%" data="assets/M.Pinninti_09_04_2023 Resume.pdf" type="application/pdf" />
{/* <embed></embed> */}
{/* <iframe src="public/assets/M.Pinninti_09_04_2023 Resume.pdf" /> */}
        {/* <iframe src="/assets/M.Pinninti_09_04_2023 Resume.pdf" /> */}
        {/* <iframe className="resume" src="/assets/M.Pinninti_09_04_2023 Resume.pdf" height="500px" width="100%"></iframe> */}
    </section>
  );
};

export default ResumePage;
