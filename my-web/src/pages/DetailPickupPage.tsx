import React from "react";
import styled from "styled-components";
import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import Identification from "../components/common/molecules/Identification";
import CustomButton from "../components/common/atoms/CustomButton";
import { useNavigate } from "react-router-dom";
import icon_pickup from "../assets/images/icon_pickup.svg";

const KonfirmButton = styled(CustomButton)`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const DetailPickupPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <CustomText
        style={{ marginBottom: "20px" }}
        bold
        color="#40892d"
        size="title"
      >
        Detail Pick-up
      </CustomText>
      <CustomText style={{ marginBottom: "20px" }} bold size="body">
        Petugas:
      </CustomText>
      <Identification
        style={{ marginBottom: "20px" }}
        role="collector"
        name="Shizuki yanto"
      />
      <KonfirmButton size="lg" style={{ display: "block" }}>
        <img src={icon_pickup} width="60px" />
        <CustomText color="white" size="body">
          Konfirmasi
        </CustomText>
      </KonfirmButton>
    </Container>
  );
};

export default DetailPickupPage;
