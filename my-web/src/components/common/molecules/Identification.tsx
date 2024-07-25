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
  name: string;
  role: string;
};

const Identification: React.FC<IdentificationProps> = ({ name, role }) => {
  return (
    <IdentificationContainer>
      <CircleImage width={80} height={80} role={role} />
      <CustomText size="title" bold={true} color="#40892D">
        {name}
      </CustomText>
    </IdentificationContainer>
  );
};

export default Identification;
