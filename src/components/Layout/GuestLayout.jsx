import React from "react";
import { Outlet } from "react-router-dom";

function GuestLayout() {
  return (
    <>
      <div id="root">
        <Outlet />
      </div>
    </>
  );
}

export default GuestLayout;
