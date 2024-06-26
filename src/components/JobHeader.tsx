import LocationIcon from "./icons/LocationIcon";
import StackIcon from "./icons/StackIcon";

const JobHeader = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-20 my-5 ">
        <div className=" flex gap-2 justify-centers items-center">
          <div className=" font-bold text-[1.7rem] text-[#3D3D3D] ">
            Senior Product Designer
          </div>
          <span className=" text-[#D1D1D1] text-sm">&#x1F784;</span>
          <div className=" text-[#888888] font-semibold text-xs">
            posted 2 days ago
          </div>
          <div className=" flex items-center justify-center gap-1 text-3xl font-bold border border-[#ABEFC6] px-2 bg-[#ECFDF3] rounded-2xl">
            <span className=" text-xl text-[#17B26A] ">&#x1F784;</span>
            <span className=" text-[#067647]  text-xs ">Open</span>
          </div>
        </div>
        <div className=" flex font-[500] mt-3 items-center gap-2 text-[#5D5D5D]">
          <div className=" flex gap-2">
            <LocationIcon />
            <span className="  ">Delaware,USA</span>
            <span className=" text-[#D1D1D1] text-xs">&#x1F784;</span>
            <StackIcon />
            <span>$300k-$400k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
