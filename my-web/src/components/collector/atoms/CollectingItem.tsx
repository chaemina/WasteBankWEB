import styled from "styled-components";
import { scale, verticalScale } from "../../../utils/Scale";
import icon_map from "../../../assets/images/icon_map_green.svg";
import CustomText from "../../common/atoms/CustomText";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #40892d;
  width: ${scale(320)}px;
  height: ${verticalScale(70)}px;
  border-radius: 20px;
  align-items: center;
`;

const Info = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${verticalScale(35)}px;
  padding: ${scale(20)}px;
  justify-content: space-between;
  width: 100%;
`;

const MapBtn = styled.button`
  width: ${scale(40)}px;
  height: ${scale(40)}px;
  background-color: white;
  border-radius: 13px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

type CollectingItemProps = {
  garbageId: number;
};

const CollectingItem: React.FC<CollectingItemProps> = ({ garbageId }) => {
  const handleButtonClick = () => {
    if (window.ReactNativeWebView) {
      const message = JSON.stringify({
        type: "NAVIGATE",
        destination: "IndividualTrashMapView",
        garbageId: garbageId,
      });
      window.ReactNativeWebView.postMessage(message);
    }
  };

  return (
    <ItemContainer>
      <Info>
        <CustomText size="body" color="white">
          Periksa lokasi sampah...
        </CustomText>
        <MapBtn onClick={handleButtonClick}>
          <img style={{ width: "100%" }} src={icon_map} />
        </MapBtn>
      </Info>
    </ItemContainer>
  );
};

export default CollectingItem;
