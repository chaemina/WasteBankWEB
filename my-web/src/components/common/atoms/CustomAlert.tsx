import React from "react";
import styled from "styled-components";
import CustomText from "../atoms/CustomText";
import CustomButton from "../atoms/CustomButton";
import { scale } from "../../../utils/Scale";

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
  width: ${scale(250)}px;
  height: ${scale(150)}px;
  border-radius: 28px;
  border: 3px solid #40892d;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const AlertButtonContainer = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  display: flex;
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
          <CustomButton
            size="xs"
            style={{ border: "3px solid #40892d" }}
            label="No"
            onClick={onClose}
            color="white"
          />
        </AlertButtonContainer>
      </AlertBox>
    </ModalBackground>
  );
};

export default CustomAlert;
