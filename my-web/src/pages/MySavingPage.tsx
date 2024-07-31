import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import styled from "styled-components";

const SavingBox = styled.div`
  width: 100%;
  height: 120px;
  color: white;
  background-color: #40892d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySavingPage = () => {
  return (
    <Container>
      <CustomText color="#40892d" size="title" bold>
        My Saving
      </CustomText>
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
