import Image from "next/image";
import JobCompanyComp from "./JobCompanyComp";
const JobCompany = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-20 my-5 ">
        <div className=" flex items-center gap-2 text-[#4F4F4F] mb-4">
          <Image
            src="/appLogo.png"
            alt="App Logo"
            className="dark:invert"
            width={30}
            height={0}
            priority
          />
          <span className=" font-bold">Atlassian</span>
        </div>
        <div className="  grid grid-cols-[1fr,2fr] w-full gap-2">
          <div>
            <JobCompanyComp title={"Company size"} info={"1k-2k Employees"} />
          </div>
          <div>
            <JobCompanyComp title={"Type"} info={"Private"} />
          </div>
          <div>
            <JobCompanyComp
              title={"Sector"}
              info={"Information Technology, Infrastructure"}
            />
          </div>
          <div>
            <JobCompanyComp title={"Funding"} info={"Bootstrapped"} />
          </div>
          <div>
            <JobCompanyComp title={"Founded In"} info={"2019"} />
          </div>
          <div>
            <JobCompanyComp
              title={"Founded By"}
              info={"Scott Farquhar, Mike Cannon-Brookes"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCompany;
