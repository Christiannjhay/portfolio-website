
import type { SVGProps } from "react";

export function HomeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"></path>
    </svg>
  );
}
