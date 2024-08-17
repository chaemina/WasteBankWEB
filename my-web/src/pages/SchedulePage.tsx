import {
  ScrollableContainer,
  ListContainer,
} from "../components/user/organisms/ScrollContainer";
import ScheduleList from "../components/user/molecules/ScheduleList";
import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import { verticalScale } from "../utils/Scale";

const SchedulePage = () => {
  return (
    <Container>
      <ScrollableContainer>
        <Identification
          role="user"
          title="Garbage collection schedule"
          style={{ marginTop: `${verticalScale(20)}px` }}
        />
        <ListContainer>
          <ScheduleList filterMatched={true} />
        </ListContainer>
      </ScrollableContainer>
    </Container>
  );
};

export default SchedulePage;
