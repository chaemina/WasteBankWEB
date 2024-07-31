import React from "react";
import styled from "styled-components";
import ScheduleList from "../components/user/molecules/ScheduleList";
import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import CustomText from "../components/common/atoms/CustomText";

const SchedulePage = () => {
  return (
    <Container>
      <Identification role="user" />
      <CustomText size="title" bold color="#40892d">
        garbage collection schedule
      </CustomText>
      <ScheduleList />
    </Container>
  );
};

export default SchedulePage;
