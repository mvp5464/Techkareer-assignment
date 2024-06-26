const JobCompanyComp = ({ title, info }: { title: string; info: string }) => {
  return (
    <>
      <div className=" text-[0.65rem] text-[#6E6D6D] font-[500]">{title}</div>
      <div className=" text-[0.75rem] text-[#3D3D3D] font-[500] pt-[0.2rem]">
        {info}
      </div>
    </>
  );
};

export default JobCompanyComp;
