import { useEffect } from "react";

function Profile () {
    useEffect(()=>{
        console.log("profile component a été monter");
        return ()=> {
            console.log("profile component a été demonter");
        } ;
    },[])
    return <h1>Profile</h1>
}

export default Profile;