import Identification from "../components/common/molecules/Identification";
import Container from "../components/common/atoms/Container";
import RatingBox from "../components/user/atoms/RatingBox";
import { verticalScale } from "../utils/Scale";
import { Wrapper } from "../components/common/atoms/ButtonContainer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../apis/instance";
import Spinner from "../components/common/atoms/Spinner";

const RatingPage: React.FC = () => {
  const { garbageId } = useParams<{ garbageId: string }>(); // 'params' 대신 'garbageId'를 직접 추출
  const [collector, setCollector] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (garbageId) {
        const id = parseInt(garbageId, 10);
        if (!isNaN(id)) {
          try {
            const response = await instance.get(
              `/api/garbages/${id}/collectorInfo`
            );
            if (response.data.success) {
              setCollector(response.data.response.collectorName);
            }
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
      }
    };
    fetchData();
  }, [garbageId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Wrapper>
        <Identification
          style={{
            marginTop: `${verticalScale(20)}px`,
            marginBottom: `${verticalScale(80)}px`,
          }}
          role="collector"
          name={collector}
        />
        {garbageId && <RatingBox garbageId={parseInt(garbageId, 10)} />}{" "}
      </Wrapper>
    </Container>
  );
};

export default RatingPage;
