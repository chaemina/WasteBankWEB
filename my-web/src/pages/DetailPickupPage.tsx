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
import Spinner from "../components/common/atoms/Spinner";

const KonfirmButton = styled(CustomButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${verticalScale(130)}px;
  margin-top: ${verticalScale(20)}px;
`;

const DetailPickupPage = () => {
  const { garbageId } = useParams<{ garbageId: string }>();
  const [collector, setCollector] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCollectorInfo = async () => {
      if (garbageId) {
        try {
          const id = parseInt(garbageId, 10);
          if (!isNaN(id)) {
            const response = await instance.get(
              `/api/garbages/${id}/collectorInfo`
            );
            if (response.data.success) {
              console.log(response.data);
              setCollector(response.data.response);
            }
          }
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };
    fetchCollectorInfo();
  }, [garbageId]);

  const handleButtonClick = () => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("CollectorMapView");
    }
  };

  return (
    <Container>
      <Header title="Detail Pick-up" />
      {loading ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </Container>
  );
};

export default DetailPickupPage;
