import {
  SET_LOADING_OFF,
  SET_LOADING_ON,
} from "../constant/constantComponentsLoading";

export const setLoadingOnAction = () => {
  return {
    type: SET_LOADING_ON,
  };
};

export const setLoadingOffAction = () => {
  return {
    type: SET_LOADING_OFF,
  };
};
