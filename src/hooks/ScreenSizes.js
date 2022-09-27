import { useMediaQuery } from "react-responsive";

const breakpoints = {
  xs: 0,
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
};

export const useXSScreen = () =>
  useMediaQuery({ query: `(max-width: ${breakpoints.xs})` });

export const useSMScreen = () => 
  useMediaQuery({ query: `(max-width: ${breakpoints.sm})` });

export const useMDScreen = () =>
  useMediaQuery({ query: `(max-width: ${breakpoints.md})` });

export const useLGScreen = () =>
  useMediaQuery({ query: `(max-width: ${breakpoints.lg})` });

export const useXLScreen = () =>
  useMediaQuery({ query: `(max-width: ${breakpoints.xl})` });

export const useXXLScreen = () =>
  useMediaQuery({ query: `(max-width: ${breakpoints.xxl})` });
