import type { FC, SVGProps } from "react";

const CheckIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 19}
    height={props.height || 19}
    fill="none"
    {...props}
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 6L9 17l-5-5"
    />
  </svg>
);

export default CheckIcon;
