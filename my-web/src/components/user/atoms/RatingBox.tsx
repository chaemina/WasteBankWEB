import icon_fill_star from "../../../assets/images/icon_fill_star.svg";
import icon_empty_star from "../../../assets/images/icon_empty_star.svg";
import CustomText from "../../common/atoms/CustomText";
import styled from "styled-components";
import React, { useState } from "react";
import { instance } from "../../../apis/instance";
import { scale } from "../../../utils/Scale";
import { ButtonContainer } from "../../common/atoms/ButtonContainer";
import CustomButton from "../../common/atoms/CustomButton";
import CustomAlert from "../../common/atoms/CustomAlert";
import { useNavigate } from "react-router-dom";

const RatingContainer = styled.div`
  display: flex;
  width: 100%;
  height: ${scale(200)}px;
  background-color: #40892d;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RatingNum = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${scale(20)}px;
`;

const StarBtn = styled.button`
  display: flex;
  flex: 1;
  background: none;
  border-radius: 15px;
  border: none;
`;

const RatingStarBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${scale(10)}px;
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

type RatingBoxProps = {
  garbageId: number;
};

const RatingBox: React.FC<RatingBoxProps> = ({ garbageId }) => {
  const nav = useNavigate();
  const [rating, setRating] = useState(0);
  const [alert, setAlert] = useState(false);

  const onClickDone = () => {
    setAlert(true);
  };

  const onClickOkay = async () => {
    try {
      const response = await instance.post(
        `/api/garbages/${garbageId}/rating`,
        { rating }
      );
      if (response.data.success) {
        setAlert(false);
        nav("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClickNo = () => {
    setAlert(false);
  };

  return (
    <>
      <RatingContainer>
        <RatingNum>
          <CustomText color="white" size="title" bold>
            Rating {rating} / 5
          </CustomText>
        </RatingNum>
        <RatingStar rating={rating} setRating={setRating} />
      </RatingContainer>
      <ButtonContainer>
        <CustomButton label="Done" size="sm" rounded onClick={onClickDone} />
      </ButtonContainer>
      {alert && (
        <CustomAlert
          title="Do you want to submit it?"
          visible={alert}
          onClickOkay={onClickOkay}
          onClickNo={onClickNo}
        />
      )}
    </>
  );
};

export default RatingBox;
