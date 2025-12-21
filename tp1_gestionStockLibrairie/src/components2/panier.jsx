import { useContext } from "react";
import Nav from "./nav";
import ProductsContext from "./products-context";


function Panier () {
    const { panier } = useContext(ProductsContext);
    return (
        <>
            <Nav page='panier' lenPanier={panier.length}></Nav>
            <h1>Votre Panier</h1>
            {panier.length === 0 && <p>Panier vide</p>}

            {panier.length > 0 && (
                <div className="tableContainer">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>description</th>
                                <th>image</th>
                                <th>Prix Unitaire</th>
                            </tr>
                        </thead>
                        <tbody>
                            {panier.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.desc}</td>
                                    <td><img className="img-produit" src={item.image} alt="image de produit" /></td>
                                    <td>{item.pu}</td>
                                    <td>{item.qte}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Panier;