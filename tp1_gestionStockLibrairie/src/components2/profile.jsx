import { useContext, useEffect } from "react";
import Nav from "./nav";
import PropTypes from "prop-types";
import ProductsContext from "./products-context";


function Profile () {
    const { panier } = useContext(ProductsContext)
    useEffect(()=>{
        console.log("profile component a été monter");
        return ()=> {
            console.log("profile component a été demonter");
        } ;
    },[])
    return(
        <>
            <Nav page="profile" lenPanier={panier.length}></Nav>
            <h1>Profile</h1>
        </>
    )
}

export default Profile;

Profile.propTypes = {
    lenPanier: PropTypes.number.isRequired,
};

Profile.defaultProps = {
    lenPanier: 8,
};