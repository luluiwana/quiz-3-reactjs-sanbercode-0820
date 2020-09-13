import React, {Component} from 'react'

class Login  extends Component {
    render() { 
        return (
            <>
            <div className="body">
            <div className="section">
            <h2>Login</h2>
            <form>
            <table>
            <tr>
            <td><strong><label for="email">Username </label></strong></td>
            <td><input type="email" className="form-control" required/></td>
            </tr>
            <tr>
            <td><strong><label for="password">Password</label></strong></td>
            <td><input type="password" /></td>
            </tr>
            <tr>
            <td><button type="submit">Login</button></td>
            </tr>
            </table>
            </form>
            </div>
            </div>  
            </>
            )
    }
}

export default Login 