import {
  SET_MODAL_CLOSE,
  SET_MODAL_OPEN,
} from "../constant/constantModalReviewTeacher";

export const setOpenModalReviewAction = () => {
  return {
    type: SET_MODAL_OPEN,
  };
};

export const setCloseModalReviewAction = () => {
  return {
    type: SET_MODAL_CLOSE,
  };
};
