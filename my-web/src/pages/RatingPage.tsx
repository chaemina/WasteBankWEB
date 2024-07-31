import Identification from "../components/common/molecules/Identification";
import CustomText from "../components/common/atoms/CustomText";
import CustomButton from "../components/common/atoms/CustomButton";
import Container from "../components/common/atoms/Container";
import RatingBox from "../components/user/atoms/RatingBox";

const RatingPage = () => {
  return (
    <Container>
      <Identification role="collector" name="Shizuki Yanto" />
      <RatingBox />
      <CustomButton size="sm" rounded>
        <CustomText color="white" bold>
          Done
        </CustomText>
      </CustomButton>
    </Container>
  );
};

export default RatingPage;
