import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import ScheduleList from "../components/user/molecules/ScheduleList";
import { verticalScale } from "../utils/Scale";
import {
  ScrollableContainer,
  ListContainer,
} from "../components/user/organisms/ScrollContainer";

const PickupPage = () => {
  return (
    <Container>
      <ScrollableContainer>
        <Identification
          style={{ marginTop: `${verticalScale(20)}px` }}
          role="user"
          title="Waste collection schedule"
        />
        <ListContainer>
          <ScheduleList search={true} accept={true} />
        </ListContainer>
      </ScrollableContainer>
    </Container>
  );
};

export default PickupPage;
