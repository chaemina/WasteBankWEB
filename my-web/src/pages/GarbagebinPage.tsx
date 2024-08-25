import React, { useState, useEffect } from "react";
import Container from "../components/common/atoms/Container";
import CustomButton from "../components/common/atoms/CustomButton";
import { UserRegister } from "../components/user/organisms/UserRegister";
import CustomAlert from "../components/common/atoms/CustomAlert";
import Header from "../components/common/molecules/Header";
import { instance } from "../apis/instance";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/atoms/Spinner";

const GarbagebinPage: React.FC = () => {
  const nav = useNavigate();
  const [alert, setAlert] = useState(false);
  const [organikWeight, setOrganikWeight] = useState<number>(0);
  const [nonOrganikWeight, setNonOrganikWeight] = useState<number>(0);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [role, setRole] = useState<string>("");


  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        setLoading(true);
        const response = await instance.get("/api/home");
        const role = response.data.response.role;
        setRole(role);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserRole();
  }, [role]);

  const onClickAlert = async () => {
    try {
      setLoading(true);
      const response = await instance.post("/api/garbages/totalValue", {
        organicWeight: organikWeight,
        non_organicWeight: nonOrganikWeight,
      });
      const responseData = await response.data;
      setTotalValue(responseData.response);
      setAlert(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickOkay = async () => {
    try {
      setLoading(true);
      await instance.post("/api/garbages/register", {
        organicWeight: organikWeight,
        non_organicWeight: nonOrganikWeight,
      });
      setAlert(false);
      nav(`/`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onClickNo = () => {
    setAlert(false);
  };

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Header title="Menunggu di pick-up" />
          <UserRegister
            onOrganikChange={(value) => setOrganikWeight(parseFloat(value))}
            onNonOrganikChange={(value) =>
              setNonOrganikWeight(parseFloat(value))
            }
            // rp 값을 Register 컴포넌트에 전달합니다.
            organikRp={60}
            nonOrganikRp={80}
          />
            <CustomButton
              label="Krim"
              size="sm"
              rounded
              onClick={onClickAlert}
            />
          {alert && (
            <CustomAlert
              title="Total yang didapatkan"
              text={`Rp. ${totalValue}`}
              visible={alert}
              onClickOkay={onClickOkay}
              onClickNo={onClickNo}
            />
          )}
        </>
      )}
    </Container>
  );
};

export default GarbagebinPage;
