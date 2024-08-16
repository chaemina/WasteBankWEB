import Container from "../components/common/atoms/Container";
import CustomText from "../components/common/atoms/CustomText";
import styled from "styled-components";
import Header from "../components/common/molecules/Header";
import { verticalScale } from "../utils/Scale";
import { useEffect, useState } from "react";
import { instance } from "../apis/instance";
import Spinner from "../components/common/atoms/Spinner";

const SavingBox = styled.div`
  width: 100%;
  margin-top: ${verticalScale(30)}px;
  height: ${verticalScale(130)}px;
  color: white;
  background-color: #40892d;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySavingPage = () => {
  const [saving, setSaving] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await instance.get(`/api/user/savings`);
        if (response.data.success) {
          setSaving(response.data.response);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Header title="My saving" />
      <CustomText color="black" bold>
        Total yang didapatkan
      </CustomText>
      <SavingBox>
        <CustomText color="white" size="title" bold>
          Rp. {saving}
        </CustomText>
      </SavingBox>
    </Container>
  );
};

export default MySavingPage;
