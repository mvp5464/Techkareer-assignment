import JobInfoComp from "./JobInfoComp";

const JobInfo = () => {
  return (
    <div>
      <div className=" flex gap-2">
        <div>
          <div>Skills Required</div>
          <JobInfoComp image={"/figmaLogo.png"} name={"Figma"} />
          <JobInfoComp image={"/adobeAILogo.png"} name={"Adobe Illustrator"} />
          <JobInfoComp image={"/adobeXDLogo.png"} name={"Adobe XD"} />
        </div>
        <div>
          <div>Preferred Language</div>
          <div>English</div>
        </div>
        <div>
          <div>Type</div>
          <div>Full time</div>
        </div>
        <div>
          <div>Years of Experience</div>
          <div>3+ Years of Experience</div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
