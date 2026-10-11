import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { getcourses } from "../services/coursesService";
import { getCourseImageUrl } from "../services/courseImage";

function Home() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const result = await getcourses();
      if (result.status === "success" && Array.isArray(result.data)) {
        setCourses(result.data);
      }
    } catch (err) {
      console.error("Failed to load courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Filter courses based on search term & category tab
  const filteredCourses = useMemo(() => {
    return courses.filter((c) => {
      const name = (c.course_name || "").toLowerCase();
      const desc = (c.description || "").toLowerCase();
      const matchesSearch = name.includes(searchTerm.toLowerCase()) || desc.includes(searchTerm.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === "all") return true;
      if (activeCategory === "web") return name.includes("web") || name.includes("full stack") || name.includes("react");
      if (activeCategory === "ai") return name.includes("python") || name.includes("ai") || name.includes("ml");
      if (activeCategory === "java") return name.includes("java") || name.includes("spring");
      if (activeCategory === "cloud") return name.includes("cloud") || name.includes("aws") || name.includes("database") || name.includes("dbms");

      return true;
    });
  }, [courses, searchTerm, activeCategory]);

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <section className="hero-glow-bg text-white py-5 position-relative overflow-hidden">
        <div className="container py-lg-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 text-center text-lg-start">
              <span className="badge rounded-pill bg-primary bg-opacity-25 text-info border border-primary border-opacity-50 px-3 py-2 mb-3 fw-semibold">
                <i className="bi bi-stars text-warning me-1"></i> Industry-Standard Tech Programs
              </span>

              <h1 className="display-4 fw-extrabold mb-3 lh-sm">
                Unlock Your Potential with <br />
                <span className="gradient-text">Next-Gen Tech Learning</span>
              </h1>

              <p className="lead text-white-50 mb-4 pe-lg-4" style={{ fontSize: "1.15rem" }}>
                Master Full Stack, Artificial Intelligence, Cloud Computing, and Core Systems with curriculum curated by industry professionals.
              </p>

              {/* Search Bar in Hero */}
              <div className="d-flex flex-column flex-sm-row gap-2 max-w-lg shadow-lg p-2 rounded-4 mb-4" style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0 text-white-50">
                    <i className="bi bi-search fs-5"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-transparent border-0 text-white placeholder-white-50 shadow-none"
                    placeholder="Search courses (e.g. Full Stack, Python, Java, AWS)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ fontSize: "0.95rem" }}
                  />
                  {searchTerm && (
                    <button className="btn text-white-50 border-0" onClick={() => setSearchTerm("")}>
                      <i className="bi bi-x-circle"></i>
                    </button>
                  )}
                </div>
              </div>

              {/* Trust Metric Badges */}
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start pt-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-primary bg-opacity-25 p-2 text-primary d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                    <i className="bi bi-people-fill text-info"></i>
                  </div>
                  <div className="text-start">
                    <div className="fw-bold fs-6 mb-0 text-white">10,000+</div>
                    <div className="small text-white-50" style={{ fontSize: "0.75rem" }}>Enrolled Students</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-warning bg-opacity-25 p-2 text-warning d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <div className="text-start">
                    <div className="fw-bold fs-6 mb-0 text-white">4.9 / 5.0</div>
                    <div className="small text-white-50" style={{ fontSize: "0.75rem" }}>Student Rating</div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <div className="rounded-circle bg-success bg-opacity-25 p-2 text-success d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px" }}>
                    <i className="bi bi-briefcase-fill text-success"></i>
                  </div>
                  <div className="text-start">
                    <div className="fw-bold fs-6 mb-0 text-white">95%</div>
                    <div className="small text-white-50" style={{ fontSize: "0.75rem" }}>Placement Assistance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right Visual Banner */}
            <div className="col-lg-5 text-center">
              <div className="position-relative d-inline-block">
                <div className="p-4 rounded-4 shadow-2-strong" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))", backdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <img
                    src="/images/classroom.png"
                    alt="Learning Hub"
                    className="img-fluid rounded-3 mb-3"
                    style={{ maxHeight: "260px", objectFit: "contain" }}
                    onError={(e) => { e.target.src = "/images/sunbeam.png"; }}
                  />
                  <div className="d-flex justify-content-between align-items-center bg-white bg-opacity-10 p-3 rounded-3 text-start">
                    <div>
                      <div className="text-white-50 small" style={{ fontSize: "0.8rem" }}>Featured Batch</div>
                      <div className="fw-bold text-white">Admissions Open 2025-26</div>
                    </div>
                    <span className="badge bg-success px-3 py-2 rounded-pill">Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COURSES CATALOG SECTION */}
      <section className="py-5" id="courses">
        <div className="container py-3">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4 gap-3">
            <div>
              <span className="text-primary fw-bold text-uppercase small tracking-wide">
                <i className="bi bi-grid-fill me-1"></i> Catalog
              </span>
              <h2 className="fw-bold text-dark mt-1 mb-0">Explore In-Demand Courses</h2>
              <p className="text-muted small mt-1 mb-0">
                Choose from comprehensive full-stack and domain specialization tracks
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="d-flex flex-wrap gap-2">
              <button
                className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Courses
              </button>
              <button
                className={`filter-pill ${activeCategory === "web" ? "active" : ""}`}
                onClick={() => setActiveCategory("web")}
              >
                Web & Full Stack
              </button>
              <button
                className={`filter-pill ${activeCategory === "ai" ? "active" : ""}`}
                onClick={() => setActiveCategory("ai")}
              >
                AI & Python
              </button>
              <button
                className={`filter-pill ${activeCategory === "java" ? "active" : ""}`}
                onClick={() => setActiveCategory("java")}
              >
                Java
              </button>
              <button
                className={`filter-pill ${activeCategory === "cloud" ? "active" : ""}`}
                onClick={() => setActiveCategory("cloud")}
              >
                Cloud & DB
              </button>
            </div>
          </div>

          {/* Loading Indicator */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" style={{ width: "3rem", height: "3rem" }}>
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-muted mt-3 fw-medium">Loading programs...</p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-5 bg-white rounded-4 border p-5 my-4 shadow-sm">
              <i className="bi bi-search fs-1 text-muted"></i>
              <h4 className="fw-bold mt-3">No courses found</h4>
              <p className="text-muted">No courses match "{searchTerm}". Try another keyword or reset filters.</p>
              <button className="btn btn-outline-primary rounded-pill px-4" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="row g-4">
              {filteredCourses.map((e) => (
                <div className="col-xl-3 col-lg-4 col-md-6" key={e.course_id}>
                  <div className="course-card-premium h-100">
                    {/* Course Category Badge */}
                    <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 2 }}>
                      <span className="badge bg-dark bg-opacity-75 text-white px-2 py-1 rounded-pill small" style={{ fontSize: "0.72rem" }}>
                        Course #{e.course_id}
                      </span>
                    </div>

                    {/* Image Wrapper */}
                    <div className="img-wrapper">
                      <img
                        src={getCourseImageUrl(e)}
                        alt={e.course_name}
                        onError={(i) => {
                          i.target.src = "/images/classroom.png";
                        }}
                      />
                    </div>

                    {/* Card Body */}
                    <div className="card-body p-4 d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-primary fw-bold" style={{ fontSize: "0.75rem" }}>
                          <i className="bi bi-award-fill me-1"></i> Certified
                        </span>
                        <span className="text-warning small fw-bold">
                          <i className="bi bi-star-fill me-1"></i> 4.8
                        </span>
                      </div>

                      <h5 className="fw-bold text-dark text-capitalize mb-2" style={{ fontSize: "1.05rem", minHeight: "2.6rem" }}>
                        {e.course_name}
                      </h5>

                      <p className="text-muted small mb-3 flex-grow-1" style={{ fontSize: "0.85rem", lineHeight: "1.5" }}>
                        {e.description || "Comprehensive hands-on training with industry best practices and live projects."}
                      </p>

                      {/* Course Meta Info */}
                      <div className="pt-2 border-top mb-3 d-flex justify-content-between align-items-center text-muted" style={{ fontSize: "0.8rem" }}>
                        <span>
                          <i className="bi bi-calendar3 me-1 text-primary"></i>
                          {e.start_date ? new Date(e.start_date).toLocaleDateString("en-GB") : "Flexible"}
                        </span>
                        <span className="fw-bold text-dark fs-6">
                          {e.fees ? `₹${Number(e.fees).toLocaleString()}` : "Contact for fees"}
                        </span>
                      </div>

                      {/* CTA Button */}
                      <button
                        onClick={() => navigate(`/course-details/${e.course_id}`, { state: { course: e } })}
                        className="btn btn-modern-primary w-100 d-flex justify-content-center align-items-center gap-2"
                        style={{ fontSize: "0.9rem", padding: "0.6rem 1rem" }}
                      >
                        <span>View Details</span>
                        <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small tracking-wide">
              <i className="bi bi-lightning-charge-fill me-1"></i> Why Choose Sunbeam
            </span>
            <h2 className="fw-bold text-dark mt-1">Built for Aspiring Software Engineers</h2>
            <p className="text-muted small max-w-md mx-auto">
              Our curriculum is aligned with modern tech company standards to prepare you for high-impact roles.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded-4 border bg-light h-100 text-center text-lg-start">
                <div className="rounded-3 bg-primary bg-opacity-10 text-primary p-3 d-inline-flex mb-3">
                  <i className="bi bi-laptop fs-3"></i>
                </div>
                <h5 className="fw-bold">Hands-on Labs</h5>
                <p className="text-muted small mb-0">Build real-world projects with modern frameworks and version control.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded-4 border bg-light h-100 text-center text-lg-start">
                <div className="rounded-3 bg-warning bg-opacity-10 text-warning p-3 d-inline-flex mb-3">
                  <i className="bi bi-person-video3 fs-3"></i>
                </div>
                <h5 className="fw-bold">Industry Mentors</h5>
                <p className="text-muted small mb-0">Learn directly from senior software architects and domain experts.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded-4 border bg-light h-100 text-center text-lg-start">
                <div className="rounded-3 bg-success bg-opacity-10 text-success p-3 d-inline-flex mb-3">
                  <i className="bi bi-patch-check fs-3"></i>
                </div>
                <h5 className="fw-bold">Recognized Certificate</h5>
                <p className="text-muted small mb-0">Earn credentials recognized by top technology hiring partners.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="p-4 rounded-4 border bg-light h-100 text-center text-lg-start">
                <div className="rounded-3 bg-info bg-opacity-10 text-info p-3 d-inline-flex mb-3">
                  <i className="bi bi-rocket-takeoff fs-3"></i>
                </div>
                <h5 className="fw-bold">Career Assistance</h5>
                <p className="text-muted small mb-0">Resume reviews, mock interviews, and placement connection support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA ENROLL STRIP */}
      <section className="py-5 text-white" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)" }}>
        <div className="container py-3 text-center">
          <h2 className="fw-bold mb-3">Ready to Accelerate Your Career?</h2>
          <p className="text-white-50 max-w-lg mx-auto mb-4" style={{ fontSize: "1.05rem" }}>
            Join thousands of successful engineers who kickstarted their careers through our structured learning programs.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-modern-primary px-4 py-2" onClick={() => window.scrollTo({ top: 400, behavior: "smooth" })}>
              Browse All Courses <i className="bi bi-arrow-right ms-1"></i>
            </button>
            <button className="btn btn-modern-secondary px-4 py-2" onClick={() => navigate("/aboutus")}>
              Learn About Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;