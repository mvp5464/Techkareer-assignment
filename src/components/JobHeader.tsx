import LocationIcon from "./icons/LocationIcon";
import StackIcon from "./icons/StackIcon";

const JobHeader = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-[4.7rem] my-[1.55rem] mb-[1.37rem] ">
        <div className=" flex gap-2 justify-centers items-center">
          <div className=" font-extrabold text-[1.62rem] text-[#3D3D3D] ">
            Senior Product Designer
          </div>
          <span className=" text-[#D1D1D1] text-sm">&#x1F784;</span>
          <div className=" text-[#888888] font-semibold text-[0.6rem]">
            posted 2 days ago
          </div>
          <div className=" flex items-center justify-center gap-1  text-center font-semibold border border-[#ABEFC6] px-1 bg-[#ECFDF3] rounded-2xl h-4 ">
            <span className=" text-[1remd] pt-[0.1rem] text-[#17B26A] ">
              &#x1F784;
            </span>
            <span className="text-[0.55rem] text-[#067647] ">Open</span>
          </div>
        </div>
        <div className=" flex font-[500] mt-[0.99rem] text-[0.95rem] items-center gap-2 text-[#5D5D5D]">
          <div className=" flex gap-[0.6rem]">
            <LocationIcon className=" w-5 h-5" />
            <span className=" -ml-1 ">Delaware, USA</span>
            <span className=" text-[#D1D1D1] text-xs">&#x1F784;</span>
            <StackIcon className=" w-5 h-5" />
            <span className=" text-[0.85rem] ">$300k-$400k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
