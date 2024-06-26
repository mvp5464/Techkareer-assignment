const TabSection = () => {
  return (
    <div className="border-b-2 border-[#E7E7E7]">
      <div className="max-w-[90%] mx-auto flex gap-14 pt-3 pb-[0.05rem] font-semibold text-lg ">
        <div className=" text-[#DC4A2D] half-bottom-border pb-2 ">
          Job preview
        </div>
        <div className=" text-[#888888]">Applicants</div>
        <div className=" text-[#888888]">Match</div>
        <div className=" text-[#888888]">Messages</div>
      </div>
    </div>
  );
};

export default TabSection;