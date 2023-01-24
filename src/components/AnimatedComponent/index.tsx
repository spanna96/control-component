import React, { useEffect, useState } from "react";

import "./_AnimatedComponent.sass";

type Props = {
  condition: boolean;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

const AnimatedComponent = ({
  condition,
  duration = 0.15,
  delay = 0.1,
  children,
}: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!condition) {
      setTimeout(() => {
        setShow(false);
      }, delay * 1500);
    } else {
      setShow(condition);
    }
  }, [condition]);

  return (
    <div
      className={`AnimatedComponent ${condition && "visible"}`}
      style={{ transition: `all ${duration}s ease ${delay}s` }}
    >
      {show && children}
    </div>
  );
};

export default AnimatedComponent;
