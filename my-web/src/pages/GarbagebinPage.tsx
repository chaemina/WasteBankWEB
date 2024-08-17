import React, { useState } from "react";
import Container from "../components/common/atoms/Container";
import CustomButton from "../components/common/atoms/CustomButton";
import Register from "../components/user/molecules/Register";
import CustomAlert from "../components/common/atoms/CustomAlert";
import Header from "../components/common/molecules/Header";
import {
  ButtonContainer,
  Wrapper,
} from "../components/common/atoms/ButtonContainer";
import { instance } from "../apis/instance";
import { useNavigate } from "react-router-dom";

const GarbagebinPage: React.FC = () => {
  const nav = useNavigate();
  const [alert, setAlert] = useState(false);
  const [organikWeight, setOrganikWeight] = useState<number>(0);
  const [nonOrganikWeight, setNonOrganikWeight] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);

  const onClickAlert = async () => {
    try {
      const response = await instance.post("/api/garbages/totalValue", {
        organicWeight: organikWeight,
        non_organicWeight: nonOrganikWeight,
      });
      const responseData = await response.data;
      setTotalValue(responseData.response);
      setAlert(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickOkay = async () => {
    try {
      instance.post("/api/garbages/register", {
        organicWeight: organikWeight,
        non_organicWeight: nonOrganikWeight,
      });
      setAlert(false);
      nav(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickNo = () => {
    setAlert(false);
  };

  return (
    <Container>
      <Wrapper>
        <Header title="Menunggu di pick-up" />
        <Register
          onOrganikChange={(value) => setOrganikWeight(parseFloat(value))}
          onNonOrganikChange={(value) => setNonOrganikWeight(parseFloat(value))}
        />
        <ButtonContainer>
          <CustomButton label="Krim" size="sm" rounded onClick={onClickAlert} />
        </ButtonContainer>
        {alert && (
          <CustomAlert
            title="Total yang didapatkan"
            text={`Rp. ${totalValue}`}
            visible={alert}
            onClickOkay={onClickOkay}
            onClickNo={onClickNo}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default GarbagebinPage;
