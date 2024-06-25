import SidebarSectionComp from "./SidebarSectionComp";
import ApplicantsIcon from "./icons/ApplicantsIcon";
import DeleteIcon from "./icons/DeleteIcon";
import EditIcon from "./icons/EditIcon";
import MatchesIcon from "./icons/MatchesIcon";
import MessagesIcon from "./icons/MessagesIcon";
import ViewsIcon from "./icons/ViewsIcon";

const SidebarSection = () => {
  return (
    <div>
      <div className=" flex gap-4">
        <button className=" flex">
          <DeleteIcon />
          <span>Delete job</span>
        </button>
        <button className=" flex">
          <EditIcon />
          <span>Edit job</span>
        </button>
      </div>
      <div>
        <SidebarSectionComp
          icon={<ApplicantsIcon />}
          info={"Applicants"}
          number={"400"}
        />
        <SidebarSectionComp
          icon={<MatchesIcon />}
          info={"Matches"}
          number={"100"}
        />
        <SidebarSectionComp
          icon={<MessagesIcon />}
          info={"Messages"}
          number={"147"}
        />
        <SidebarSectionComp
          icon={<ViewsIcon />}
          info={"Views"}
          number={"800"}
        />
      </div>
    </div>
  );
};

export default SidebarSection;
