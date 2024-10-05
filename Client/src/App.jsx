import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/output.css';

import { Navbar } from './components/layout/Navbar';
import { Onboarding } from './pages/Onboarding';
import { Inicio } from './pages/Inicio';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { Footer } from './components/layout/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Onboarding/>}/>
        <Route path='/Inicio' element = {<Inicio />}/>
        <Route path='/Registro' element = {<Register/>}/>
        <Route path='/Perfil' element = {<Profile/>}/>
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
