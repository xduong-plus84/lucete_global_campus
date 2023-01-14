import React from "react";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

export default function ComponentsLoading() {
  let { isLoading } = useSelector((state) => state.reducerComponentsLoading);
  //   let isLoading = true;

  return isLoading ? (
    <div
      style={{ marginTop: 0 }}
      className="h-screen w-screen fixed left-0 top-0 bg-black flex justify-center items-center z-50 opacity-50"
    >
      <PuffLoader color="red" size={200} />
    </div>
  ) : (
    <></>
  );
}
