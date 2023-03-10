import { useMediaQuery } from "react-responsive";

export const DesktopView = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 });
  return isDesktop ? children : null;
};
export const TabletView = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 999 });
  return isTablet ? children : null;
};
export const MobileView = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
