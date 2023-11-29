import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from 'axios';

const Login = () => {
    const[id,Changeusername]=useState("");
    const[password,Changepassword]=useState("");

    const usenavigate = useNavigate()

    const ProceedLogin=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/login',{id,password})
        .then(result => {console.log(result)
            if(result.data==="Success"){
                toast.success("Login Successful")
                usenavigate('/display')
            }else{
                toast.error("Incorrect Password")
            }
            
        })
        .catch(err=>console.log(err))
    }
    return (  
        <div className="body" >
        <div className="row justify-content-start align-items-center" style={{ minHeight: "100vh" }}>
            <div className="col-lg-3">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>username<span className="errmsg">*</span></label>
                                <input value={id} onChange={e=>Changeusername(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password<span className="errmsg">*</span></label>
                                <input type="password" value={password} onChange={e=>Changepassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Login</button>
                            &nbsp;
                            <Link className="btn btn-primary" to={'/register'}>New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
 
export default Login;