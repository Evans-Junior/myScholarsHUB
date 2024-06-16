import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { NavLink, useHistory } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dialogue, setDialogue] = useState({ visible: false, message: '', success: false });

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setDialogue({ visible: true, message: 'Login successful!', success: true });
                setTimeout(() => {
                    history.push("/Opportunities");
                }, 2000);
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setDialogue({ visible: true, message: errorMessage, success: false });
                console.log(error.code, errorMessage);
            });
    };

    const closeDialogue = () => {
        setDialogue({ visible: false, message: '', success: false });
    };

    return (
        <main>
            <section className="login-section">
                <div className="login-container">
                    <h1 className="login-title">Login</h1>
                    <form className="login-form" onSubmit={onLogin}>
                        <div className="form-group">
                            <label htmlFor="email-address">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button className="login-button" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            {dialogue.visible && (
                <div className="dialogue-overlay">
                    <div className={`dialogue-box ${dialogue.success ? 'success' : 'error'}`}>
                        <p>{dialogue.message}</p>
                        <button onClick={closeDialogue}>Close</button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Login;
