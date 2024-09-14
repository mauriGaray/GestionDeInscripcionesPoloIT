import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/output.css';

import { Navbar } from './components/layout/Navbar';
import { Onboarding } from './pages/onboarding/Onboarding';
import { Inicio } from './pages/inicio/Inicio';
import { Footer } from './components/layout/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Onboarding/>}/>
        <Route path='/Inicio' element = {<Inicio />}/>
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
