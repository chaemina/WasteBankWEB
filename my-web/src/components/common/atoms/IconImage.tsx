import styled from "styled-components";
import { scale } from "../../../utils/Scale";

type IconImageProps = {
  width?: number;
  height?: number;
  margin?: number;
};

const IconImage = styled.img<IconImageProps>`
  width: ${(props) =>
    props.width ? `${scale(props.width)}px` : `${scale(80)}px`};
  height: ${(props) =>
    props.height ? `${scale(props.height)}px` : `${scale(80)}px`};
  margin: ${(props) =>
    props.margin ? `${scale(props.margin)}px` : `${scale(10)}px`};
  align-items: center;
  justify-content: center;
  display: flex;
`;

export default IconImage;
