import styled from "styled-components";
import icon_recycle from "../assets/images/icon_recycle.svg";
import CustomText from "../components/common/atoms/CustomText";
import CustomButton from "../components/common/atoms/CustomButton";
import LoginForm from "../components/common/atoms/LoginForm";
import Container from "../components/common/atoms/Container";

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const SignupBtn = styled.button`
  background: none;
  border: none;
`;

const LoginTitle = () => {
  return (
    <LoginContainer>
      <img src={icon_recycle} />
      <CustomText size="title" color="#40892d" bold>
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
      <CustomButton size="sm" rounded onClick={() => {}}>
        <CustomText color="white">Masuk</CustomText>
      </CustomButton>
      <LoginContainer>
        <CustomText>Don't have an account yet?</CustomText>
        <SignupBtn>
          <CustomText color="#40982d" bold>
            Sign up
          </CustomText>
        </SignupBtn>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
