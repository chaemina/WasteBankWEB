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

const GarbagebinPage: React.FC = () => {
  const [alert, setAlert] = useState(false);

  const onClickAlert = () => {
    setAlert(true);
  };

  const onClickClose = () => {
    setAlert(false);
  };

  return (
    <Container>
      <Wrapper>
        <Header title="Menunggu di pick-up" />
        <Register />
        <ButtonContainer>
          <CustomButton label="Krim" size="sm" rounded onClick={onClickAlert} />
        </ButtonContainer>
        {alert && (
          <CustomAlert
            title="Total yang didapatkan"
            text="Rp.140.000"
            visible={alert}
            onClose={onClickClose}
          />
        )}
      </Wrapper>
    </Container>
  );
};

export default GarbagebinPage;
