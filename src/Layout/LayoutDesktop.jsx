import React from "react";
import Header from "./Header/Header";

export default function LayoutDesktop(props) {
  let { Component } = props;

  return (
    <div id="LayoutDesktop" className="h-screen">
      <Header />
      <div>{<Component />}</div>
    </div>
  );
}
