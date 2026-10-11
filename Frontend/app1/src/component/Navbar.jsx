import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../App";

function Navbar() {
  const { loginstatus, setloginstatus, username, userrole } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    setloginstatus(false);
    sessionStorage.clear();
    navigate("/home");
  };

  const changepassword = () => {
    navigate("/updatepassword");
  };

  const getcourses = () => {
    navigate("/getcourses");
  };

  const updateprofile = () => {
    navigate("/adminsettings");
  };

  const updatepassword = () => {
    navigate("/updatepassword");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top glass-nav py-3">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-white fw-bold fs-4 text-decoration-none" to="/home">
            <span 
              className="d-inline-flex align-items-center justify-content-center me-2 shadow-sm"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
                color: "#fff"
              }}
            >
              <i className="bi bi-mortarboard-fill fs-5"></i>
            </span>
            <span>
              Sunbeam <span className="gradient-text">e-Learno</span>
            </span>
          </Link>

          <button 
            className="navbar-toggler border-0 text-white" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarContent"
          >
            <i className="bi bi-list fs-2 text-white"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <Link className="nav-link text-white-50 px-3 py-2 fw-medium" to="/home">
                  <i className="bi bi-house-door me-1"></i> Home
                </Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link text-white-50 px-3 py-2 fw-medium" to="/aboutus">
                  <i className="bi bi-info-circle me-1"></i> About Us
                </Link>
              </li>

              {loginstatus && userrole === "student" && (
                <li className="nav-item mx-2">
                  <Link className="nav-link text-white-50 px-3 py-2 fw-medium" to="/mycourses">
                    <i className="bi bi-collection-play me-1"></i> My Courses
                  </Link>
                </li>
              )}
            </ul>

            <div className="d-flex align-items-center">
              {!loginstatus ? (
                <div className="d-flex gap-2">
                  <Link to="/login" className="btn btn-modern-primary d-inline-flex align-items-center gap-2">
                    <i className="bi bi-box-arrow-in-right"></i> Sign In
                  </Link>
                </div>
              ) : (
                <div className="dropdown">
                  <button
                    className="btn btn-modern-secondary dropdown-toggle d-flex align-items-center gap-2 py-2 px-3"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span 
                      className="d-inline-flex align-items-center justify-content-center text-white fw-bold"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        backgroundColor: "#3b82f6",
                        fontSize: "0.85rem"
                      }}
                    >
                      {username ? username.charAt(0).toUpperCase() : "U"}
                    </span>
                    <span className="small text-truncate" style={{ maxWidth: "140px" }}>
                      {username}
                    </span>
                    <span className="badge bg-primary ms-1" style={{ fontSize: "0.7rem" }}>
                      {userrole}
                    </span>
                  </button>

                  <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 mt-2 p-2" style={{ borderRadius: "14px", minWidth: "200px" }}>
                    <li className="px-3 py-2 border-bottom mb-1">
                      <div className="small text-muted">Signed in as</div>
                      <div className="fw-bold text-dark text-truncate">{username}</div>
                    </li>
                    
                    {userrole === "student" ? (
                      <li>
                        <button className="dropdown-item py-2 rounded-2 d-flex align-items-center gap-2" onClick={updatepassword}>
                          <i className="bi bi-key text-primary"></i> Change Password
                        </button>
                      </li>
                    ) : (
                      <li>
                        <button className="dropdown-item py-2 rounded-2 d-flex align-items-center gap-2" onClick={updateprofile}>
                          <i className="bi bi-gear text-primary"></i> Admin Settings
                        </button>
                      </li>
                    )}

                    <li><hr className="dropdown-divider my-1" /></li>
                    <li>
                      <button className="dropdown-item py-2 rounded-2 text-danger d-flex align-items-center gap-2" onClick={logout}>
                        <i className="bi bi-box-arrow-right"></i> Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Admin Quick Bar */}
      {loginstatus && userrole === "admin" && (
        <nav className="navbar navbar-expand py-2 shadow-sm" style={{ backgroundColor: "#1e293b", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="container justify-content-center">
            <ul className="navbar-nav flex-row gap-3 flex-wrap justify-content-center">
              <li className="nav-item">
                <Link className="nav-link text-white-50 px-3 py-1 rounded-pill fw-medium small d-flex align-items-center gap-1" to="/dashboard">
                  <i className="bi bi-speedometer2 text-info"></i> Dashboard
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white-50 px-3 py-1 rounded-pill fw-medium small" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-journal-bookmark text-primary"></i> Courses
                </span>
                <ul className="dropdown-menu shadow border-0">
                  <li><button className="dropdown-item" onClick={getcourses}>All Courses</button></li>
                  <li><Link className="dropdown-item" to="/addcourse">Add Course</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle text-white-50 px-3 py-1 rounded-pill fw-medium small" role="button" data-bs-toggle="dropdown">
                  <i className="bi bi-play-btn text-danger"></i> Videos
                </span>
                <ul className="dropdown-menu shadow border-0">
                  <li><Link className="dropdown-item" to="/getallvideos">All Videos</Link></li>
                  <li><Link className="dropdown-item" to="/addvideos">Add Video</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white-50 px-3 py-1 rounded-pill fw-medium small d-flex align-items-center gap-1" to="/getallstudents">
                  <i className="bi bi-people text-success"></i> Students
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default Navbar;