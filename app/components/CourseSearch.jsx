'use client'

import { useState } from 'react'

function CourseSearch({ getSearchResults }) {
  const [query, setQuery] = useState()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/courses/search?query=${query}`)
    const courses = await res.json()
    getSearchResults(courses)
  }
  return (
    <form className='search-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='search-input'
        placeholder='Search courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />{' '}
      <button className='search-button' type='submit'>
        search
      </button>
    </form>
  )
}
export default CourseSearch
