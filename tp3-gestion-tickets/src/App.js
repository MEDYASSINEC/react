import './App.css';
import { Route, Routes } from 'react-router-dom';
import TicketsList from './component/tickets';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<h1>Accueil</h1>} />
        <Route path="/equipements" element={<h1>Gestion des équipements</h1>} />
        <Route path="/tickets" element={<TicketsList />} />
        <Route path="/detailsTicket" element={<h1>Détails d'un ticket</h1>} />
        <Route path="/tableauDeBord" element={<h1>Tableau de bord</h1>} />
      </Routes>
    </div>
  );
}

export default App;
