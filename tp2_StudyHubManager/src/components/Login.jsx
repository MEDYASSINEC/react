import { useAuth } from "../hooks/useAuth";
import { users } from "../hooks/users";

function Login () {

    const { login } = useAuth();

    function valider(e) {
        e.preventDefault();

        const username = e.target.elements.Username.value;
        const password = e.target.elements.Password.value;

        const user = users.find(
        (u) => u.userName === username && u.mdp === password
        );

        if (user) {
            login(user);
        }
    }
    return (
        <div className="form-container">
            <h3 className="form-title">Login</h3>
            <form className="form" onSubmit={valider}>
                <div className="form-group">
                    <label htmlFor="username" className="form-label">Username:</label>
                    <input type="text" id="Username" className="form-input" />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="Password" className="form-input" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;