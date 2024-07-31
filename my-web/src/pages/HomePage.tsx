import React from "react";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";

const HomePage: React.FC = () => {
  return (
    <Container>
      <div style={{ alignItems: "center" }}>
        <Header name="Fasten Julio Akbar" />
        <HomeButton />
      </div>
    </Container>
  );
};

export default HomePage;
