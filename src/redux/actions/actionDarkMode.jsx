import { DARK_MODE, LIGHT_MODE } from "../constant/constantDarkMode";

export const setLoadingOnAction = () => {
  return {
    type: DARK_MODE,
  };
};

export const setLoadingOffAction = () => {
  return {
    type: LIGHT_MODE,
  };
};
