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
  const { params } = useParams<{ params: string }>();
  const [collector, setCollector] = useState("");
  const [garbageId, setGarbageId] = useState<number>(-1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      if (params) {
        const id = parseInt(params, 10);
        if (!isNaN(id)) {
          setGarbageId(id);
        }
        try {
          const response = await instance.get(
            `/api/garbages/${id}/collectorInfo`
          );
          if (response.data.success) {
            setCollector(response.data.response.collectorName);
          }
        } catch (error) {
          console.error(error);
          console.log(id);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchData();
  }, [params]);

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
        {garbageId !== null && <RatingBox garbageId={garbageId} />}
      </Wrapper>
    </Container>
  );
};

export default RatingPage;
