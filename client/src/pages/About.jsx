import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  DropDown,
  IoIosArrowForward,
  IoMdArrowDropright,
  BsPencilSquare,
  AiFillCode,
  FaGamepad,
  RiFolder3Fill,
} from "../utils/exports";
import { IconContext } from "react-icons";
import clsx from "clsx";
import aboutStyles from "../styles/aboutStyles.module.scss";

function About() {
  const [personalInfoClicked, setPersonalInfoClicked] = useState(false);
  const [bioClicked, setBioClicked] = useState(false);
  const [skillsClicked, setSkillsClicked] = useState(false);
  const [projectsClicked, setProjectsClicked] = useState(false);

  const showDropdown = (e) => {
    if (e.target.id === "personalInfo") {
      setPersonalInfoClicked(!personalInfoClicked);
    } else if (e.target.id === "bio") {
      setBioClicked(!bioClicked);
    } else if (e.target.id === "skills") {
      setSkillsClicked(!skillsClicked);
    } else if (e.target.id === "projects") {
      setProjectsClicked(!projectsClicked);
    }
  };

  const showTabs = () => {
    setPersonalInfoClicked(!personalInfoClicked);
  };
  return (
    <div className={aboutStyles.mainContainer}>
      <Row className={aboutStyles.row}>
        <Col lg={3} xl={2} md={3} className={aboutStyles.col1}>
          <div className={aboutStyles.mainLeft}>
            <div className={aboutStyles.leftIcons}>
              <IconContext.Provider value={{ size: "1.7rem" }}>
                <AiFillCode className={aboutStyles.codeIcon} />
                <FaGamepad className={aboutStyles.gameIcon} />
                <BsPencilSquare className={aboutStyles.blogIcon} />
              </IconContext.Provider>
            </div>
            <div className={aboutStyles.rightTabs}>
              <div className={aboutStyles.dropDownContainer}>
                <div className={aboutStyles.dropDown1} onClick={showTabs}>
                  <IconContext.Provider
                    value={{ size: "1.4em", color: "white" }}
                  >
                    <IoMdArrowDropright
                      className={clsx({
                        [aboutStyles.clicked]: personalInfoClicked,
                        [aboutStyles.notClicked]: !personalInfoClicked,
                      })}
                    />
                  </IconContext.Provider>
                  <p>personal-info</p>
                </div>
                {personalInfoClicked && (
                  <>
                    {/* <------------- bio dropdown -------------> */}
                    <IconContext.Provider
                      value={{ size: "1.4em", color: "rgb(233,146,135)" }}
                    >
                      <DropDown title={"bio"} icon={<RiFolder3Fill />} />
                    </IconContext.Provider>
                    {/* <------------- interests dropdown -------------> */}
                    <IconContext.Provider
                      value={{ size: "1.4em", color: "rgb(67,217,173)" }}
                    >
                      <DropDown title={"interests"} icon={<RiFolder3Fill />} />
                    </IconContext.Provider>
                    {/* <------------- education dropdown -------------> */}
                    <IconContext.Provider
                      value={{ size: "1.4em", color: "rgb(58,73,164)" }}
                    >
                      <DropDown title={"education"} icon={<RiFolder3Fill />} />
                    </IconContext.Provider>
                  </>
                )}
              </div>
              <div className={aboutStyles.dropDown2}>shitr</div>
            </div>
          </div>
        </Col>
        <Col lg={5} md={4} className={aboutStyles.col2}>
          two
        </Col>
        <Col lg={5} md={5} className={aboutStyles.col3}>
          three
        </Col>
      </Row>
    </div>
  );
}

export default About;
