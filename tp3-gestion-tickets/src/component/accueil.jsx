import { Link } from "react-router-dom";

function Accueil () {
    return (
        <>
            <h1 className="title" style={{textAlign: "center"}}>Accueil</h1>
            <div className="container-links">
                <div className="block-links">
                    <Link to={"/tickets"} className="component-link">Gestion des tickets</Link>
                    <Link to={"/technicien"} className="component-link">Gestion des techniciens</Link>
                </div>
                <div className="block-links">
                    <Link to={"/equipements"} className="component-link">Gestion des équipements</Link>
                    <Link to={"/tableauDeBord"} className="component-link">Tableau de bord</Link>
                </div>
            </div>
        </>
    )
}

export default Accueil;