const JobAbout = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-[4.7rem] my-[1.5rem] text-[#3D3D3D] flex flex-col gap-[0.22rem] font-[500] text-[0.73rem]">
        <div className=" text-[#6E6D6D] font-semibold mb-1 text-[0.64rem]">
          About the job
        </div>
        <div>1. Handle the UI/UX research design</div>
        <div>
          2. Work on researching on latest web applications designs & trends
        </div>
        <div>3. Work on conceptualizing and visualizing</div>
        <div>
          4. Work on creating graphics content and other graphic related works
        </div>
        <div className="flex flex-col gap-[0.22rem]">
          <div>Benefits:</div>
          <div className=" pl-[0.35rem] ">
            <span className="font-extrabold pr-1">&#x1F784;&nbsp;</span>
            <span>Health insurance</span>
          </div>
          <div className=" pl-[0.35rem]">
            <span className="font-extrabold pr-1">&#x1F784;&nbsp;</span>
            <span>Provident Fund</span>
          </div>
        </div>
        <div className="flex flex-col gap-[0.22rem]">
          <div>Schedule:</div>
          <div className=" pl-[0.35rem]">
            <span className="font-extrabold pr-1">&#x1F784;&nbsp;</span>
            <span>Day shift</span>
          </div>
        </div>
        <div className="flex flex-col gap-[0.22rem]">
          <div>Supplemental pay types:</div>
          <div className=" pl-[0.35rem]">
            <span className="font-extrabold pr-1">&#x1F784;&nbsp;</span>
            <span>Performance bonus</span>
          </div>
          <div className=" pl-[0.35rem]">
            <span className="font-extrabold pr-1">&#x1F784;&nbsp;</span>
            <span>Yearly bonus</span>
          </div>
        </div>
        <div className="pb-[0.4rem]">Work Location: In person</div>
      </div>
    </div>
  );
};

export default JobAbout;
