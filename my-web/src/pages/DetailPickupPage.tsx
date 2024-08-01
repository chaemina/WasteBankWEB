import styled from "styled-components";
import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import Identification from "../components/common/molecules/Identification";
import CustomButton from "../components/common/atoms/CustomButton";
import icon_pickup from "../assets/images/icon_pickup.svg";
import Header from "../components/common/molecules/Header";
import { scale, verticalScale } from "../utils/Scale";

const KonfirmButton = styled(CustomButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${verticalScale(130)}px;
  margin-top: ${verticalScale(20)}px;
`;

const DetailPickupPage = () => {
  return (
    <Container>
      <Header title="Detail Pick-up" />
      <CustomText
        style={{ marginBottom: `${verticalScale(15)}px` }}
        bold
        size="body"
      >
        Petugas:
      </CustomText>
      <Identification
        style={{ marginBottom: `${verticalScale(15)}px` }}
        role="collector"
        name="Shizuki yanto"
      />
      <KonfirmButton size="lg">
        <img src={icon_pickup} style={{ width: `${scale(80)}px` }} />
        <CustomText color="white" size="body" bold>
          Konfirmasi
        </CustomText>
      </KonfirmButton>
    </Container>
  );
};

export default DetailPickupPage;
