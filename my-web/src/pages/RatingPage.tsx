import Identification from "../components/common/molecules/Identification";
import CustomButton from "../components/common/atoms/CustomButton";
import Container from "../components/common/atoms/Container";
import RatingBox from "../components/user/atoms/RatingBox";
import { verticalScale } from "../utils/Scale";
import {
  ButtonContainer,
  Wrapper,
} from "../components/common/atoms/ButtonContainer";
import { useNavigate } from "react-router-dom";

const RatingPage = () => {
  const nav = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Identification
          style={{
            marginTop: `${verticalScale(20)}px`,
            marginBottom: `${verticalScale(80)}px`,
          }}
          role="collector"
          name="Shizuki Yanto"
        />
        <RatingBox />
        <ButtonContainer>
          <CustomButton
            label="Done"
            size="sm"
            rounded
            onClick={() => nav(`/pickup`)}
          />
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default RatingPage;
