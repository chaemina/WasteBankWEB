import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";
import { instance } from "../apis/instance";
import Spinner from "../components/common/atoms/Spinner";
import Footer from "../components/common/atoms/Footer";
import logo from "../assets/images/logo_wastebankapp.svg"
import IconImage from "../components/common/atoms/IconImage";

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
      <IconImage src={logo} width={150} height={130}/>
      <HomeButton role={role} />
      <Footer onClickLogout={handleLogout} />
    </Container>
  );
};

export default HomePage;
