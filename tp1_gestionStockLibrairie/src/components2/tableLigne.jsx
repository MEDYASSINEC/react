import { useContext } from "react";
import ProductsContext from "./products-context";

function TableTr ( {data} ) {
    const { ajouterAuPanier, supp_produit } = useContext(ProductsContext);
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.desc}</td>
            <td><img className="img-produit" src={data.image} alt="image de produit" /></td>
            <td>{data.pu}</td>
            <td>{data.qte}</td>
            <td>
                <button className="btn btn-primary mt-2" onClick={() => ajouterAuPanier(data)}>Ajouter au panier</button>
                <br />
                <button className="btnSupp" onClick={() => supp_produit(data.id)}>supprimer</button>
            </td>
        </tr>
    )
}
export default TableTr;