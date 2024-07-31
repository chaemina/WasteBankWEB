import styled from "styled-components";
import icon_password from "../../../assets/images/icon_password.svg";
import icon_user_black from "../../../assets/images/icon_user_black.svg";
import CustomInput from "./CustomInput";
import { useState } from "react";

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
  padding: 5px;
  margin: 10px;
  border-radius: 20px;
  background-color: #fff;
  width: 250px;
  box-sizing: border-box;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin: 5px 10px;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <InputWrapper>
        <Icon src={icon_user_black} />
        <CustomInput
          placeholder="Username..."
          onChange={(value) => setUsername(value)}
          style={{ border: "none", outline: "none", flex: 1, padding: 0 }}
        />
      </InputWrapper>
      <InputWrapper>
        <Icon src={icon_password} />
        <CustomInput
          placeholder="Password..."
          onChange={(value) => setPassword(value)}
          style={{ border: "none", outline: "none", flex: 1, padding: 0 }}
        />
      </InputWrapper>
    </LoginContainer>
  );
};

export default LoginForm;
