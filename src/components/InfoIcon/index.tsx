import React, { useState } from "react";
import { BsInfoCircle, BsXCircle } from "react-icons/bs";

import "./_InfoIcon.sass";

const InfoIcon = () => {
  const iconColor = "#8d9397";
  const [infoClicked, setInfoClicked] = useState(false);

  const toggleInfo = (e: React.MouseEvent) => {
    e.preventDefault();
    setInfoClicked(!infoClicked);
  };

  const iconProps = {
    onClick: (e: React.MouseEvent) => toggleInfo(e),
    color: iconColor,
    size: "16px",
  };

  const Popover = ({ show }: { show: boolean }) => (
    <div className={`popover ${show && "shown"}`}>
      МРОТ - минимальный размер оплаты труда. Разный для разных регионов.
    </div>
  );

  return (
    <div className="InfoIcon">
      <div className="InfoIcon-icon">
        {infoClicked ? (
          <BsXCircle {...iconProps} />
        ) : (
          <BsInfoCircle {...iconProps} />
        )}

        <Popover show={infoClicked} />
      </div>
    </div>
  );
};

export default InfoIcon;
