import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomButton from "../atoms/CustomButton";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AlertBox = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 28px;
  border: 3px solid #40892d;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AlertButtonContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`;

const Spacer = styled.div`
  width: 30px;
`;

export type AlertProps = {
  title: string;
  text: string;
  visible: boolean;
  onClose: () => void;
};

const CustomAlert: React.FC<AlertProps> = ({
  title,
  text,
  visible,
  onClose,
}) => {
  if (!visible) return null;

  return (
    <ModalBackground>
      <AlertBox>
        <CustomText bold={true} size="title" color="#40892d">
          {title}
        </CustomText>
        <CustomText size="body" color="#000">
          {text}
        </CustomText>
        <AlertButtonContainer>
          <CustomButton
            size="xs"
            label="Okay"
            onClick={onClose}
            color="#40892d"
          />
          <Spacer />
          <CustomButton size="xs" label="No" onClick={onClose} color="#fff" />
        </AlertButtonContainer>
      </AlertBox>
    </ModalBackground>
  );
};

export default CustomAlert;
