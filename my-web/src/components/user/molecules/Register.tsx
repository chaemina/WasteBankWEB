import React from "react";
import CustomText from "../../common/atoms/CustomText";
import CustomInput from "../../common/atoms/CustomInput";
import icon_bin from "../../../assets/images/icon_bin.svg";
import styled from "styled-components";
import IconImage from "../../common/atoms/IconImage";
import { scale, verticalScale } from "../../../utils/Scale";

type RegisterProps = {
  sampah_type: string;
  rp: number;
};

type RegisterContentProps = RegisterProps & {
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

const SampahDetail: React.FC<RegisterProps> = ({ sampah_type, rp }) => {
  return (
    <SampahDetailBox>
      <CustomText size="body" color="white">
        {sampah_type}
      </CustomText>
      <CustomText size="title" bold color="white">
        Rp. {rp}
      </CustomText>
    </SampahDetailBox>
  );
};

const SampahWeight: React.FC<{ onChange: (value: string) => void }> = ({
  onChange,
}) => {
  return (
    <SampahWeightBox>
      <CustomText size="body" color="white">
        Berat :
      </CustomText>
      <CustomInput width={80} height={50} onChange={onChange} />
    </SampahWeightBox>
  );
};

const RegisterContent: React.FC<RegisterContentProps> = ({
  sampah_type,
  rp,
  onInputChange,
}) => {
  return (
    <RegisterContainer>
      <IconImage src={icon_bin} margin={5} />
      <SampahDetail sampah_type={sampah_type} rp={rp} />
      <SampahWeight onChange={onInputChange} />
    </RegisterContainer>
  );
};

const Register: React.FC<{
  onOrganikChange: (value: string) => void;
  onNonOrganikChange: (value: string) => void;
}> = ({ onOrganikChange, onNonOrganikChange }) => {
  return (
    <div
      style={{
        marginTop: `${verticalScale(60)}px`,
      }}
    >
      <RegisterContent
        sampah_type="Sampah organik"
        rp={60}
        onInputChange={onOrganikChange}
      />
      <RegisterContent
        sampah_type="Sampah non-organik"
        rp={80}
        onInputChange={onNonOrganikChange}
      />
    </div>
  );
};

export default Register;
