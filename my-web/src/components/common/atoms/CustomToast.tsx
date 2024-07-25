import React, { useState, useEffect } from "react";
import CustomText from "../atoms/CustomText";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ToastContainer = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: row;
  position: absolute;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 183, 59, 0.5);
  width: 90%;
  height: 80px;
  left: 5%;
  padding: 15px;
  animation: ${({ visible }) => (visible ? fadeIn : fadeOut)} 0.5s forwards;
`;

const ToastIcon = styled.div`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ToastText = styled(CustomText)`
  flex: 1;
  flex-wrap: wrap;
  font-size: 16px;
`;

type CustomToastProps = {
  message: string;
  visible: boolean;
  duration?: number;
};

const CustomToast: React.FC<CustomToastProps> = ({
  message,
  visible,
  duration = 5000,
}) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    let timeout: any;
    if (visible) {
      setShow(true);
      timeout = setTimeout(() => {
        setShow(false);
      }, duration); // 5초 + 애니메이션 시간 0.5초
    }
    return () => clearTimeout(timeout);
  }, [visible, duration]);

  if (!show) {
    return null;
  }

  return (
    <ToastContainer visible={visible}>
      <ToastIcon></ToastIcon>
      <ToastText>{message}</ToastText>
    </ToastContainer>
  );
};

export default CustomToast;
