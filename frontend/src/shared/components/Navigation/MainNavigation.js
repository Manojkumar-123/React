import React, { useState } from "react";

import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawer] = useState(false);

  const onMenuBtnClick = () => {
    setDrawer(drawerIsOpen ? false : true);
  }

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={onMenuBtnClick}/>}
      {drawerIsOpen ? (
        <SideDrawer show={drawerIsOpen} onClick={onMenuBtnClick}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks></NavLinks>
          </nav>
        </SideDrawer>
      ) : null}
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={onMenuBtnClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Place</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
