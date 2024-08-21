import styled from "styled-components";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { scale, verticalScale } from "../../../utils/Scale";

const Spacer = styled.div`
  position: fixed;
  bottom: ${verticalScale(20)}px;
  left: 50%;
  transform: translateX(-50%);
`;

const LogoutBtn = styled(CustomButton)`
  text-align: center;
  background-color: white;
  width: ${scale(80)}px;
  height: ${verticalScale(30)}px;
  border: 3px solid #40982d;
`;

type FooterProps = {
  onClickLogout: () => void;
};

const Footer: React.FC<FooterProps> = ({ onClickLogout }) => {
  return (
    <Spacer>
      <LogoutBtn rounded size="xs" onClick={onClickLogout}>
        <CustomText bold color="#40982d">
          keualr
        </CustomText>
      </LogoutBtn>
    </Spacer>
  );
};

export default Footer;
