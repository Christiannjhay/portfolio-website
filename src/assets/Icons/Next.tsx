import type { SVGProps } from "react";

export function NextIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8 1.5a6.5 6.5 0 1 0 3.65 11.88L6 6.577v4.673a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 1.327-.48l7.474 9a.75.75 0 0 1-.088 1.049a8 8 0 1 1 2.12-2.865a.75.75 0 1 1-1.375-.602A6.45 6.45 0 0 0 14.5 8A6.5 6.5 0 0 0 8 1.5m2.5 2.25a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}