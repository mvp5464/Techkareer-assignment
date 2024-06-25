import LocationIcon from "./icons/LocationIcon";
import StackIcon from "./icons/StackIcon";

const JobHeader = () => {
  return (
    <div>
      <div>
        <div className=" flex gap-2">
          <div>Senior Product Designer</div>
          <span>dot</span>
          <div>posted 2 days ago</div>
          <div>dot Open</div>
        </div>
        <div className=" flex gap-2">
          <div className=" flex gap-2">
            <LocationIcon />
            <span>Delaware,USA</span>
          </div>
          <span>dot</span>
          <div className=" flex gap-2">
            <StackIcon />
            <span>$300k-$400k</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
