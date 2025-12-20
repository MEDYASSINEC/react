import { useEffect } from "react";
import Nav from "./nav";
import PropTypes from "prop-types";

function Profile ({lenPanier}) {
    useEffect(()=>{
        console.log("profile component a été monter");
        return ()=> {
            console.log("profile component a été demonter");
        } ;
    },[])
    return(
        <>
            <Nav page="profile" lenPanier={lenPanier}></Nav>
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