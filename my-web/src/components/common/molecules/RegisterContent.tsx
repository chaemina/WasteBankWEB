import React from "react";
import CustomText from "../atoms/CustomText";
import CustomInput from "../atoms/CustomInput";
import icon_bin from "../../../assets/images/icon_bin.svg";
import styled from "styled-components";
import IconImage from "../atoms/IconImage";
import { scale, verticalScale } from "../../../utils/Scale";

type RegisterProps = {
  sampah_type: string;
  rp: number | null;
  label: string; // 추가: label을 받아 "Berat" 또는 "RP"로 표시
  onInputChange: (value: string) => void;
};

const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #40892d;
  align-items: center;
  height: ${verticalScale(130)}px;
  box-sizing: border-box;
  padding: ${scale(10)}px;
`;

const SampahDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const SampahWeightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const RegisterContent: React.FC<RegisterProps> = ({
  sampah_type,
  rp,
  onInputChange,
  label
}) => {
  return (
    <RegisterContainer>
      <IconImage src={icon_bin} margin={5} />
      <SampahDetailBox>
        <CustomText size="body" color="white">
          {sampah_type}
        </CustomText>
        {rp !== null && (
          <CustomText size="title" bold color="white">
            Rp. {rp}
          </CustomText>
        )}
      </SampahDetailBox>
      <SampahWeightBox>
        <CustomText size="body" color="white">
          {label}:
        </CustomText>
        <CustomInput width={80} height={50} onChange={onInputChange} />
      </SampahWeightBox>
    </RegisterContainer>
  );
};

export default RegisterContent;
