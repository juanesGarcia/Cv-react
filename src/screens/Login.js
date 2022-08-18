import React, { Component } from "react";
import './Login.css'
import logo from '../img/logo192.png';

class Login extends Component {
    manejarsubmit=e=>{
        e.preventDefault();
    }
render(){   
    return (
    <div className="containerL ">
      <img src={logo}/>
      <form onSubmit={this.manejarsubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="correo"/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label" name="psw">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    
    </div>
  );
}
};

export default Login;