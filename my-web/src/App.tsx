import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GarbagebinPage from "./pages/GarbagebinPage";
import PickupPage from "./pages/PickupPage";
import DetailPickupPage from "./pages/DetailPickupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/garbagebin" element={<GarbagebinPage />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/detailpickup" element={<DetailPickupPage />} />
      </Routes>
    </>
  );
}

export default App;
