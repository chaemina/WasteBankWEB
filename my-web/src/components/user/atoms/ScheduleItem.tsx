import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomText from "../../common/atoms/CustomText";
import icon_search from "../../../assets/images/icon_search.svg";
import CircleImage from "../../common/atoms/CircleImage";
import icon_fill_star from "../../../assets/images/icon_fill_star.svg";
import { scale, verticalScale } from "../../../utils/Scale";

const ItemContainer = styled.div`
  background-color: #40892d;
  width: ${scale(320)}px;
  border-radius: 20px;
`;

const SearchButton = styled.button`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  background-color: white;
  border-radius: 13px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const DayContainer = styled.div`
  display: flex;
  height: ${verticalScale(30)}px;
  padding: ${scale(10)}px;
  justify-content: space-between;
  align-items: center;
  border-bottom: white 2px solid;
`;

const CollectorInfo = styled.div`
  display: flex;
  align-items: center;
  padding: ${scale(5)}px;
`;

const StarBtn = styled.button`
  width: ${scale(50)}px;
  height: ${scale(50)}px;
  background: none;
  border-radius: 15px;
  border: none;
`;

type ScheduleItemProps = {
  day: string;
  collector_name: string;
  search?: boolean;
  done?: boolean;
  accept?: boolean;
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  day,
  collector_name,
  search,
  done,
  accept,
}) => {
  const nav = useNavigate();

  return (
    <ItemContainer>
      <DayContainer>
        <CustomText color="white" bold={true} size="title">
          {day}
        </CustomText>
        {accept && done ? (
          <StarBtn onClick={() => nav(`/rating`)}>
            <img width="100%" src={icon_fill_star} />
          </StarBtn>
        ) : (
          search && (
            <SearchButton onClick={() => nav(`/detailpickup`)}>
              <img style={{ width: "100%" }} src={icon_search} />
            </SearchButton>
          )
        )}
      </DayContainer>
      <CollectorInfo>
        <CircleImage width={30} height={30} role="collector" />
        <CustomText color="white">{collector_name}</CustomText>
      </CollectorInfo>
    </ItemContainer>
  );
};

export default ScheduleItem;
