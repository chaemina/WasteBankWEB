import styled from "styled-components";
import icon_recycle from "../assets/images/icon_recycle.svg";
import CustomText from "../components/common/atoms/CustomText";
import CustomButton from "../components/common/atoms/CustomButton";
import LoginForm from "../components/common/molecules/LoginForm";
import Container from "../components/common/atoms/Container";
import { scale, verticalScale } from "../utils/Scale";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: ${verticalScale(100)}px;
  margin-bottom: ${verticalScale(50)}px;
  gap: ${scale(10)}px;
`;

const LoginTitle = () => {
  return (
    <LoginContainer>
      <img src={icon_recycle} />
      <CustomText style={{ fontSize: `${scale(40)}px` }} color="#40892d" bold>
        LOGIN
      </CustomText>
    </LoginContainer>
  );
};

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${verticalScale(15)}px;
  margin-top: ${verticalScale(30)}px;
`;

const LoginPage = () => {
  return (
    <Container>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <LoginTitle />
        <LoginForm />
        <ButtonContainer>
          <CustomButton label="Masuk" size="sm" rounded onClick={() => {}} />
          <CustomButton
            style={{ border: "2px solid #40892d" }}
            color="white"
            label="Sign up"
            size="sm"
            rounded
            onClick={() => {}}
          />
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default LoginPage;
