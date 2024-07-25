import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomText from "../../common/atoms/CustomText";
import icon_search from "../../../assets/images/icon_search.svg";
import CircleImage from "../../common/atoms/CircleImage";

const ItemContainer = styled.div`
  background-color: #40892d;
  width: 100%;
  border-radius: 20px;
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const DayContainer = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  border-bottom: white 2px solid;
`;

const CollectorInfo = styled.div`
  display: flex;
  align-items: center;
`;

type ScheduleItemProps = {
  day: string;
  collector_name: string;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({ day, collector_name }) => {
  const nav = useNavigate();

  return (
    <ItemContainer>
      <DayContainer>
        <CustomText color="white" bold={true} size="title">
          {day}
        </CustomText>
        <SearchButton onClick={() => nav(`/detailpickup`)}>
          <img style={{ width: "100%" }} src={icon_search} />
        </SearchButton>
      </DayContainer>
      <CollectorInfo>
        <CircleImage width={40} height={40} role="collector" />
        <CustomText color="white">{collector_name}</CustomText>
      </CollectorInfo>
    </ItemContainer>
  );
};

export default ScheduleItem;
