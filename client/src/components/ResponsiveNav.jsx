import React from "react";
import { bubble as Menu } from "react-burger-menu";
import { Nav } from "react-bootstrap";

var styles = {
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
    innerWidth: "10%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgb(1, 22, 39)",
    innerWidth: "10%",
  },
};

function ResponsiveNav({ showMenu, setShowMenu, NavStyles }) {
  return (
    <Menu
      styles={styles}
      disableOverlayClick
      noOverlay
      pageWrapId={"page-wrap"}
      isOpen={showMenu}
      onStateChange={(state) => setShowMenu(state.isOpen)}
    >
      <div className={NavStyles.menu}>
        <Nav.Link className={NavStyles.link} href="/about">
          _hello-world
        </Nav.Link>
        <Nav.Link className={NavStyles.link} href="/about">
          _about
        </Nav.Link>
        <Nav.Link className={NavStyles.link} href="/contact">
          _projects
        </Nav.Link>
        <Nav.Link className={NavStyles.link} href="/contact">
          _contact
        </Nav.Link>
      </div>
    </Menu>
  );
}

export default ResponsiveNav;
