export default function EditIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      //   width="16"
      //   height="16"
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <g clip-path="url(#clip0_1_9150)"> */}
      <path
        d="M12 6.66668L9.33331 4.00001M1.66663 14.3333L3.92287 14.0826C4.19853 14.052 4.33636 14.0367 4.46519 13.995C4.57949 13.958 4.68826 13.9057 4.78855 13.8396C4.9016 13.765 4.99966 13.667 5.19578 13.4709L14 4.66668C14.7364 3.9303 14.7364 2.73639 14 2.00001C13.2636 1.26363 12.0697 1.26363 11.3333 2.00001L2.52911 10.8042C2.33299 11.0003 2.23493 11.0984 2.16038 11.2114C2.09425 11.3117 2.04197 11.4205 2.00497 11.5348C1.96326 11.6636 1.94795 11.8014 1.91732 12.0771L1.66663 14.3333Z"
        stroke="white"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      {/* </g> */}
      {/* <defs>
<clipPath id="clip0_1_9150">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs> */}
    </svg>
  );
}
