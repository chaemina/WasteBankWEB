import styled from "styled-components";
import { moderateScale, scale } from "../../../utils/Scale";

type IconImageProps = {
  width?: number;
  height?: number;
  $margin?: number; // Transient prop으로 변경
};

const IconImage = styled.img<IconImageProps>`
  width: ${(props) =>
    props.width ? `${moderateScale(props.width, 0.3)}px` : `${moderateScale(80, 0.3)}px`};
  height: ${(props) =>
    props.height ? `${moderateScale(props.height, 0.3)}px` : `${moderateScale(80, 0.3)}px`};
  margin: ${(props) =>
    props.$margin ? `${scale(props.$margin)}px` : `${scale(10)}px`}; // $margin 사용
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default IconImage;

