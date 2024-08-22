import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";
import { instance } from "../apis/instance";
import Spinner from "../components/common/atoms/Spinner";
import Footer from "../components/common/atoms/Footer";
import icon_search from "../assets/images/icon_search.svg";
import styled from "styled-components";
import { scale, verticalScale } from "../utils/Scale";

const SearchContainer = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: ${scale(20)}px;
  margin-top: ${verticalScale(100)}px;
`;

export const SearchBtn = styled.button`
  width: ${scale(50)}px;
  height: ${scale(50)}px;
  background-color: white;
  border-radius: 13px;
  border: 3px solid #40982d;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
`;

const HomePage: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const nav = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth");
    if (!token) {
      nav("/login");
    }
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/home");
        if (response.data.success) {
          setName(response.data.response.name);
          setRole(response.data.response.role);
          localStorage.setItem("role", response.data.response.role);
        } else {
          setError(response.data.error);
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [nav]);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("role");

    if (window.ReactNativeWebView) {
      const message = JSON.stringify({
        type: "REMOVE_TOKEN",
      });
      window.ReactNativeWebView.postMessage(message);
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Header name={name} backgroundColor="#40892d" color="white" />
      <HomeButton role={role} />
      {role === "collector" && (
        <SearchContainer>
          <SearchBtn onClick={() => nav(`/collecting`)}>
            <img style={{ width: "100%" }} src={icon_search} />
          </SearchBtn>
        </SearchContainer>
      )}
      <Footer onClickLogout={handleLogout} />
    </Container>
  );
};

export default HomePage;
