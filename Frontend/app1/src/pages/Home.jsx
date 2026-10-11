import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import { getcourses } from '../services/coursesService'
import { useNavigate } from 'react-router-dom'
import config from '../services/config'

function Home() {
  const [course, setcourse] = useState([])
  const navigate = useNavigate()

 
  const IMAGE_BASE_URL = `${config.Base_URL}/uploads`;

  useEffect(() => {
    getcourse()
  }, [])

  const getcourse = async () => {
    const result = await getcourses()
    if (result.status === "success") {
      setcourse(result.data) 
    }
  }

  return (
    <div>
     
      <div className="container mt-4">
        <h2 className="text-center mb-4 fw-bold">Available Courses</h2>

        <div className="row">
          {course.map((e) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={e.course_id}>
              <div
                className="card shadow-sm h-100"
                style={{
                  borderRadius: "12px",
                  overflow: "hidden",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  border: "1px solid #eee",
                  maxWidth: "320px", 
                  margin: "0 auto" 
                }}
              >
                
                <div
                  style={{
                    height: "180px", 
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#fff",
                    padding: "15px"
                  }}
                >
                  <img
                  
                    src={
                      e.course_image 
                        ? `${IMAGE_BASE_URL}/${e.course_image}` 
                        : `/images/${e.image}`
                    }
                    alt={e.course_name}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain"
                    }}
                    
                    onError={(i) => {
                        i.target.src = "/images/python.png"; 
                    }}
                  />
                </div>

                {/* BODY */}
                <div className="card-body d-flex flex-column p-4">
                  <h6 className="fw-bold text-capitalize mb-2" style={{ fontSize: '1.1rem' }}>
                    {e.course_name}
                  </h6>
                  <p className="text-muted small mb-3">
                    Starts on: {e.start_date ? new Date(e.start_date).toDateString() : "TBA"}
                  </p>
                  
                  <button 
                    onClick={() => navigate(`/course-details/${e.course_id}`, { state: { course: e } })}
                    className="btn btn-primary mt-auto py-2"
                    style={{ borderRadius: "8px", fontWeight: "500", fontSize: '0.9rem' }}
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home