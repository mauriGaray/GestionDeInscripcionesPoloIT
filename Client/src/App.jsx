import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/output.css";

import { Navbar } from "./components/layout/Navbar";
import { Onboarding } from "./pages/onboarding/Onboarding";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";
import { Perfil } from "./pages/profile/perfil/Perfil";
import { Mentor } from "./pages/profile/mentor/Mentor";
import { Proyecto } from "./pages/profile/proyecto/Proyecto";
import { Footer } from "./components/layout/Footer";
import { NotFound } from "./pages/not found/NotFound";
import AdminView from "./pages/Admin/adminView/AdminView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
