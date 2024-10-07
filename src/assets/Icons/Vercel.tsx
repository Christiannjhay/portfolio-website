import type { SVGProps } from "react";

export function VercelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M24 22.525H0l12-21.05z"></path>
    </svg>
  );
}
