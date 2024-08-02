import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import styled from "styled-components";
import Header from "../components/common/molecules/Header";
import { verticalScale } from "../utils/Scale";

const SavingBox = styled.div`
  width: 100%;
  margin-top: ${verticalScale(30)}px;
  height: ${verticalScale(130)}px;
  color: white;
  background-color: #40892d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySavingPage = () => {
  return (
    <Container>
      <Header title="My saving" />
      <CustomText color="black" bold>
        Total yang didapatkan
      </CustomText>
      <SavingBox>
        <CustomText color="white" size="title" bold>
          Rp.140.000
        </CustomText>
      </SavingBox>
    </Container>
  );
};

export default MySavingPage;
