import React, { useState } from "react";
import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import CustomButton from "../components/common/atoms/CustomButton";
import Register from "../components/user/molecules/Register";
import CustomAlert from "../components/common/atoms/CustomAlert";

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
      <CustomText size="title" bold color="#40892D">
        Menunggu di pick-up
      </CustomText>
      <Register />
      <CustomButton size="sm" rounded onClick={onClickAlert}>
        <CustomText color="white">Krim</CustomText>
      </CustomButton>
      {alert && (
        <CustomAlert
          title="Alert"
          text="This is an alert message."
          visible={alert}
          onClose={onClickClose}
        />
      )}
    </Container>
  );
};

export default GarbagebinPage;
