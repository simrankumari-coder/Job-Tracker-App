import React from 'react'
import { JobContext } from '../context/JobContext'
import { useContext } from 'react'
const Header = () => {
  const { toggleForm } = useContext(JobContext)

  return (
    <div>

      <div className="bg-gray-900 mx-auto flex justify-between items-start p-3 w-full ">
        <span className="ml-2 md:text-6xl text-2xl font-bold text-white">Job Tracker</span>

        <button className="border border-white rounded p-0.5 md:p-2 text-white md:mr-10 md:mt-3.5 text-[18px] font-medium" onClick={toggleForm}>+ Add Form</button> </div>
    </div>
  )
}

export default Header


