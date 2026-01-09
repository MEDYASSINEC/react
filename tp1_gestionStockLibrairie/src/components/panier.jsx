function Panier ({panier}) {
    return (
        <>
            <h1>Votre Panier</h1>
            {panier.length === 0 && <p>Panier vide</p>}

            
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
                        {panier.map((item) => (
                            <tr>
                                <td>{item.desc}</td>
                                <td><img className="img-produit" src={item.image} alt="image de produit" /></td>
                                <td>{item.pu}</td>
                                <td>{item.qte}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Panier;