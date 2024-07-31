import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import CustomText from "../atoms/CustomText";
import icon_bin from "../../../assets/images/icon_bin.svg";
import icon_pickup from "../../../assets/images/icon_pickup.svg";
import icon_schedule from "../../../assets/images/icon_schedule.svg";
import icon_saving from "../../../assets/images/icon_saving.svg";
import { scale } from "../../../utils/Scale";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
  gap: ${scale(20)}px;
`;

const Button = styled(CustomButton)`
  width: ${scale(170)}px;
  height: ${scale(170)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const onClickButton = () => {};

type PageButtonProps = {
  icon: string;
  button_name: string;
  page: string;
};

const PageButton: React.FC<PageButtonProps> = ({ icon, button_name, page }) => {
  const nav = useNavigate();
  return (
    <Button rounded={true} onClick={() => nav(`/${page}`)}>
      <img src={icon} />
      <CustomText color="white" size="body">
        {button_name}
      </CustomText>
    </Button>
  );
};

const HomeButton = () => {
  return (
    <ButtonContainer>
      <PageButton icon={icon_bin} button_name="Garbage bin" page="garbagebin" />
      <PageButton icon={icon_pickup} button_name="Pick-up" page="pickup" />
      <PageButton icon={icon_schedule} button_name="Schedule" page="schedule" />
      <PageButton icon={icon_saving} button_name="My saving" page="mysaving" />
    </ButtonContainer>
  );
};

export default HomeButton;
