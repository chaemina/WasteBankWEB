import React, { useState, useEffect } from "react";
import Container from "../components/common/atoms/Container";
import CustomButton from "../components/common/atoms/CustomButton";
import { AdminRegister } from "../components/admin/moledules/AdminRegister";
import CustomAlert from "../components/common/atoms/CustomAlert";
import Header from "../components/common/molecules/Header";
import { instance } from "../apis/instance";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/common/atoms/Spinner";

const RPupdatePage: React.FC = () => {
  const nav = useNavigate();
  const [alert, setAlert] = useState(false);
  const [organikWeight, setOrganikWeight] = useState<number>(0);
  const [nonOrganikWeight, setNonOrganikWeight] = useState<number>(0);
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
    setAlert(true);
  };


  const onClickOkay = async () => {
    try {
      setLoading(true);
      const response = await instance.post("/api/admin/updateValue", {
        organicValue: organikWeight,
        non_organicValue: nonOrganikWeight,
      });
      setAlert(false);
      nav("/")
    } catch (error) {
      console.log(error);
    } finally {
      setAlert(false);
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
          <Header title="Masukkan harga untuk hari ini" />
          <AdminRegister
            onOrganikChange={(value) => setOrganikWeight(parseFloat(value))}
            onNonOrganikChange={(value) =>
              setNonOrganikWeight(parseFloat(value))
            }
            organikRp={null}
            nonOrganikRp={null}
          />
            <CustomButton
              label="Krim"
              size="sm"
              rounded
              onClick={onClickAlert}
            />
          {alert && (
            <CustomAlert
              title="Apakah harga yang diperbarui benar?"
              text={`organicValue: ${organikWeight} non_organicValue: ${nonOrganikWeight}`}
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

export default RPupdatePage;
