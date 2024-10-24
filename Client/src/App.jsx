import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./styles/output.css";

import { Navbar } from "./components/layout/Navbar";
import { Onboarding } from "./pages/onboarding/Onboarding";
import { Login } from "./pages/login/Login";
import { Register } from './pages/register/Register';
import { Perfil } from './pages/profile/perfil/Perfil';
import { Mentor } from './pages/profile/mentor/Mentor';
import { Proyecto } from './pages/profile/proyecto/Proyecto';
// import { Equipo } from './pages/profile/equipo/Equipo';
import { Footer } from "./components/layout/Footer";
import { NotFound } from "./pages/not found/NotFound";
import AdminView from "./pages/Admin/adminView/AdminView";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path='/Registro' element = {<Register/>}/>
        <Route path='/Perfil' element = {<Perfil/>}/>
        <Route path='/Mentor' element = {<Mentor/>}/>
        <Route path='/Proyecto' element = {<Proyecto/>}/>
        {/* <Route path='/Equipo' element = {<Equipo/>}/> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
