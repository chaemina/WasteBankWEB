import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import { scale, verticalScale } from "../../../utils/Scale";
import icon_bin from "../../../assets/images/icon_bin.svg";
import icon_saving from "../../../assets/images/icon_saving.svg";
import IconImage from "../../common/atoms/IconImage";

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #40892d;
  width: ${scale(320)}px;
  height: ${verticalScale(130)}px;
  border-radius: 20px;
`;

const GarbageInfo = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${verticalScale(35)}px;
  width: 100%;
`;

const GarbageWeight = styled(CustomText)`
  margin-left: auto;
  margin-right: ${scale(20)}px;
`;

const GarbageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${scale(5)}px;
`;

type GarbageContentProps = {
  type?: string;
  weight?: number;
  saving?: number;
};

const GarbageContent: React.FC<GarbageContentProps> = ({ type, weight }) => {
  return (
    <GarbageInfo>
      <IconImage margin={8} width={30} src={icon_bin} />
      <CustomText color="white" size="body">
        {type}
      </CustomText>
      <GarbageWeight color="white" size="body">
        {weight} kg
      </GarbageWeight>
    </GarbageInfo>
  );
};

const SavingContent: React.FC<GarbageContentProps> = ({ saving }) => {
  return (
    <GarbageInfo>
      <IconImage margin={11} src={icon_saving} width={25} />
      <CustomText color="white" size="body" bold>
        Saving
      </CustomText>
      <GarbageWeight color="white" size="body" bold>
        Rp. {saving}
      </GarbageWeight>
    </GarbageInfo>
  );
};

const Spacer = styled.div`
  border: 1.3px solid white;
`;

type GarbageItemProps = {
  organik: number;
  non_organik: number;
  saving: number;
};

const GarbageItem: React.FC<GarbageItemProps> = ({
  organik,
  non_organik,
  saving,
}) => {
  return (
    <ItemContainer>
      <GarbageContainer>
        <GarbageContent type="Organik" weight={organik} />
        <GarbageContent type="Non-organik" weight={non_organik} />
      </GarbageContainer>
      <Spacer />
      <GarbageContainer>
        <SavingContent saving={saving} />
      </GarbageContainer>
    </ItemContainer>
  );
};

export default GarbageItem;
