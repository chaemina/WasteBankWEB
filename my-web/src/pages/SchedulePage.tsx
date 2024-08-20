import {
  ScrollableContainer,
  ListContainer,
} from "../components/user/organisms/ScrollContainer";
import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import { verticalScale } from "../utils/Scale";
import GarbageList from "../components/user/molecules/GarbageList";

const SchedulePage = () => {
  return (
    <Container>
      <ScrollableContainer>
        <Identification
          role="user"
          title="Daftar sampah terdaftar"
          style={{ marginTop: `${verticalScale(20)}px` }}
        />
        <ListContainer>
          <GarbageList />
        </ListContainer>
      </ScrollableContainer>
    </Container>
  );
};

export default SchedulePage;
