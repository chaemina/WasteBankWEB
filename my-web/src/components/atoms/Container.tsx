import React, { ReactNode } from "react";
import styled from "styled-components";
import { scale,useViewport } from "../../utils/Scale";

type ContainerProps = {
  children: ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  const { width, height } = useViewport();

  return (
    <SafeArea>
      <CustomView width={width} height={height}>
        {children}
      </CustomView>
    </SafeArea>
  );
};

const SafeArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CustomView = styled.div<{ width: number; height: number }>`
  width: ${(props) => props.width}px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${(props) => scale(20, props.width)}px;
`;

export default Container;
