import config from "./config";

export function getCourseImageUrl(course) {
  if (!course) return "/images/classroom.png";

  if (course.course_image) {
    return `${config.Base_URL}/uploads/${course.course_image}`;
  }

  const name = (course.course_name || "").toLowerCase();

  if (name.includes("python") && (name.includes("ai") || name.includes("ml"))) {
    return "/images/ml.png";
  }
  if (name.includes("python")) {
    return "/images/python.png";
  }
  if (name.includes("java")) {
    return "/images/java.png";
  }
  if (name.includes("full stack") || name.includes("web") || name.includes("mern")) {
    return "/images/mern.png";
  }
  if (name.includes("react") || name.includes("mobile") || name.includes("android")) {
    return "/images/android.png";
  }
  if (name.includes("cloud") || name.includes("aws")) {
    return "/images/genai.png";
  }
  if (name.includes("database") || name.includes("dbms") || name.includes("sql")) {
    return "/images/os.png";
  }
  if (name.includes("security") || name.includes("cyber")) {
    return "/images/classroom.png";
  }
  if (name.includes("ui") || name.includes("design") || name.includes("ux")) {
    return "/images/sun2.png";
  }

  if (course.image) {
    return `/images/${course.image}`;
  }

  return "/images/classroom.png";
}

