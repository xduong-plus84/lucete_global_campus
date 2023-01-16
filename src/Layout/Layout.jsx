import React from "react";
import { DesktopView, MobileView, TabletView } from "../HOC/Reposive";
import LayoutDesktop from "./LayoutDesktop";
import LayoutMobie from "./LayoutMobie";
import LayoutTablet from "./LayoutTablet";

export default function Layout(props) {
  console.log("props: ", props);
  let { Component } = props;

  return (
    <div>
      <DesktopView>
        <LayoutDesktop Component={Component} />
      </DesktopView>

      <TabletView>
        <LayoutTablet />
      </TabletView>

      <MobileView>
        <LayoutMobie />
      </MobileView>
    </div>
  );
}
