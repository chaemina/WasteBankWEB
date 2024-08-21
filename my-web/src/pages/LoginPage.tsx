import styled from "styled-components";
import icon_recycle from "../assets/images/icon_recycle.svg";
import CustomText from "../components/common/atoms/CustomText";
import LoginForm from "../components/common/molecules/LoginForm";
import Container from "../components/common/atoms/Container";
import { scale, verticalScale } from "../utils/Scale";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: ${verticalScale(90)}px;
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

const LoginPage = () => {
  return (
    <Container>
      <LoginTitle />
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
