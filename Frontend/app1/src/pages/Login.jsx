import React ,{ useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { loginUser } from '../services/userServices';
import { LoginContext } from '../App';
import { useContext } from 'react';
import Navbar from '../component/Navbar';
function Login() {
   
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const navigate=useNavigate();
    const{loginstatus,setloginstatus}=useContext(LoginContext);
    const{username,setusername}=useContext(LoginContext);
    const{userrole,setuserrole}=useContext(LoginContext)
    const signin=async (event)=>{

    const result= await loginUser(email,password);
        if(email==""){
            toast.warn("email required")
        }
        else if(password==""){
            toast.warn("password required")
        }
        else{
        if(result.status=="success"){
            
            sessionStorage.setItem("token",result.data.token);
            sessionStorage.setItem("username", result.data.email);
            console.log(sessionStorage.getItem("username"))

            setloginstatus(true);
            setusername(result.data.email)
            setuserrole(result.data.role)
           
             
            if(result.data.role === "student"){
              navigate("/home")
            }else{
                 navigate("/dashboard");
            }
            
            toast.success("login successfull");
        }
        else{
            toast.error(result.error);
        }
    }

    }

  return (
    <div
      className="hero-glow-bg min-vh-100 d-flex flex-column justify-content-center align-items-center p-3"
    >
      <div className="mb-4 text-center">
        <Link to="/home" className="text-decoration-none d-inline-flex align-items-center gap-2">
          <span 
            className="d-inline-flex align-items-center justify-content-center shadow-sm"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
              color: "#fff"
            }}
          >
            <i className="bi bi-mortarboard-fill fs-5"></i>
          </span>
          <span className="fs-3 fw-bold text-white">
            Sunbeam <span className="gradient-text">e-Learno</span>
          </span>
        </Link>
      </div>

      <div 
        className="card border-0 p-4 p-sm-5 shadow-2-strong" 
        style={{ 
          width: '100%', 
          maxWidth: '440px', 
          borderRadius: '24px',
          background: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)'
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark mb-1">Welcome Back</h3>
          <p className="text-muted small">Sign in to access your courses and learning dashboard</p>
        </div>

        <div className="mb-3">
          <label htmlFor="inputEmail" className="form-label fw-semibold small text-muted">
            Email Address
          </label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0 text-muted">
              <i className="bi bi-envelope"></i>
            </span>
            <input
              type="email"
              className="form-control form-control-modern border-start-0"
              id="inputEmail"
              placeholder="e.g. student@example.com"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="inputPassword" className="form-label fw-semibold small text-muted">
            Password
          </label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0 text-muted">
              <i className="bi bi-lock"></i>
            </span>
            <input
              type="password"
              className="form-control form-control-modern border-start-0"
              id="inputPassword"
              placeholder="Enter your password"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className="d-grid mb-3">
          <button 
            className="btn btn-modern-primary py-2 d-flex align-items-center justify-content-center gap-2"
            onClick={signin}
          >
            <span>Sign In</span>
            <i className="bi bi-box-arrow-in-right"></i>
          </button>
        </div>

        <p className="text-center text-muted small mb-0">
          Don't have an account?{' '}
          <Link to="/register" className="text-decoration-none text-primary fw-bold">
            Register for Course
          </Link>
        </p>
      </div>

      <div className="mt-4 text-center">
        <Link to="/home" className="text-white-50 text-decoration-none small">
          <i className="bi bi-arrow-left me-1"></i> Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Login;
