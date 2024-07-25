import React from "react";
import styled from "styled-components";
import ScheduleItem from "../atoms/ScheduleItem";

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px; /* 각 ScheduleItem 간격을 조정할 수 있습니다. */
`;

const scheduleData = [
  { day: "Monday", collector_name: "Collector A" },
  { day: "Tuesday", collector_name: "Collector B" },
  { day: "Wednesday", collector_name: "Collector C" },
  { day: "Thursday", collector_name: "Collector D" },
  { day: "Friday", collector_name: "Collector E" },
];

const ScheduleList = () => {
  return (
    <ScheduleContainer>
      {scheduleData.map((item, index) => (
        <ScheduleItem
          key={index}
          day={item.day}
          collector_name={item.collector_name}
        />
      ))}
    </ScheduleContainer>
  );
};

export default ScheduleList;
