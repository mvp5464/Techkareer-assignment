import Image from "next/image";
import BellIcon from "./icons/BellIcon";
import DownArrowIcon from "./icons/DownArrowIcon";
import JobsIcon from "./icons/JobsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import PaymentsIcon from "./icons/PaymentsIcon";

const Appbar = () => {
  return (
    <div className=" border-b border-[#E7E7E7]">
      <div className=" flex justify-between items-center p-5">
        <div className=" bg-[#E7E7E7] text-[#DC4A2D] px-6 py-4">Logo</div>
        <div className=" flex gap-2 border rounded-full p-1">
          <div className=" flex gap-2 rounded-full bg-[#DC4A2D] text-white p-3 border border-[#FCB4A5]">
            <JobsIcon /> <span>jobs</span>
          </div>
          <div className=" flex gap-2 p-3 text-[#B0B0B0]">
            <div className="  relative">
              <MessagesIcon />
              <span className=" absolute top-0 right-0 bg-[#DC4A2D] text-white text-xs py-[0.15rem] px-[0.15rem] rounded-full leading-3">
                {" "}
              </span>
            </div>

            <span>messages</span>
          </div>
          <div className=" flex gap-2  p-3 text-[#B0B0B0] ">
            <PaymentsIcon />
            <span>payments</span>
          </div>
        </div>
        <div className=" flex items-center justify-center gap-3">
          <div className="relative">
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
