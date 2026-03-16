import type { ComponentProps } from "react";

/**
 * Inline React component for the mark.svg asset.
 *
 * Usage:
 * <Mark className="h-6 w-6" />
 *
 * Any standard SVG props are accepted (className, width, height, aria-label, etc.).
 *
 * The fill colors use `currentColor` so you can control the icon color with CSS.
 */
export default function Mark(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79.838 54"
      width="1em"
      height="1em"
      {...props}
    >
      <title>William Pei&apos;s Logo</title>
      <path
        d="M2055.782,114.819h6.012l23.011,58h-6.112Z"
        transform="translate(-2032.93 -114.819)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M0,27.771H0V21.239l13.175-7.353L0,6.532V0L24.877,13.886,0,27.771Z"
        transform="translate(54.961 0)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
      <path
        d="M2055.782,114.819h6.012l23.011,58h-6.112Z"
        transform="translate(-2055.782 -114.819)"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
    </svg>
  );
}
