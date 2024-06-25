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
      <div className=" flex gap-4">
        <div className=" flex ">
          <span>{icon}</span>
          <span>{info}</span>
        </div>
        <div>{number}</div>
      </div>
    </>
  );
};

export default SidebarSectionComp;
