import React, { Component, createContext } from "react";

export const LoginContext = createContext();

export class LoginProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogin: false, username: "admin", password: "password" };
        this.toggleLogin = this.toggleLogin.bind(this);
    }
    toggleLogin() {
        this.setState({ isLogin: !this.state.isLogin });
    }
    render() {
        return (
            <LoginContext.Provider
                value={{ ...this.state, toggleLogin: this.toggleLogin }}
            >
                {this.props.children}
            </LoginContext.Provider>
        );
    }
}