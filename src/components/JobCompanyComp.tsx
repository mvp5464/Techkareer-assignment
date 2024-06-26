const JobCompanyComp = ({ title, info }: { title: string; info: string }) => {
  return (
    <>
      <div className=" text-xs text-[#6E6D6D] font-[500]">{title}</div>
      <div className=" text-sm text-[#3D3D3D] font-semibold">{info}</div>
    </>
  );
};

export default JobCompanyComp;
