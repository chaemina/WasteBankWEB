import React from "react";
import Container from "../components/Container";
import CustomButton from "../components/CustomButton";
import CustomText from "../components/CustomText";

const HomePage: React.FC = () => {
  return (
    <>
      <Container>
        <CustomText size="title">텍스트</CustomText>
        <CustomText size="body">텍스트</CustomText>
        <CustomButton size="md" onClick={() => {}}>
          버튼
        </CustomButton>
      </Container>
    </>
  );
};

export default HomePage;
