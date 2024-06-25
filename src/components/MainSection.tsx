import InfoSection from "./InfoSection";
import SidebarSection from "./SidebarSection";

const MainSection = () => {
  return (
    <div className=" grid grid-cols-4">
      <div className=" col-span-3">
        <InfoSection />
      </div>
      <SidebarSection />
    </div>
  );
};

export default MainSection;
