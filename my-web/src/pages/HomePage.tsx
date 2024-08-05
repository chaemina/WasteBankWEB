import React, { useEffect, useState } from "react";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";
import { instance } from "../apis/instance";

const HomePage: React.FC = () => {
  const [info, setInfo] = useState({ role: "", name: "" });

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const response = await instance.get(`api/home`);
        setInfo(response.data.body);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
    fetchInfo();
  }, []);

  return (
    <Container>
      <>
        <Header name="Gyeongmin" backgroundColor="#40892d" color="white" />
        <HomeButton role="user" />
      </>
    </Container>
  );
};

export default HomePage;
