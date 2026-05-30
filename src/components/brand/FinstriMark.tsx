type FinstriMarkProps = {
  className?: string;
  title?: string;
};

function FinstriMark({
  className = "h-10 w-10",
  title = "Finstri logo",
}: FinstriMarkProps) {
  return (
    <svg
      aria-label={title}
      className={className}
      role="img"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="white" height="64" rx="15" width="64" />
      <path
        d="M18.5 14.5V50.5M28 16.5H49.5M28 25.5H54M28 36H48M28 45H40.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="7.5"
      />
    </svg>
  );
}

export default FinstriMark;