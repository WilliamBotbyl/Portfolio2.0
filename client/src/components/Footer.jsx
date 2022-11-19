import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
// impor iconContext from react-icons
import { IconContext } from "react-icons";
import footerStyles from "../styles/footerStyles.module.scss";

function Footer() {
  return (
    // <div id={footerStyles.footerContainer}>
    <IconContext.Provider
      value={{ size: "1.4rem", color: "rgb(96, 123, 150)" }}
    >
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.linkWrapper}>
          <div className={footerStyles.findmeWrapper}>
            <p>find me in:</p>
          </div>
          <div className={footerStyles.twitterWrapper}>
            <AiOutlineTwitter />
          </div>
          <div className={footerStyles.linkedInWrapper}>
            <AiFillLinkedin />
          </div>
          <div className={footerStyles.userNameWrapper}>
            <p>@WilliamBotbyl</p>
            <AiFillGithub style={{ marginLeft: "1rem" }} />
          </div>
        </div>
      </div>
    </IconContext.Provider>
    // </div>
  );
}

export default Footer;
