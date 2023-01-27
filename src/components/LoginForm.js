import React from "react";
import "./LoginForm.css"

const LoginForm = () => {

    return (
        <div className="con">
            <div className="cover">
                <h1>Login</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />

                <div className="login-btn">Login</div>
            </div>
        </div>
    )
}

export default LoginForm