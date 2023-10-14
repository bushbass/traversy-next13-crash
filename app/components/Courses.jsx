import Link from 'next/link'

const Courses = ({ courses }) => {
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
