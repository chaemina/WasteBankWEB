import React from "react";
import CircleImage from "../atoms/CircleImage";
import CustomText from "../atoms/CustomText";
import styled from "styled-components";
import { verticalScale } from "../../../utils/Scale";

const IdentificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${verticalScale(20)}px;
`;

type IdentificationProps = {
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  role: string;
};

const Identification: React.FC<IdentificationProps> = ({
  title,
  name,
  role,
  style,
}) => {
  return (
    <IdentificationContainer style={style}>
      <CircleImage width={70} height={70} role={role} />
      {title && (
        <CustomText size="title" bold={true} color="#40892D">
          {title}
        </CustomText>
      )}
      {name && (
        <CustomText size="title" bold={true} color="#40892D">
          {name}
        </CustomText>
      )}
    </IdentificationContainer>
  );
};

export default Identification;
