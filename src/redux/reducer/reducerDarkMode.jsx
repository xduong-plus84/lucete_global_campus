import { DARK_MODE, LIGHT_MODE } from "../constant/constantDarkMode";

let initalState = {
  isDarkMode: false,
};

export const reducerLoading = (state = initalState, { type, payloaed }) => {
  switch (type) {
    case DARK_MODE: {
      return { ...state, isDarkMode: true };
    }
    case LIGHT_MODE: {
      return { ...state, isDarkMode: false };
    }

    default:
      return state;
  }
};
