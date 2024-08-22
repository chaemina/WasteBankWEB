import CollectingList from "../components/collector/molecules/CollectingList";
import {
  ScrollableContainer,
  ListContainer,
} from "../components/user/organisms/ScrollContainer";
import Container from "../components/common/atoms/Container";
import Identification from "../components/common/molecules/Identification";
import { verticalScale } from "../utils/Scale";

const CollectingPage = () => {
  return (
    <Container>
      <ScrollableContainer>
        <Identification
          role="collector"
          title="Sampah dikumpulkan"
          style={{ marginTop: `${verticalScale(20)}px` }}
        />
        <ListContainer>
          <CollectingList />
        </ListContainer>
      </ScrollableContainer>
    </Container>
  );
};

export default CollectingPage;
