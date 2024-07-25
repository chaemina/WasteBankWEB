import React from "react";
import CustomText from "../../common/atoms/CustomText";
import CustomAlert from "../../common/atoms/CustomAlert";
import CustomInput from "../../common/atoms/CustomInput";
import CustomButton from "../../common/atoms/CustomButton";
import icon_bin from "../../../assets/images/icon_bin.svg";
import styled from "styled-components";

const RegisterContainer = styled.div`
  width: 100%;
  background-color: #40892d;
`;

const SampahDetail = styled.div`
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 10px;
`;

const SampahWeight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: auto;
`;

const Register = () => {
  return (
    <RegisterContainer>
      <div style={{ display: "flex" }}>
        <img src={icon_bin} />
        <SampahDetail>
          <CustomText size="caption" color="white">
            Sampah organik
          </CustomText>
          <CustomText size="body" color="white">
            Rp.60.000
          </CustomText>
        </SampahDetail>
        <SampahWeight>
          <CustomText size="body" color="white">
            Berat :
          </CustomText>
          <CustomInput />
        </SampahWeight>
      </div>
      <div style={{ display: "flex" }}>
        <img src={icon_bin} />
        <SampahDetail>
          <CustomText size="caption" color="white">
            Sampah non-organik
          </CustomText>
          <CustomText size="body" color="white">
            Rp.80.000
          </CustomText>
        </SampahDetail>
        <SampahWeight>
          <CustomText size="body" color="white">
            Berat :
          </CustomText>
          <CustomInput />
        </SampahWeight>
      </div>
    </RegisterContainer>
  );
};

export default Register;
