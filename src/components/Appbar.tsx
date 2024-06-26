import Image from "next/image";
import BellIcon from "./icons/BellIcon";
import DownArrowIcon from "./icons/DownArrowIcon";
import JobsIcon from "./icons/JobsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import PaymentsIcon from "./icons/PaymentsIcon";

const Appbar = () => {
  return (
    <div className="sticky z-50 top-0 bg-white border-b border-[#E7E7E7]">
      <div className=" flex justify-between items-center px-6 py-3 ">
        <div className=" bg-[#E7E7E7] text-[#DC4A2D] px-5 font-[600] py-[0.7rem] ml-1">
          Logo
        </div>
        <div className=" flex gap-[2.2rem] ml-2 border rounded-full p-1 pr-2 font-[500] tracking-tight">
          <div className=" flex items-center gap-[0.3rem] px-[0.7rem] my-[0.2rem] rounded-3xl bg-[#DC4A2D] text-white border border-[#FCB4A5]">
            <JobsIcon className="w-5 h-5" /> <span>Jobs</span>
          </div>
          <div className=" flex items-center gap-[0.3rem] p-2 my-1  ml-1 text-[#B0B0B0]">
            <div className="relative">
              <MessagesIcon className="w-5 h-5" />
              <span className=" absolute top-0 right-0 bg-[#DC4A2D] text-white text-xs py-[0.15rem] px-[0.15rem] rounded-full leading-3">
                {" "}
              </span>
            </div>

            <span>Messages</span>
          </div>
          <div className=" flex gap-1 items-center p-[0.2rem] m-1 ml-3 text-[#B0B0B0] ">
            <PaymentsIcon className="w-5 h-5" />
            <span>Payments</span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-1">
          <div className="relative mr-2">
            <BellIcon />
            <span className=" absolute top-0 right-1 bg-[#DC4A2D] text-white text-xs py-[0.15rem] px-[0.15rem] rounded-full leading-3">
              {" "}
            </span>
          </div>
          <span>
            <Image
              src="/appLogo.png"
              alt="App Logo"
              className="dark:invert rounded-full"
              width={30}
              height={0}
              priority
            />
          </span>
          <DownArrowIcon className=" h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
