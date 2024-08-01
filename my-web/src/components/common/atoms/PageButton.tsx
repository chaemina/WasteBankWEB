import CustomButton from "./CustomButton";
import CustomText from "./CustomText";
import styled from "styled-components";
import { scale } from "../../../utils/Scale";
import { useNavigate } from "react-router-dom";
import IconImage from "./IconImage";

const Button = styled(CustomButton)`
  width: ${scale(150)}px;
  height: ${scale(150)}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type PageButtonProps = {
  icon: string;
  button_name: string;
  page: string;
};

const PageButton: React.FC<PageButtonProps> = ({ icon, button_name, page }) => {
  const nav = useNavigate();
  return (
    <Button rounded={true} onClick={() => nav(`/${page}`)}>
      <IconImage src={icon} />
      <CustomText color="white" size="body">
        {button_name}
      </CustomText>
    </Button>
  );
};

export default PageButton;
