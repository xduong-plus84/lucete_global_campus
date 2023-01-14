import {
  SET_MODAL_CLOSE,
  SET_MODAL_OPEN,
} from "../constant/constantModalReviewTeacher";

let initalState = {
  isOpenModal: false,
};

export const reducerModalReviewTeacher = (
  state = initalState,
  { type, payloaed }
) => {
  switch (type) {
    case SET_MODAL_OPEN: {
      return { ...state, isOpenModal: true };
    }
    case SET_MODAL_CLOSE: {
      return { ...state, isOpenModal: false };
    }

    default:
      return state;
  }
};
