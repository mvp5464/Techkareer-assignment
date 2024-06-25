export default function DownArrowIcon({
  className = "w-6 h-6",
}: {
  className?: string;
}) {
  return (
    <svg
      //   width="20"
      //   height="20"
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
        stroke="black"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
