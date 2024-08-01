import styled from "styled-components";
import icon_password from "../../../assets/images/icon_password.svg";
import icon_user_black from "../../../assets/images/icon_user_black.svg";
import CustomInput from "../atoms/CustomInput";
import { scale, verticalScale } from "../../../utils/Scale";

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

const LoginForm = () => {
  return (
    <LoginContainer>
      <InputWrapper>
        <Icon src={icon_user_black} />
        <CustomInput placeholder="Username..." />
      </InputWrapper>
      <InputWrapper>
        <Icon src={icon_password} />
        <CustomInput placeholder="Password..." />
      </InputWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
