import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { users } from "../hooks/users";
import Badges from "./badges";
import "../App.css"
import { useEffect, useState } from "react";

function Login () {

    const { login } = useAuth();
    const navigate = useNavigate()
    const [ message, setMessage ] = useState('');
    const [ typeMsg, setTypeMsg ] = useState('');
    const [ anim, setAnim ] = useState('');


    function valider(e) {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.Password.value;

        const user = users.find(
        (u) => u.userName === username && u.mdp === password
        );

        setAnim('');
        if (user) {
            setMessage('authentification correct');
            setTypeMsg('success');
            login(user);
            navigate('/')
        }else {
            setMessage('Username or password are incorrect');
            setTypeMsg('error');
        }

        setAnim("fade-in");
            console.log(1+anim)
        setTimeout(() => {
            setAnim("fade-out")
            console.log(2+anim)
        }, 2000);

    }
    return (
        <div style={{position: "relative"}}>
            <div className="form-container position-center">
                <h3 className="form-title">Login</h3>
                <form className="form" onSubmit={valider}>
                    <div className="form-group">
                        <label htmlFor="username" className="form-label">Username:</label>
                        <input type="text" id="username" className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Password:</label>
                        <input type="password" id="Password" className="form-input" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            <div className={anim} style={{opacity: "0"}} >{message}</div>
            </div>
        </div>
    )
}

export default Login;