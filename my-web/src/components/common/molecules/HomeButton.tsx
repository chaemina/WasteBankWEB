import PageButton from "../atoms/PageButton";
import styled from "styled-components";
import icon_bin from "../../../assets/images/icon_bin.svg";
import icon_pickup from "../../../assets/images/icon_pickup.svg";
import icon_schedule from "../../../assets/images/icon_schedule.svg";
import icon_saving from "../../../assets/images/icon_saving.svg";
import icon_location from "../../../assets/images/icon_location.svg";
import icon_collector from "../../../assets/images/icon_collector.svg";
import { scale } from "../../../utils/Scale";
import { useNavigate } from "react-router-dom";

type HomeButtonProps = {
  role: string;
};

const OuterContainer = styled.div<HomeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

`;

const ButtonContainer = styled.div<HomeButtonProps>`
  display: grid;
  box-sizing: border-box;
  gap: ${scale(20)}px;
  flex-wrap: wrap;

  ${({ role }) =>
    role === "user" &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}
  ${({ role }) =>
    role === "collector" &&
    `
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  `}
    ${({ role }) =>
    role === "admin" &&
    `
     grid-template-columns: repeat(2, 1fr);
     grid-template-rows: repeat(2, 1fr);
  `};
`;

const HomeButton: React.FC<HomeButtonProps> = ({ role }) => {
  const nav = useNavigate();
  return (
    <OuterContainer role={role}>
      <ButtonContainer role={role}>
        {role === "user" && (
          <>
            <PageButton
              icon={icon_bin}
              button_name="Garbage bin"
              page="garbagebin"
            />
            <PageButton
              icon={icon_pickup}
              button_name="Pick-up"
              page="pickup"
            />
            <PageButton
              icon={icon_schedule}
              button_name="Schedule"
              page="schedule"
            />
            <PageButton
              icon={icon_saving}
              button_name="My saving"
              page="mysaving"
            />
          </>
        )}
        {role === "collector" && (
          <>
            <PageButton
              icon={icon_location}
              button_name="Menunggu"
              destination="CollectorNotMatched"
            />
            <PageButton
              icon={icon_pickup}
              button_name="Pick-up"
              destination="CollectorMatched"
            />
            <PageButton
              icon={icon_collector}
              button_name="Mengumpulkan"
              page="collecting"
              style={{ gridColumn: "2", gridRow: "2" }}
            />
          </>
        )}
        {role === "admin" && (
          <>         
           <PageButton
            icon={icon_location}
            button_name="Letak"
            destination="AdminMapView"
          />
          <PageButton
          icon={icon_saving}
          button_name="Nilai tukar"
          page="rpupdate"
        />
        </>
        )}
      </ButtonContainer>
    </OuterContainer>
  );
};

export default HomeButton;
