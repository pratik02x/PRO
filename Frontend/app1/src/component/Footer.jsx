import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-auto text-white" style={{ backgroundColor: "#0b1120", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div className="container py-5">
        <div className="row g-4 justify-content-between">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="d-flex align-items-center mb-3">
              <span 
                className="d-inline-flex align-items-center justify-content-center me-2"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #2563eb 0%, #38bdf8 100%)",
                  color: "#fff"
                }}
              >
                <i className="bi bi-mortarboard-fill fs-5"></i>
              </span>
              <span className="fs-4 fw-bold">
                Sunbeam <span className="gradient-text">e-Learno</span>
              </span>
            </div>
            <p className="text-white-50 small mb-4" style={{ lineHeight: "1.7" }}>
              Empowering engineers and tech professionals with hands-on, industry-standard diploma and certification courses in cutting-edge software technologies.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: "36px", height: "36px" }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: "36px", height: "36px" }}>
                <i className="bi bi-github"></i>
              </a>
              <a href="#" className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center" style={{ width: "36px", height: "36px" }}>
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6 mb-3">
            <h6 className="fw-bold text-uppercase text-white mb-3" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              Quick Navigation
            </h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 text-white-50">
              <li>
                <Link to="/home" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1 small text-primary"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1 small text-primary"></i> About Us
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1 small text-primary"></i> Student Portal
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-white-50 text-decoration-none">
                  <i className="bi bi-chevron-right me-1 small text-primary"></i> Course Enrollment
                </Link>
              </li>
            </ul>
          </div>

          {/* Market Yard Campus */}
          <div className="col-lg-3 col-md-6 mb-3">
            <h6 className="fw-bold text-uppercase text-white mb-3" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              Market Yard Campus
            </h6>
            <p className="text-white-50 small mb-2" style={{ lineHeight: "1.6" }}>
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              'Sunbeam Chambers', Plot No.R/2, Market Yard Road, Gultekdi, Pune - 411 037.
            </p>
            <div className="small text-white-50 d-flex flex-column gap-1 mt-2">
              <div><i className="bi bi-telephone-fill text-primary me-2"></i>+91 82 82 82 9806</div>
              <div><i className="bi bi-envelope-fill text-warning me-2"></i>scc@sunbeaminfo.in</div>
            </div>
          </div>

          {/* Hinjawadi Campus */}
          <div className="col-lg-3 col-md-6 mb-3">
            <h6 className="fw-bold text-uppercase text-white mb-3" style={{ fontSize: "0.85rem", letterSpacing: "1px" }}>
              Hinjawadi IT Park
            </h6>
            <p className="text-white-50 small mb-2" style={{ lineHeight: "1.6" }}>
              <i className="bi bi-geo-alt-fill text-danger me-2"></i>
              "Sunbeam IT Park", Phase 2, Rajiv Gandhi Infotech Park, Hinjawadi, Pune - 411 057.
            </p>
            <div className="small text-white-50 d-flex flex-column gap-1 mt-2">
              <div><i className="bi bi-telephone-fill text-primary me-2"></i>+91 82 82 82 9806</div>
              <div><i className="bi bi-envelope-fill text-warning me-2"></i>scc@sunbeaminfo.in</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Strip */}
      <div className="py-3" style={{ backgroundColor: "#060a14", borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center small text-white-50 gap-2">
          <p className="mb-0">© {new Date().getFullYear()} Sunbeam e-Learno. All rights reserved.</p>
          <div className="d-flex gap-3">
            <span className="text-decoration-none text-white-50">Privacy Policy</span>
            <span className="text-decoration-none text-white-50">Terms of Use</span>
            <span className="text-decoration-none text-white-50">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;