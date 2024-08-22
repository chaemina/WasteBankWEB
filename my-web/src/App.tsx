import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GarbagebinPage from "./pages/GarbagebinPage";
import PickupPage from "./pages/PickupPage";
import DetailPickupPage from "./pages/DetailPickupPage";
import SchedulePage from "./pages/SchedulePage";
import RatingPage from "./pages/RatingPage";
import MySavingPage from "./pages/MySavingPage";
import LoginPage from "./pages/LoginPage";
import CollectingPage from "./pages/CollectingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/:role" element={<HomePage />} />
        <Route path="/garbagebin" element={<GarbagebinPage />} />
        <Route path="/pickup" element={<PickupPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/mysaving" element={<MySavingPage />} />
        <Route path="/rating/:garbageId" element={<RatingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detailpickup/:garbageId" element={<DetailPickupPage />} />
        <Route path="/collecting" element={<CollectingPage />} />
      </Routes>
    </>
  );
}

export default App;
