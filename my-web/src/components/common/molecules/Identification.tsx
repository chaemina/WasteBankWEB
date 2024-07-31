import React from "react";
import CircleImage from "../atoms/CircleImage";
import CustomText from "../atoms/CustomText";
import styled from "styled-components";

const IdentificationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

type IdentificationProps = {
  style?: React.CSSProperties;
  name?: string;
  role: string;
};

const Identification: React.FC<IdentificationProps> = ({
  name,
  role,
  style,
}) => {
  return (
    <IdentificationContainer style={style}>
      <CircleImage width={80} height={80} role={role} />
      {name && (
        <CustomText size="title" bold={true} color="#40892D">
          {name}
        </CustomText>
      )}
    </IdentificationContainer>
  );
};

export default Identification;
