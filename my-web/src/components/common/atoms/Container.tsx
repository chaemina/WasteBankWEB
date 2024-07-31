import React, { ReactNode, CSSProperties } from "react";
import { scale, width } from "../../../utils/Scale";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const customStyle: CSSProperties = {
    width: width,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: scale(10),
    justifyContent: "center",
  };

  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={customStyle}>{children}</div>
      </div>
    </div>
  );
};

export default Container;
