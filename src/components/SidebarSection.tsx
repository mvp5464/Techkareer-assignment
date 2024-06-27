import SidebarSectionComp from "./SidebarSectionComp";
import ApplicantsIcon from "./icons/ApplicantsIcon";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import MatchesIcon from "./icons/MatchesIcon";
import MessagesIcon from "./icons/MessagesIcon";
import ViewsIcon from "./icons/ViewsIcon";

const SidebarSection = () => {
  return (
    <div className=" border-l-2 py-6">
      <div className=" flex justify-center items-center gap-[.7rem] mx-[1.08rem]">
        <button className=" flex items-center justify-center gap-[.4rem] font-[500] border border-[#DC4A2D] text-[#DC4A2D] bg-[#FEF4F2] rounded-[0.45rem]   py-[0.46rem] w-full ">
          <DeleteIcon className="w-4 h-4" />
          <span className="text-xs py-[0.11rem]">Delete job</span>
        </button>
        <button className=" flex items-center justify-center gap-2 font-[500] border border-[#FED3CA] text-white bg-[#DC4A2D] rounded-lg py-[0.48rem] w-full ">
          <EditIcon className="w-3 h-3" />
          <span className="text-xs py-[0.1rem]">Edit job</span>
        </button>
      </div>
      <div className=" pt-[0.87rem]">
        <div className=" px-[0.4rem] mx-7 mt-[1.12rem] pb-[1.13rem] border-b">
          <SidebarSectionComp
            icon={<ApplicantsIcon className="w-4 h-4" />}
            info={"Applicants"}
            number={"400"}
          />
        </div>
        <div className=" px-[0.4rem] mx-7 mt-[1.1rem] pb-[1.13rem] border-b">
          <SidebarSectionComp
            icon={<MatchesIcon className="w-4 h-4" />}
            info={"Matches"}
            number={"100"}
          />
        </div>
        <div className=" px-[0.4rem] mr-8 ml-7 mt-[1.1rem] pb-[1.13rem] border-b">
          <SidebarSectionComp
            icon={
              <MessagesIcon
                className="w-4 h-4 -mr-[0.18rem]"
                borderColor="#4F4F4F"
              />
            }
            info={"Messages"}
            number={"147"}
          />
        </div>
        <div className=" px-[0.4rem] mx-7 mt-[1.1rem] pb-[1.13rem] ">
          <SidebarSectionComp
            icon={<ViewsIcon className="w-4 h-4" />}
            info={"Views"}
            number={"800"}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarSection;
