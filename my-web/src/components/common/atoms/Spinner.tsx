import Lottie from "lottie-react";
import styled from "styled-components";
import spinnerAnimation from "../../../assets/Lottie.json";

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
