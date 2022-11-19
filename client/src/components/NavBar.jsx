import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { bubble as Menu } from "react-burger-menu";
import { Squash as Hamburger } from "hamburger-react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ResponsiveNav } from "../utils/exports";
import NavStyles from "../styles/NavStyles.module.scss";
import "../styles/testing.scss";

function NavBar() {
  const [sm, setSm] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // setting sm in localstorage due to refresh issue
  useEffect(() => {
    const sm = localStorage.getItem("sm");
    if (sm) {
      setSm(JSON.parse(sm));
    }
  }, []);
  //window resize handler
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setSm(true);
        window.localStorage.setItem("sm", sm);
      } else if (window.innerWidth > 768) {
        setSm(false);
        window.localStorage.setItem("sm", sm);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth <= 768) {
          setSm(true);
        } else {
          setSm(false);
        }
      });
    };
  }, [sm]);

  return (
    <>
      {!sm ? (
        <Navbar className={NavStyles.navbar}>
          <Navbar.Brand className={NavStyles.brand} href="/">
            _William-Botbyl
          </Navbar.Brand>
          <Container className={NavStyles.container}>
            <Nav className={NavStyles.nav}>
              <div className={NavStyles.linkWrapper}>
                <Nav.Link className={NavStyles.link} href="/about">
                  _hello-world
                </Nav.Link>
              </div>
              <div className={NavStyles.linkWrapper}>
                <Nav.Link className={NavStyles.link} href="/about">
                  _about
                </Nav.Link>
              </div>
              <div className={NavStyles.linkWrapper}>
                <Nav.Link className={NavStyles.link} href="/contact">
                  _projects
                </Nav.Link>
              </div>
              <div className={NavStyles.linkContact}>
                <Nav.Link className={NavStyles.link} href="/contact">
                  _contact
                </Nav.Link>
              </div>
            </Nav>
          </Container>
        </Navbar>
      ) : (
        <div className={NavStyles.hamburgerWrapper}>
          <Hamburger
            rounded
            color="rgb(96, 123, 150)"
            style={{ margin: "0px 0px 0px 0px" }}
            toggle={setShowMenu}
            toggled={showMenu}
          />
        </div>
      )}
      {showMenu && sm && (
        <>
          <ResponsiveNav
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            NavStyles={NavStyles}
          />
        </>
      )}
    </>
  );
}

export default NavBar;
