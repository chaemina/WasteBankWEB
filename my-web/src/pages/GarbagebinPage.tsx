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
      <CustomButton label="Krim" size="sm" rounded onClick={onClickAlert} />
      {alert && (
        <CustomAlert
          title="Total yang didapatkan"
          text="Rp.140.000"
          visible={alert}
          onClose={onClickClose}
        />
      )}
    </Container>
  );
};

export default GarbagebinPage;
