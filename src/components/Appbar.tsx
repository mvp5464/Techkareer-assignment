import Image from "next/image";
import BellIcon from "./icons/BellIcon";
import DownArrowIcon from "./icons/DownArrowIcon";
import JobsIcon from "./icons/JobsIcon";
import MessagesIcon from "./icons/MessagesIcon";
import PaymentsIcon from "./icons/PaymentsIcon";

const Appbar = () => {
  return (
    <div className=" bg-fuchsia-400">
      {/* <div> */}
      <div className=" flex justify-between m-5">
        <div>logo</div>
        <div className=" flex gap-2">
          <div className=" flex">
            <JobsIcon /> jobs
          </div>
          <div className=" flex">
            <MessagesIcon />
            messages
          </div>
          <div className=" flex">
            <PaymentsIcon />
            payments
          </div>
        </div>
        <div className=" flex">
          <BellIcon />
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
          <DownArrowIcon />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Appbar;
