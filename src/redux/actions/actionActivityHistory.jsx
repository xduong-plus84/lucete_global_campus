import {
  CHECK_IN,
  CHECK_OUT,
  EXCHANGEPOINT,
} from "../constant/constantActivityHistory";

export const checkInAction = () => {
  return {
    type: CHECK_IN,
  };
};

export const checkOutAction = () => {
  return {
    type: CHECK_OUT,
  };
};

export const exchangePoint = (reward) => {
  return {
    type: EXCHANGEPOINT,
    payload: reward,
  };
};
