import JobInfoComp from "./JobInfoComp";

const JobInfo = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-[4.7rem] my-[1.5rem] ">
        <div className=" grid grid-cols-[2fr,2fr,2fr,2fr,3fr] gap-8">
          <div className=" flex flex-col gap-[0.3rem]">
            <div className=" text-[#6E6D6D] font-semibold text-[0.64rem] ">
              Skills Required
            </div>
            <JobInfoComp image={"/figmaLogo.png"} name={"Figma"} />
            <JobInfoComp
              image={"/adobeAILogo.png"}
              name={"Adobe Illustrator"}
            />
            <JobInfoComp image={"/adobeXDLogo.png"} name={"Adobe XD"} />
          </div>
          <div>
            <div className=" text-[#6E6D6D] font-semibold text-[0.64rem]">
              Preferred Language
            </div>
            <div className=" text-[#3D3D3D] font-bold text-[0.75rem] pt-1">
              English
            </div>
          </div>
          <div>
            <div className=" text-[#6E6D6D] font-semibold text-[0.64rem]">
              Type
            </div>
            <div className=" text-[#3D3D3D] font-bold text-[0.75rem] pt-1">
              Full time
            </div>
          </div>
          <div className=" ml-20s ">
            <div className=" text-[#6E6D6D] font-semibold text-[0.64rem]">
              Years of Experience
            </div>
            <div className=" text-[#3D3D3D] font-bold text-[0.75rem] pt-1">
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
