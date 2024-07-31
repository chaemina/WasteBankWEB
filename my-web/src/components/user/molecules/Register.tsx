import React from "react";
import CustomText from "../../common/atoms/CustomText";
import CustomAlert from "../../common/atoms/CustomAlert";
import CustomInput from "../../common/atoms/CustomInput";
import CustomButton from "../../common/atoms/CustomButton";
import icon_bin from "../../../assets/images/icon_bin.svg";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #40892d;
`;

const SampahDetailBox = styled.div`
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 10px;
  flex: 1;
`;

const SampahWeightBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

type SampahDetailProps = {
  rp: string;
  sampah_type: string;
};

const SampahDetail: React.FC<SampahDetailProps> = ({ sampah_type, rp }) => {
  return (
    <SampahDetailBox>
      <CustomText size="caption" color="white">
        {sampah_type}
      </CustomText>
      <CustomText size="body" color="white">
        Rp. {rp}
      </CustomText>
    </SampahDetailBox>
  );
};

const SampahWeight = () => {
  return (
    <SampahWeightBox>
      <CustomText size="body" color="white">
        Berat :
      </CustomText>
      <CustomInput
        style={{
          width: "80px",
          height: "45px",
          border: "none",
        }}
      />
    </SampahWeightBox>
  );
};

const Register = () => {
  return (
    <div>
      <RegisterContainer>
        <div style={{ display: "flex" }}>
          <img src={icon_bin} />
        </div>
        <SampahDetail sampah_type="Sampah organik" rp="60.000" />
        <SampahWeight />
      </RegisterContainer>
      <RegisterContainer>
        <div style={{ display: "flex" }}>
          <img src={icon_bin} />
        </div>
        <SampahDetail sampah_type="Sampah non-organik" rp="80.000" />
        <SampahWeight />
      </RegisterContainer>
    </div>
  );
};

export default Register;
