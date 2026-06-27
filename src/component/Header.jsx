import React from 'react'
import { JobContext } from '../context/JobContext'
import { useContext } from 'react'
const Header = () => {
  const { toggleForm } = useContext(JobContext)

  return (
    <div>
      <div>
        <div className="bg-green-200 mx-auto flex justify-start items-start p-3 "> <span className="text-6xl font-bold text-black">Job Tracker</span></div>
      </div>
      <div><button onClick={toggleForm}>+ Add Form</button></div>
    </div>
  )
}

export default Header


