import styled from "styled-components";
import CustomText from "../../common/atoms/CustomText";
import { scale, verticalScale } from "../../../utils/Scale";
import IconImage from "../../common/atoms/IconImage";
import icon_bin from "../../../assets/images/icon_bin.svg";
import icon_saving from "../../../assets/images/icon_saving.svg";

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

const InfoText = styled(CustomText)`
  margin-left: auto;
  margin-right: ${scale(20)}px;
`;

const GarbageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${scale(5)}px;
`;

const Spacer = styled.div`
  border: 1.3px solid white;
`;

type InfoContentProps = {
  iconSrc?: string;
  label: string;
  value?: string | number | Date;
  isBold?: boolean;
};

const InfoContent: React.FC<InfoContentProps> = ({
  iconSrc,
  label,
  value,
  isBold = false,
}) => {
  return (
    <GarbageInfo>
      <IconImage margin={8} width={30} src={iconSrc} />
      <CustomText color="white" size="body" bold={isBold}>
        {label}
      </CustomText>
      <InfoText color="white" size="body" bold={isBold}>
        {value}
      </InfoText>
    </GarbageInfo>
  );
};

type GarbageItemProps = {
  organicWeight: number;
  non_organicWeight: number;
  saving: number;
  date: string;
};

const GarbageItem: React.FC<GarbageItemProps> = ({
  organicWeight,
  non_organicWeight,
  saving,
  date,
}) => {
  return (
    <ItemContainer>
      <GarbageContainer>
        <InfoContent label={date} isBold={true} />
      </GarbageContainer>
      <GarbageContainer>
        <InfoContent
          iconSrc={icon_bin}
          label="Organik"
          value={`${organicWeight} kg`}
        />
        <InfoContent
          iconSrc={icon_bin}
          label="Non-organik"
          value={`${non_organicWeight} kg`}
        />
      </GarbageContainer>
      <Spacer />
      <GarbageContainer>
        <InfoContent
          iconSrc={icon_saving}
          label="Saving"
          value={`Rp. ${saving}`}
          isBold
        />
      </GarbageContainer>
    </ItemContainer>
  );
};

export default GarbageItem;
