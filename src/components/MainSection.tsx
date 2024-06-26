import InfoSection from "./InfoSection";
import SidebarSection from "./SidebarSection";

const MainSection = () => {
  return (
    <div className=" grid grid-cols-[48fr,15fr]">
      <InfoSection />
      <SidebarSection />
    </div>
  );
};

export default MainSection;
