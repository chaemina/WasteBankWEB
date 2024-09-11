import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomText from "../../common/atoms/CustomText";
import icon_search from "../../../assets/images/icon_search.svg";
import CircleImage from "../../common/atoms/CircleImage";
import icon_fill_star from "../../../assets/images/icon_fill_star.svg";
import { scale, verticalScale } from "../../../utils/Scale";
import { dayTranslation } from "../../../utils/DayTranslation";


const ItemContainer = styled.div`
  background-color: #40892d;
  width: ${scale(320)}px;
  border-radius: 20px;
`;

export const SearchBtn = styled.button`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  background-color: white;
  border-radius: 13px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
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
  garbageId: number;
  day: string;
  collector: string;
  status: "수거 시작 전" | "수거중" | "수거 완료";
};

const ScheduleItem: React.FC<ScheduleItemProps> = ({
  garbageId,
  day,
  collector,
  status,
}) => {
  const nav = useNavigate();

  const translatedDay = dayTranslation[day] || day; 

  return (
    <ItemContainer>
      <DayContainer>
        <CustomText color="white" bold={true} size="title">
          {translatedDay}
        </CustomText>
        {status === "수거 완료" ? (
          <StarBtn onClick={() => nav(`/rating/${garbageId}`)}>
            <img width="100%" src={icon_fill_star} />
          </StarBtn>
        ) : (
          status === "수거중" && (
            <SearchBtn onClick={() => nav(`/detailpickup/${garbageId}`)}>
              <img style={{ width: "100%" }} src={icon_search} />
            </SearchBtn>
          )
        )}
      </DayContainer>
      <CollectorInfo>
        <CircleImage width={30} height={30} role="collector" />
        <CustomText color="white">{collector}</CustomText>
      </CollectorInfo>
    </ItemContainer>
  );
};

export default ScheduleItem;
