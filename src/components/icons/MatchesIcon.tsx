export default function MatchesIcon({
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
        d="M10 12.9167H6.25002C5.08705 12.9167 4.50557 12.9167 4.0324 13.0602C2.96707 13.3834 2.13339 14.217 1.81022 15.2824C1.66669 15.7555 1.66669 16.337 1.66669 17.5M13.3334 15L15 16.6667L18.3334 13.3333M12.0834 6.25C12.0834 8.32107 10.4044 10 8.33335 10C6.26229 10 4.58335 8.32107 4.58335 6.25C4.58335 4.17893 6.26229 2.5 8.33335 2.5C10.4044 2.5 12.0834 4.17893 12.0834 6.25Z"
        stroke="#4F4F4F"
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}