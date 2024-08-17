import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/common/atoms/Container";
import Header from "../components/common/molecules/Header";
import HomeButton from "../components/common/molecules/HomeButton";
import { instance } from "../apis/instance";
import Spinner from "../components/common/atoms/Spinner";

const HomePage: React.FC = () => {
  const { role } = useParams<{ role: string }>();
  const [name, setName] = useState<string | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/api/home");
        if (response.data.success) {
          setName(response.data.response.name);
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
  }, [name]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Header name={name || ""} backgroundColor="#40892d" color="white" />
      <HomeButton role={role} />
    </Container>
  );
};

export default HomePage;
