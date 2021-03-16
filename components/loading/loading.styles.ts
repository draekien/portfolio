import { keyframes } from "@emotion/react";
import { ThemeUIStyleObject } from "@theme-ui/css";

export const loadingContainerCss: ThemeUIStyleObject = {
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const pulse = keyframes`
from {
  transform: scale3d(1, 1, 1)
},
50% {
  transform: scale3d(1.05, 1.05, 1.05)
},
to {
  transform: scale3d(1, 1, 1)
}`;

export const loadingImgCss: ThemeUIStyleObject = {
  boxShadow: "lg",
  borderRadius: "max",
  animation: `${pulse} 1.5s ease-in-out infinite`,
};
