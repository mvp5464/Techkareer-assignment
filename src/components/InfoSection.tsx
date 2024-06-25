import JobAbout from "./JobAbout";
import JobCompany from "./JobCompany";
import JobHeader from "./JobHeader";
import JobInfo from "./JobInfo";

const InfoSection = () => {
  return (
    <div>
      <JobHeader />
      <JobInfo />
      <JobAbout />
      <JobCompany />
    </div>
  );
};

export default InfoSection;
