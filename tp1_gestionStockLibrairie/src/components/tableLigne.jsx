function TableTr (  {data, onDelete, ajouterAuPanier} ) {
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
                <button className="btnSupp" onClick={() => onDelete(data.id)}>supprimer</button>
            </td>
        </tr>
    )
}
export default TableTr;