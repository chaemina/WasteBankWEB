import styled from "styled-components";
import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import Identification from "../components/common/molecules/Identification";
import CustomButton from "../components/common/atoms/CustomButton";
import icon_pickup from "../assets/images/icon_pickup.svg";
import Header from "../components/common/molecules/Header";
import { scale, verticalScale } from "../utils/Scale";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../apis/instance";

const KonfirmButton = styled(CustomButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${verticalScale(130)}px;
  margin-top: ${verticalScale(20)}px;
`;

const DetailPickupPage = () => {
  const { params } = useParams<{ params: string }>();
  const [collector, setCollector] = useState("");
  const [garbageId, setGarbageId] = useState<number>(-1);

  useEffect(() => {
    const fetchData = async () => {
      if (params) {
        const id = parseInt(params, 10);
        if (!isNaN(id)) {
          setGarbageId(id);
        }
        try {
          const response = await instance.get(
            `/api/garbages/${garbageId}/collectorInfo`
          );
          if (response.data.success) {
            setCollector(response.data.response.collectorName);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [params]);

  const handleButtonClick = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("CollectorMapView");
    }
  };

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
        name={collector}
      />
      <KonfirmButton size="lg" onClick={handleButtonClick}>
        <img src={icon_pickup} style={{ width: `${scale(80)}px` }} />
        <CustomText color="white" size="body">
          Konfirmasi
        </CustomText>
      </KonfirmButton>
    </Container>
  );
};

export default DetailPickupPage;
