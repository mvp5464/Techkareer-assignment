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
      <div className=" flex justify-between gap-4">
        <div className=" flex justify-center items-center text-[#4F4F4F] gap-2 font-[500] text-xs">
          <span>{icon}</span>
          <span>{info}</span>
        </div>
        <div className=" font-bold text-[#3D3D3D]">{number}</div>
      </div>
    </>
  );
};

export default SidebarSectionComp;
