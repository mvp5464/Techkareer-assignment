import React from "react";

const SidebarSectionComp = ({
  icon,
  info,
  number,
}: {
  icon: React.JSX.Element;
  info: string;
  number: string;
}) => {
  return (
    <>
      <div className=" grid grid-cols-2 justify-around items-center gap-5">
        <div className=" flex items-center text-[#4F4F4F] gap-2 font-[500] text-xs">
          <span>{icon}</span>
          <span>{info}</span>
        </div>
        <div className=" font-bold text-center pl-20 text-sm text-[#3D3D3D]">
          {number}
        </div>
      </div>
    </>
  );
};

export default SidebarSectionComp;
