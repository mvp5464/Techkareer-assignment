import Image from "next/image";

const JobInfoComp = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      <div className=" flex">
        <div className=" border flex items-center gap-[.2rem] px-1 py-[0.1rem] rounded-md text-[0.6rem] ">
          <span className=" w-3">
            <Image
              src={image}
              alt={name}
              className="shrink-0"
              width={20}
              height={0}
              priority
            />
          </span>
          <span className=" text-[#344054]">{name}</span>
        </div>
      </div>
    </>
  );
};

export default JobInfoComp;
