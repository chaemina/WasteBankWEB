import styled from "styled-components";
import icon_recycle from "../assets/images/icon_recycle.svg";
import LoginForm from "../components/common/molecules/LoginForm";
import Container from "../components/common/atoms/Container";
import { moderateScale, scale } from "../utils/Scale";
import CustomTitle from "../components/common/atoms/CustomTitle";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: ${scale(10)}px;
  gap: ${scale(5)}px;
`;

const LoginTitle = () => {
  return (
    <LoginContainer>
      <img src={icon_recycle} width={moderateScale(60,0.3)} height={moderateScale(60,0.3)} />
      <CustomTitle>LOGIN </CustomTitle>
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
