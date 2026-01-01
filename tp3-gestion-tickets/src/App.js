import './App.css';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GestionTickets from './component/tickets/gestionTickets';
import GestionTechnicien from './component/techniciens/gestionTechniciens';
import GestionEquipement from './component/equipements/gestionEquipement';
import Accueil from './component/accueil';
import { MdHome } from 'react-icons/md';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <Link to={"/"} className='goHome'><MdHome /></Link>}
      
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/equipements" element={<GestionEquipement />} />
        <Route path="/tickets" element={<GestionTickets />} />
        <Route path="/technicien" element={<GestionTechnicien />} />
        <Route path="/tableauDeBord" element={<h1>Tableau de bord</h1>} />
      </Routes>
    </div>
  );
}

export default App;
