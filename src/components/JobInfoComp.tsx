import Image from "next/image";

const JobInfoComp = ({ image, name }: { image: string; name: string }) => {
  return (
    <>
      <div className=" flex">
        <Image
          src={image}
          alt="Figma Logo"
          className="dark:invert rounded-full"
          width={30}
          height={0}
          priority
        />
        <span>{name}</span>
      </div>
    </>
  );
};

export default JobInfoComp;
