import { useState } from "react";
import App2 from "./component_grp";
import Panier from "./panier";
import Profile from "./profile";

function Navbar () {
    const [pageActive, setPageActive] = useState("accueil");
    const [panier, setPanier] = useState([]);
    const [tableData, setTableData] = useState([])
    const goTo = (page) => {
        setPageActive(page)
    }

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
        <>
            <nav aria-label="...">
                <ul className="pagination">
                    <li className={pageActive=="accueil"?"page-item active": "page-item" } onClick={()=>goTo('accueil')}>
                        <a className="page-link">Accueil</a>
                    </li>
                    <li className={pageActive=="panier"?"page-item active": "page-item" } onClick={()=>goTo('panier')}>
                        <a className="page-link">Panier <span className="bg-info"> {panier.length} </span></a>
                    </li>
                    <li className={pageActive=="profile"?"page-item active": "page-item" } onClick={()=>goTo('profile')}>
                        <a className="page-link">Profile</a>
                    </li>
                </ul>
            </nav>
            {pageActive=='accueil' && <App2 ajouterAuPanier={ajouterAuPanier} ajouterProduit={ajouterProduit} data={tableData} suppProduit={supp_produit} />}
            {pageActive=='panier' && <Panier panier={panier}/>}
            {pageActive=='profile' && <Profile/>}
        </>
    )
}

export default Navbar;