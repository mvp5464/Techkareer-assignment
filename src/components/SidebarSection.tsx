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
      <div className=" flex justify-center items-center gap-3 mx-5">
        <button className=" flex items-center justify-center gap-2 font-[500] border border-[#DC4A2D] text-[#DC4A2D] bg-[#FEF4F2] rounded-lg  py-2 w-full ">
          <DeleteIcon className="w-4 h-4" />
          <span className="text-sm">Delete job</span>
        </button>
        <button className=" flex items-center justify-center gap-2 font-[500] border border-[#FED3CA] text-white bg-[#DC4A2D] rounded-lg py-2 w-full ">
          <EditIcon className="w-3 h-3" />
          <span className="text-sm">Edit job</span>
        </button>
      </div>
      <div>
        <div className=" mx-7 my-5 pb-4 border-b">
          <SidebarSectionComp
            icon={<ApplicantsIcon className="w-4 h-4" />}
            info={"Applicants"}
            number={"400"}
          />
        </div>
        <div className=" mx-7 my-5 pb-4 border-b">
          <SidebarSectionComp
            icon={<MatchesIcon className="w-4 h-4" />}
            info={"Matches"}
            number={"100"}
          />
        </div>
        <div className=" mx-7 my-5 pb-4 border-b">
          <SidebarSectionComp
            icon={<MessagesIcon className="w-4 h-4" borderColor="#4F4F4F" />}
            info={"Messages"}
            number={"147"}
          />
        </div>
        <div className=" mx-7 my-5 pb-4 ">
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
