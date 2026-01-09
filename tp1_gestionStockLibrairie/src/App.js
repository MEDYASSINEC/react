import './App.css';
import App2 from './components/component_grp';
import MonComposant from './components/cycleVieClasse';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Panier from './components/panier';
import Profile from './components/profile';
// import FormAjout from './components/formAjout';
// import ProductTable from './components/table';


function App() {
  return (
    <div className="App">
      <h1>Gestion du stock du librairie</h1>
      <Navbar></Navbar>
      {/* <Routes>
        <Route path="/" element={<Navbar></Navbar>} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
    </div>
  );
}

export default App;
