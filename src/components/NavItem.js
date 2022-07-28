import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const DesktopNavItem = () => {
  return (
    <div>
      Logo <AiOutlineHome />
    </div>
  );
};

const MobileNavItem = () => {
  return (
    <div>
      <AiOutlineHome />
    </div>
  );
};

export { DesktopNavItem, MobileNavItem };
