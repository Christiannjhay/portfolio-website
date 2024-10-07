
import type { SVGProps } from "react";

export function RenderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18.263.007c-3.121-.147-5.744 2.109-6.192 5.082c-.018.138-.045.272-.067.405c-.696 3.703-3.936 6.507-7.827 6.507a7.9 7.9 0 0 1-3.825-.979a.202.202 0 0 0-.302.178V24H12v-8.999c0-1.656 1.338-3 2.987-3h2.988c3.382 0 6.103-2.817 5.97-6.244c-.12-3.084-2.61-5.603-5.682-5.75"
      ></path>
    </svg>
  );
}