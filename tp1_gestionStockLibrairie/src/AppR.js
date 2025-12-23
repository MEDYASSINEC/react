import { useState } from 'react';
import './App.css';
import App2 from './components2/component_grp';
import Panier from './components2/panier';
import Profile from './components2/profile';
import { Route, Routes } from 'react-router-dom';
import ProductsContext from './components2/products-context';
import CycleVie from './components2/cycleVieFonction';




function AppR() {
  const [panier, setPanier] = useState([]);
  const [tableData, setTableData] = useState([]);

  const ajouterAuPanier = (produit) => {
      setPanier((prev) => [...prev, produit]);
  }

  const ajouterProduit = (newData) => {
      setTableData(prev => {
          const lastID = prev.length > 0
          ? prev[prev.length - 1].id
          : 0;

          const newDataWithId = {
          ...newData,
          id: lastID + 1
          };

          return [...prev, newDataWithId];
      });

  };

  const supp_produit = (id) => {
      setTableData(prev => prev.filter(item => item.id !== id))
  };
  return (
    <ProductsContext.Provider value={{panier, tableData, supp_produit, ajouterAuPanier, ajouterProduit}}>
      {/* <div className="App">
        <h1>Gestion du stock du librairie</h1>
        <Routes>
          <Route path="/" element={<App2 />} />
          <Route path="/panier" element={<Panier panier={panier}/>} />
          <Route path="/profile" element={<Profile lenPanier={"hhh"} />} />
        </Routes>
      </div> */}
      <CycleVie></CycleVie>
    </ProductsContext.Provider>
  );
}

export default AppR;
