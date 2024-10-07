
import type { SVGProps } from "react";

export function HamburgerMenu(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M20 7H4m16 5H4m16 5H4"
      ></path>
    </svg>
  );
}
