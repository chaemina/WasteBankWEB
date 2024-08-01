import React from "react";
import styled from "styled-components";
import ScheduleItem from "../atoms/ScheduleItem";
import { verticalScale } from "../../../utils/Scale";

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${verticalScale(15)}px;
`;

const scheduleData = [
  { day: "Monday", collector_name: "Collector A", done: true },
  { day: "Tuesday", collector_name: "Collector B", done: false },
  { day: "Wednesday", collector_name: "Collector C", done: false },
  { day: "Thursday", collector_name: "Collector D", done: false },
  { day: "Friday", collector_name: "Collector E", done: false },
];

type ScheduleListProps = {
  search?: boolean;
  accept?: boolean;
};

const ScheduleList: React.FC<ScheduleListProps> = ({ search, accept }) => {
  return (
    <ScheduleContainer>
      {scheduleData.map((item, index) => (
        <ScheduleItem
          key={index}
          day={item.day}
          collector_name={item.collector_name}
          done={item.done}
          search={search}
          accept={accept}
        />
      ))}
    </ScheduleContainer>
  );
};

export default ScheduleList;
