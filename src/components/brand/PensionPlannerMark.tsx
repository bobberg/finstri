import * as React from "react";

const PensionPlannerMark: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="14 110 40 40" {...props}>
    <rect
      x="14"
      y="110"
      width="40"
      height="40"
      rx="6"
      fill="var(--mark-bg-color, #ffffff)"
    />
    <g
      fill="none"
      stroke="var(--mark-accent-color, #185a8c)"
      strokeMiterlimit="10"
      strokeWidth="2.54"
    >
      <path d="m20.78 136.24 7.77-6.76 7.52 4.47 11.86-10.55" />
      <rect
        width="27.14"
        height="28.86"
        x="20.78"
        y="116.17"
        rx="3.53"
        ry="3.53"
      />
    </g>
  </svg>
);

export default PensionPlannerMark;
