import { Link } from "react-router-dom";

function Nav( { page, lenPanier }) {
    return (
        <>
             <nav aria-label="...">
                <ul className="pagination">
                    <li className={page=="accueil"?"page-item active": "page-item" } >
                        <Link to="/" className="page-link">Accueil</Link>
                    </li>
                    <li className={page=="panier"?"page-item active": "page-item" } >
                        <Link to="/panier" className="page-link">Panier <span className=""> {lenPanier} </span></Link>
                    </li>
                    <li className={page=="profile"?"page-item active": "page-item" } >
                        <Link to="/profile" className="page-link">Profile</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;