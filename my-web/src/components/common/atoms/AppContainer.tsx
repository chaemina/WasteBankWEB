import React from "react";
import Container from "./Container";
import CustomText from "./CustomText";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const AppContainer: React.FC = () => {
  return (
    <Container>
      {isMobile ? null : (
        <CustomText size="title">웹에서는 실행 할 수 없는 기능입니다.</CustomText>
      )}
    </Container>
  );
};

export default AppContainer;
