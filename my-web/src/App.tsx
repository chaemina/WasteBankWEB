import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GarbagebinPage from "./pages/GarbagebinPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/garbagebin" element={<GarbagebinPage />} />
      </Routes>
    </>
  );
}

export default App;
