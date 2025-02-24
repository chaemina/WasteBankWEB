import React from "react";
import styled from "styled-components";
import icon_user from "../../../assets/images/icon_user.svg";
import icon_collector from "../../../assets/images/icon_collector.svg";
import { scale } from "../../../utils/Scale";

const Circle = styled.div<{ width: number; height: number }>`
  display: flex;
  width: ${(props) => (props.width ? `${scale(props.width)}px` : "")};
  height: ${(props) => (props.height ? `${scale(props.width)}px` : "")};
  border-radius: 50%;
  background-color: #40892d;
  border: none;
  align-items: center;
  justify-content: center;
  padding: ${scale(10)}px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

type CircleImageProps = {
  role: string;
  width: number;
  height: number;
};

const CircleImage: React.FC<CircleImageProps> = ({ role, width, height }) => {
  return (
    <>
      <Circle width={width} height={height}>
        <Image src={role === "collector" ? icon_collector : icon_user} />
      </Circle>
    </>
  );
};

export default CircleImage;
