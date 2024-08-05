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

  // 로그인 성공 시
  // 1. Home으로 이동 (Role에 따라 다른 화면 로딩)
  // 2. Role은 처음에 한번 응답 받고, 스토리지에 저장해서 사용하는게 빠를 듯 
  // 3. token 로컬 스토리지에 저장 & 앱에 전달(앱에서 스토리지에 토큰 저장되는지에 따라서)

  const handleSignUpClick = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("Signup");
    }
  };

  return (
    <Container>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <LoginTitle />
        <LoginForm />
        <ButtonContainer>
          <CustomButton label="Masuk" size="sm" rounded />
          <CustomButton
            style={{ border: "2px solid #40892d" }}
            color="white"
            label="Sign up"
            size="sm"
            rounded
            onClick={handleSignUpClick}
          />
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default LoginPage;
