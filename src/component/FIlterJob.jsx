import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const FIlterJob = () => {
    const { filter, changeFilter } = useContext(JobContext)

    return (
        <div>
            <div className=' bg-gray-900 rounded flex flex-col  gap-12 mx-auto mt-9 w-full max-w-6xl '>
                <div className='flex flex-start ml-9 mt-8 '><span className=' text-white text-3xl font-medium'> 🔍 Filter Jobs </span></div>
                <div className='flex flex-wrap justify-center items-center gap-5 mb-6'>
                    <button className={`${filter === "All" ? "bg-blue-900" : "bg-gray-700"} text-2xl text-center w-38 p-2 rounded text-white `} onClick={() => {
                        changeFilter("All")
                    }}>All</button>
                    <button className={`${filter === "Applied" ? "bg-blue-900" : "bg-gray-700"} text-2xl text-center w-38  p-2 rounded text-white  `} onClick={() => {
                        changeFilter("Applied")
                    }}>Applied</button>
                    <button className={`${filter === "Interview" ? "bg-blue-900" : "bg-gray-700"} text-2xl text-center w-38  p-2 rounded text-white `} onClick={() => {
                        changeFilter("Interview")
                    }}>Interview</button>
                    <button className={`${filter === "Rejected" ? "bg-blue-900" : "bg-gray-700"} text-2xl text-center w-38  p-2 rounded text-white `} onClick={() => {
                        changeFilter("Rejected")
                    }}>Rejected</button>
                    <button className={`${filter === "Offered" ? "bg-blue-900" : "bg-gray-700"} text-2xl text-center w-38  p-2 rounded text-white `} onClick={() => {
                        changeFilter("Offered")
                    }}>Offered</button>
                </div>
            </div>
        </div >
    )
}

export default FIlterJob
