import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScheduleItem from "../atoms/ScheduleItem";
import { verticalScale } from "../../../utils/Scale";
import { instance } from "../../../apis/instance";

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${verticalScale(15)}px;
`;

type GarbageData = {
  garbageId: number;
  matched: boolean;
  collectorName: string;
  collectionDayOfWeek: string;
  collectionStatus: "수거 시작 전" | "수거중" | "수거 완료";
};

type ScheduleListProps = {
  filterMatched: boolean;
};

const ScheduleList: React.FC<ScheduleListProps> = ({ filterMatched }) => {
  const [scheduleData, setScheduleData] = useState<GarbageData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await instance.get("/api/garbages/registered");
        if (response.data.success) {
          let data: GarbageData[] = response.data.response;
          if (filterMatched) {
            data = data.filter((item) => item.matched);
          }
          setScheduleData(data);
        } else {
          console.log(response.data.error);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filterMatched]);

  return (
    <ScheduleContainer>
      {scheduleData.map((item) => (
        <ScheduleItem
          key={item.garbageId}
          garbageId={item.garbageId}
          day={item.collectionDayOfWeek}
          collector={item.collectorName}
          status={item.collectionStatus}
        />
      ))}
    </ScheduleContainer>
  );
};

export default ScheduleList;
