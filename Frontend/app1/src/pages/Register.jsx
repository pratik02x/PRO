import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { registerUser } from '../services/userServices'
import { useLocation } from 'react-router'

function Register() {
    const location = useLocation();
    const initialCourseId = location.state?.course_id || '';
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [course_id, setcourse_id] = useState(initialCourseId)
  const [mobile_no, setmobile_no] = useState('')
  const navigate = useNavigate()

  const signup = async () => {
    if (name === '')
      toast.warn('Name must be entered')
    else if (email === '')
      toast.warn('Email must be entered')
    else if (course_id === '')
      toast.warn('Course ID must be entered')
    else {
      const result = await registerUser(name, email, course_id, mobile_no)
      if (result.status === 'success') {
        navigate('/login')
        toast.success('User registered successfully! Please login.')
      } else {
        toast.error(result.error)
      }
    }
  }

  return (
    <div
      className="hero-glow-bg min-vh-100 d-flex flex-column justify-content-center align-items-center p-3 py-5"
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
          maxWidth: '460px', 
          borderRadius: '24px',
          background: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)'
        }}
      >
        <div className="text-center mb-4">
          <h3 className="fw-bold text-dark mb-1">Course Registration</h3>
          <p className="text-muted small">Create your student account and enroll into your program</p>
        </div>

        <div className="mb-3">
          <label htmlFor="inputName" className="form-label fw-semibold small text-muted">
            Full Name
          </label>
          <div className="input-group">
            <span className="input-group-text bg-light border-end-0 text-muted">
              <i className="bi bi-person"></i>
            </span>
            <input
              type="text"
              className="form-control form-control-modern border-start-0"
              id="inputName"
              placeholder="e.g. John Doe"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
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
              placeholder="e.g. john@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-2 mb-3">
          <div className="col-5">
            <label htmlFor="inputCourse" className="form-label fw-semibold small text-muted">
              Course ID
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <i className="bi bi-journal-bookmark"></i>
              </span>
              <input
                type="text"
                className="form-control form-control-modern border-start-0"
                id="inputCourse"
                placeholder="ID"
                value={course_id}
                onChange={e => setcourse_id(e.target.value)}
              />
            </div>
          </div>

          <div className="col-7">
            <label htmlFor="inputMobile" className="form-label fw-semibold small text-muted">
              Mobile Number
            </label>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0 text-muted">
                <i className="bi bi-telephone"></i>
              </span>
              <input
                type="tel"
                className="form-control form-control-modern border-start-0"
                id="inputMobile"
                placeholder="10-digit mobile"
                value={mobile_no}
                onChange={e => setmobile_no(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="d-grid mb-3 mt-4">
          <button 
            className="btn btn-modern-primary py-2 d-flex align-items-center justify-content-center gap-2"
            onClick={signup}
          >
            <span>Complete Registration</span>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

        <p className="text-center text-muted small mb-0">
          Already have an account?{' '}
          <Link to="/login" className="text-decoration-none text-primary fw-bold">
            Sign In Here
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

export default Register;
