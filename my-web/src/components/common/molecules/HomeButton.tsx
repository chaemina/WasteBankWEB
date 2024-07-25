import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../atoms/CustomButton";
import CustomText from "../atoms/CustomText";
import icon_bin from "../../../assets/images/icon_bin.svg";
import icon_pickup from "../../../assets/images/icon_pickup.svg";
import icon_schedule from "../../../assets/images/icon_schedule.svg";
import icon_saving from "../../../assets/images/icon_saving.svg";

const ButtonContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
`;

const Button = styled(CustomButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const onClickButton = () => {};

const HomeButton = () => {
  const nav = useNavigate();

  return (
    <ButtonContainer>
      <Button rounded={true} onClick={() => nav(`/garbagebin`)}>
        <img src={icon_bin} />
        <CustomText color="white" size="body">
          Garbage bin
        </CustomText>
      </Button>
      <Button rounded={true} onClick={() => nav(`/pickup/>`)}>
        <img src={icon_pickup} />
        <CustomText color="white" size="body">
          Pick-up
        </CustomText>
      </Button>
      <Button rounded={true} onClick={onClickButton}>
        <img src={icon_schedule} />
        <CustomText color="white" size="body">
          Schedule
        </CustomText>
      </Button>
      <Button rounded={true} onClick={onClickButton}>
        <img src={icon_saving} />
        <CustomText color="white" size="body">
          My saving
        </CustomText>
      </Button>
    </ButtonContainer>
  );
};

export default HomeButton;
