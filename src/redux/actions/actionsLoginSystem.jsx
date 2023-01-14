import { DANG_KY, DANG_NHAP, DANG_XUAT } from "../constant/constantLoginSystem";

export let dangNhapAction = (thongTinDangNhap) => {
  return {
    type: DANG_NHAP,
    payload: thongTinDangNhap,
  };
};
export let dangXuatAction = () => {
  return {
    type: DANG_XUAT,
  };
};
export let dangKyAction = (thongTinDangKy) => {
  return {
    type: DANG_KY,
    payload: thongTinDangKy,
  };
};
