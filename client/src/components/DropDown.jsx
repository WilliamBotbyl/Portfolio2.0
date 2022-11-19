import React, { useState } from "react";
import { IoIosArrowForward } from "../utils/exports";
import dropStyles from "../styles/DropDown.module.scss";
import clsx from "clsx";

function DropDown({ title, icon, dropdownTab }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className={dropStyles.container}>
      <div onClick={handleClick} className={dropStyles.tabInfoContainer}>
        <div
          className={clsx({
            [dropStyles.arrowClicked]: clicked,
          })}
        >
          <IoIosArrowForward style={{ color: "rgb(96, 123, 150)" }} />
        </div>
        <span>{icon}</span>
        <p>{title}</p>
      </div>
      {clicked && <div className={dropStyles.tabInfo}>{dropdownTab}</div>}
    </div>
  );
}

export default DropDown;
