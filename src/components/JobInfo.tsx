import JobInfoComp from "./JobInfoComp";

const JobInfo = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-20 my-5 ">
        <div className=" flex gap-9">
          <div className=" space-y-2">
            <div className=" text-[#6E6D6D]">Skills Required</div>
            <JobInfoComp image={"/figmaLogo.png"} name={"Figma"} />
            <JobInfoComp
              image={"/adobeAILogo.png"}
              name={"Adobe Illustrator"}
            />
            <JobInfoComp image={"/adobeXDLogo.png"} name={"Adobe XD"} />
          </div>
          <div>
            <div className=" text-[#6E6D6D]">Preferred Language</div>
            <div className=" text-[#3D3D3D] font-bold">English</div>
          </div>
          <div>
            <div className=" text-[#6E6D6D]">Type</div>
            <div className=" text-[#3D3D3D] font-bold">Full time</div>
          </div>
          <div className=" ml-20 ">
            <div className=" text-[#6E6D6D]">Years of Experience</div>
            <div className=" text-[#3D3D3D] font-bold">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
