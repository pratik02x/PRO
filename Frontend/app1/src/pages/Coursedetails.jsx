import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getCourseImageUrl } from '../services/courseImage';

export default function CourseDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const course = location.state?.course;

  if (!course) {
    return (
      <div className="container py-5 text-center" style={{ minHeight: "60vh" }}>
        <div className="p-5 bg-white rounded-4 border shadow-sm my-5 d-inline-block" style={{ maxWidth: "500px" }}>
          <i className="bi bi-exclamation-circle text-warning fs-1 mb-3"></i>
          <h3 className="fw-bold">Course Not Found</h3>
          <p className="text-muted">Please browse our catalog to select an available course.</p>
          <button className="btn btn-modern-primary mt-2" onClick={() => navigate('/home')}>
            Browse Courses
          </button>
        </div>
      </div>
    );
  }

  // Date format function
  const formatDate = (dateString) => {
    if (!dateString) return "Flexible Schedule";
    return new Date(dateString).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }); 
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }} className="py-5">
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/home" className="text-decoration-none text-muted">
                <i className="bi bi-house-door me-1"></i>Home
              </Link>
            </li>
            <li className="breadcrumb-item text-muted">Courses</li>
            <li className="breadcrumb-item active text-primary fw-semibold" aria-current="page">
              {course.course_name}
            </li>
          </ol>
        </nav>

        {/* Main Details Card */}
        <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm border">
          <div className="row g-5 align-items-center">
            
            {/* Left: Featured Image Box */}
            <div className="col-lg-5">
              <div 
                className="rounded-4 p-4 d-flex align-items-center justify-content-center"
                style={{
                  background: 'linear-gradient(180deg, #f1f5f9 0%, #e2e8f0 100%)',
                  minHeight: '340px',
                  border: '1px solid #e2e8f0'
                }}
              >
                <img 
                  src={getCourseImageUrl(course)} 
                  className="img-fluid" 
                  alt={course.course_name} 
                  style={{ maxHeight: '250px', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.08))' }} 
                  onError={(i) => {
                    i.target.src = "/images/classroom.png";
                  }}
                />
              </div>

              {/* Quick Highlights */}
              <div className="d-flex justify-content-around mt-4 p-3 bg-light rounded-3 text-center">
                <div>
                  <div className="fw-bold text-dark fs-6">
                    <i className="bi bi-star-fill text-warning me-1"></i> 4.8 / 5
                  </div>
                  <div className="small text-muted" style={{ fontSize: "0.75rem" }}>Course Rating</div>
                </div>
                <div className="border-start"></div>
                <div>
                  <div className="fw-bold text-dark fs-6">
                    <i className="bi bi-patch-check-fill text-primary me-1"></i> Verified
                  </div>
                  <div className="small text-muted" style={{ fontSize: "0.75rem" }}>Certification</div>
                </div>
                <div className="border-start"></div>
                <div>
                  <div className="fw-bold text-dark fs-6">
                    <i className="bi bi-person-video3 text-success me-1"></i> Mentored
                  </div>
                  <div className="small text-muted" style={{ fontSize: "0.75rem" }}>Industry Pro</div>
                </div>
              </div>
            </div>

            {/* Right: Course Specs & Actions */}
            <div className="col-lg-7">
              <div className="d-flex gap-2 mb-2">
                <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 rounded-pill fw-semibold">
                  Course ID #{course.course_id}
                </span>
                <span className="badge bg-success bg-opacity-10 text-success px-3 py-2 rounded-pill fw-semibold">
                  Open for Admission
                </span>
              </div>

              <h1 className="fw-extrabold text-dark mb-3 lh-sm" style={{ fontSize: "2.2rem" }}>
                {course.course_name}
              </h1>

              <p className="text-muted mb-4 lead" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
                {course.description || "Master essential industry tools and frameworks. This program includes extensive hands-on laboratory sessions, code reviews, and capstone project development."}
              </p>

              {/* Info Grid */}
              <div className="row g-3 mb-4">
                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light">
                    <div className="text-muted small mb-1">
                      <i className="bi bi-calendar-event text-primary me-2"></i>Batch Start Date
                    </div>
                    <div className="fw-bold text-dark">{formatDate(course.start_date)}</div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light">
                    <div className="text-muted small mb-1">
                      <i className="bi bi-calendar-check text-info me-2"></i>Batch Completion
                    </div>
                    <div className="fw-bold text-dark">{formatDate(course.end_date)}</div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light">
                    <div className="text-muted small mb-1">
                      <i className="bi bi-clock-history text-warning me-2"></i>Access Validity
                    </div>
                    <div className="fw-bold text-dark">
                      {course.video_expire_days ? `${course.video_expire_days} Days Access` : "180 Days Access"}
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="p-3 border rounded-3 bg-light">
                    <div className="text-muted small mb-1">
                      <i className="bi bi-currency-rupee text-success me-2"></i>Total Investment
                    </div>
                    <div className="fw-bold text-primary fs-5">
                      {course.fees ? `₹${Number(course.fees).toLocaleString()}` : "₹4,000"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="d-flex flex-wrap gap-3 pt-2">
                <button 
                  onClick={() => navigate('/register', { state: { course_id: course.course_id, courseId: course.course_id } })} 
                  className="btn btn-modern-primary px-4 py-3 d-inline-flex align-items-center gap-2 fs-6"
                >
                  <i className="bi bi-check2-circle fs-5"></i>
                  <span>Register for this Course</span>
                </button>
                <button 
                  onClick={() => navigate('/home')} 
                  className="btn btn-outline-secondary px-4 py-3 rounded-3"
                >
                  <i className="bi bi-arrow-left me-1"></i> Back to Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}