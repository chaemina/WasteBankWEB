import styled from "styled-components";
import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import { moderateScale, scale } from "../../../utils/Scale";

const Spacer = styled.div`
  margin-top : ${scale(12)}px;
`;

const LogoutBtn = styled(CustomButton)`
  text-align: center;
  background-color: white;
  width: ${moderateScale(100,0.3)}px;
  height: ${moderateScale(50,0.3)}px;
  border: 3px solid #40982d;
`;

type FooterProps = {
  onClickLogout: () => void;
};

const Footer: React.FC<FooterProps> = ({ onClickLogout }) => {
  return (
    <Spacer>
      <LogoutBtn rounded size="xs" onClick={onClickLogout}>
        <CustomText bold color="#40982d" size="body">
          keualr
        </CustomText>
      </LogoutBtn>
    </Spacer>
  );
};

export default Footer;
