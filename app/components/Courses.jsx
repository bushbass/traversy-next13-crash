import Link from 'next/link'

async function fetchCourses() {
  const response = await fetch('http://localhost:3000/api/courses')
  const courses = response.json()
  return courses
}

const Courses = async () => {
  const courses = await fetchCourses()
  return (
    <div>
      {courses.map((course) => (
        <div className='card' key={course.id}>
          <h2>{course.title}</h2>
          <small>Level: {course.level}</small>
          <p>{course.descriptioin}</p>
          <Link className='btn' target='_blank' href={course.link}>
            Go to course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
