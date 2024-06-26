import Image from "next/image";

const JobInfoComp = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      <div className=" flex">
        <div className=" border flex gap-2 px-1 py-1 rounded-lg text-xs">
          <Image
            src={image}
            alt={name}
            className="shrink-0"
            width={20}
            height={0}
            priority
          />
          <span className=" text-[#344054]">{name}</span>
        </div>
      </div>
    </>
  );
};

export default JobInfoComp;
