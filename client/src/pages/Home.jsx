import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeStyles from "../styles/homeStyles.module.scss";
import homeImg from "../images/homeImg.png";

function Home() {
  return (
    <Container fluid className={homeStyles.homeContainer}>
      <Row className={homeStyles.row1}>
        {/*breakpoints need to go in the row, nopt column*/}
        <Col id={homeStyles.col1} lg={4} md={6}>
          <div className={homeStyles.mainLeft}>
            <p>Hi all. I am</p>
            <h1>William Botbyl</h1>
            <h2>{">"}&nbsp;Jr. Software Engineer</h2>
            <br />
            <br />
          </div>
        </Col>
        <Col className={homeStyles.imgColumn} lg={6} md={6}>
          <div>
            <img className={homeStyles.img} src={homeImg} alt="hom-right" />
          </div>
        </Col>
      </Row>
      <Row className={homeStyles.row2}>
        <Col id={homeStyles.col2} lg={4} md={6}>
          <div className={homeStyles.mainBottom}>
            <div className={homeStyles.comments}>
              {"//"}&nbsp;B.S. in Software Engineering
            </div>
            <div className={homeStyles.comments}>
              {"//"}&nbsp;Current student at Monmouth University
            </div>
            <div>
              <div className={homeStyles.gHubLink}>
                <span className={homeStyles.const}>const</span>&nbsp;
                <span className={homeStyles.github}>github</span>&nbsp;
                {"="}&nbsp;
                <p className={homeStyles.githubLink}>
                  "https://github.com/williamBotbyl"
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
