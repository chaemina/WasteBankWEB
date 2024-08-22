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
  page?: string;
  style?: React.CSSProperties;
  destination?: string; // 메시지 전송을 위한 destination prop 추가
};

const PageButton: React.FC<PageButtonProps> = ({
  icon,
  button_name,
  page,
  destination,
  style,
}) => {
  const nav = useNavigate();

  const handleClick = () => {
    if (destination && window.ReactNativeWebView) {
      const message = JSON.stringify({
        type: "NAVIGATE",
        destination: destination,
      });
      window.ReactNativeWebView.postMessage(message);
    } else if (page) {
      nav(`/${page}`);
    }
  };

  return (
    <Button style={style} rounded={true} onClick={handleClick}>
      <IconImage src={icon} />
      <CustomText color="white" size="body">
        {button_name}
      </CustomText>
    </Button>
  );
};

export default PageButton;
