import styled from "styled-components";
import { scale, verticalScale } from "../../../utils/Scale";
import icon_location from "../../../assets/images/icon_location.svg";
import CustomText from "../../common/atoms/CustomText";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #40892d;
  width: ${scale(320)}px;
  height: ${verticalScale(130)}px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: center;
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
        destination: "CollectorLocation",
        garbageId: garbageId,
      });
      window.ReactNativeWebView.postMessage(message);
    }
  };

  return (
    <ItemContainer>
      <CustomText>Shortcut to the garbage location being collected</CustomText>
      <MapBtn onClick={handleButtonClick}>
        <img style={{ width: "100%" }} src={icon_location} />
      </MapBtn>
    </ItemContainer>
  );
};

export default CollectingItem;
