import InfoSection from "./InfoSection";
import SidebarSection from "./SidebarSection";

const MainSection = () => {
  return (
    <div className=" grid grid-cols-[7fr,2fr]">
      <InfoSection />
      <SidebarSection />
    </div>
  );
};

export default MainSection;
