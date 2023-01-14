//rxr
import { serviceLocalStorageUser } from "../../util/demoLocalStorage/demoLocalStorage";

let initialState = {
  userInfor: serviceLocalStorageUser.user.get(),
};

export let demoReducerQuanLyNguoiDung = (state = initialState, action) => {
  switch (action.type) {
    // case DANG_NHAP: {
    //   return { ...state, userInfor: action.payload };
    // }
    // case DANG_XUAT: {
    //   return { ...state, userInfor: null };
    // }
    default: {
      return { ...state };
    }
  }
};
