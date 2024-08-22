import Lottie from "lottie-react";
import styled from "styled-components";
import spinnerAnimation from "../../../assets/Lottie.json";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Lottie
        animationData={spinnerAnimation}
        loop
        style={{ width: 100, height: 100 }}
      />
    </SpinnerWrapper>
  );
};

export default Spinner;
