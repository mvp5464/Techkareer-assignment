import Image from "next/image";
import JobCompanyComp from "./JobCompanyComp";
const JobCompany = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="ml-[4.7rem] my-[2rem]">
        <div className=" flex items-center gap-2 text-[#4F4F4F] mb-[1.22rem] ">
          <Image
            src="/appLogo.png"
            alt="App Logo"
            className="dark:invert"
            width={30}
            height={0}
            priority
          />
          <span className=" font-">Atlassian</span>
        </div>
        <div className="grid grid-cols-[20fr,45fr] gap-[1.15rem] -mb-2">
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
