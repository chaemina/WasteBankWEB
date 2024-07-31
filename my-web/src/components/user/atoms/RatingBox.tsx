import icon_fill_star from "../../../assets/images/icon_fill_star.svg";
import icon_empty_star from "../../../assets/images/icon_empty_star.svg";
import CustomText from "../../common/atoms/CustomText";
import styled from "styled-components";
import { useState } from "react";

const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background-color: #40892d;

  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RatingNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarBtn = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border-radius: 15px;
  border: none;
`;

const RatingStarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

type RatingProps = {
  rating: number;
  setRating: (rating: number) => void;
};

const RatingStar: React.FC<RatingProps> = ({ rating, setRating }) => {
  const totalStars = 5;

  return (
    <RatingStarBox>
      {Array.from({ length: totalStars }, (_, index) => (
        <StarBtn key={index} onClick={() => setRating(index + 1)}>
          <img
            src={index < rating ? icon_fill_star : icon_empty_star}
            style={{ width: "100%", height: "100%" }}
          />
        </StarBtn>
      ))}
    </RatingStarBox>
  );
};

const RatingBox = () => {
  const [rating, setRating] = useState(0);

  return (
    <RatingContainer>
      <RatingNum>
        <CustomText color="white" size="body">
          Rating{" "}
        </CustomText>
        <CustomText color="white" size="body">
          {rating}/5
        </CustomText>
      </RatingNum>
      <RatingStar rating={rating} setRating={setRating} />
    </RatingContainer>
  );
};

export default RatingBox;
