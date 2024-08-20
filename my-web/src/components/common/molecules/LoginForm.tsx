import styled from "styled-components";
import icon_password from "../../../assets/images/icon_password.svg";
import icon_user_black from "../../../assets/images/icon_user_black.svg";
import CustomInput from "../atoms/CustomInput";
import { scale, verticalScale } from "../../../utils/Scale";
import { instance } from "../../../apis/instance";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../atoms/CustomButton";
import CustomText from "../atoms/CustomText";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1.8px solid #acacac;
  padding: ${verticalScale(5)}px;
  margin: ${verticalScale(10)}px;
  border-radius: 20px;
  background-color: #fff;
  width: ${scale(280)}px;
  height: ${verticalScale(60)}px;
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: ${scale(30)}px;
  height: ${scale(30)}px;
  margin: ${verticalScale(5)}px;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: ${verticalScale(10)}px;
  margin-top: ${verticalScale(30)}px;
`;

const LoginForm = () => {
  // 로그인 성공 시
  // 1. Home으로 이동 (Role에 따라 다른 화면 로딩)
  // 2. Role은 처음에 한번 응답 받고, 스토리지에 저장해서 사용하는게 빠를 듯
  // 3. token 로컬 스토리지에 저장 & 앱에 전달(앱에서 스토리지에 토큰 저장되는지에 따라서)

  const handleSignUpClick = () => {
    if (window.ReactNativeWebView) {
      const message = JSON.stringify({
        type: "NAVIGATE",
        destination: "RoleSelect",
      });
      window.ReactNativeWebView.postMessage(message);
    }
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await instance.post("/api/login", { email, password });
      if (response.data.success) {
        const { token } = response.data.response;
        localStorage.setItem("auth", token);

        if (window.ReactNativeWebView) {
          const message = JSON.stringify({
            type: "TOKEN",
            token: token,
          });
          window.ReactNativeWebView.postMessage(message);
        }
      } else {
        setError("ID atau kata sandi yang Anda masukkan salah.");
      }
    } catch (error) {
      setError("ID atau kata sandi yang Anda masukkan salah.");
      console.log(error);
    }
  };

  return (
    <LoginContainer>
      <InputWrapper>
        <Icon src={icon_user_black} />
        <CustomInput
          placeholder="Username..."
          keyboardType="email"
          onChange={(value) => setEmail(value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Icon src={icon_password} />
        <CustomInput
          placeholder="Password..."
          keyboardType="password"
          onChange={(value) => setPassword(value)}
        />
      </InputWrapper>
      <ButtonContainer>
        <CustomButton label="Masuk" size="sm" rounded onClick={handleLogin} />
        <CustomButton
          style={{ border: "2px solid #40892d" }}
          color="white"
          label="Sign up"
          size="sm"
          rounded
          onClick={handleSignUpClick}
        />
        {error && (
          <CustomText size="caption" color="red">
            {error}
          </CustomText>
        )}
      </ButtonContainer>
    </LoginContainer>
  );
};

export default LoginForm;
