import React, { useState } from "react";
import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import ScheduleList from "../components/user/molecules/ScheduleList";

const PickupPage = () => {
  const [schedule, setSchedule] = useState([]);

  return (
    <Container>
      <Identification role="user" name="Waste collection schedule" />
      <ScheduleList />
    </Container>
  );
};

export default PickupPage;
