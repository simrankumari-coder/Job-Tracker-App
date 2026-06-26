import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const FIlterJob = () => {
    const { filter, changeFilter } = useContext(JobContext)

    return (
        <div>
            <div className=' bg-gray-900 rounded flex justify-center items-center gap-12 mx-auto mt-9 w-full max-w-6xl h-28'>
                <button className={`${filter === "All" ? "bg-blue-900" : "bg-gray-700"} p-2.5 w-32 text-white text-3xl rounded `} onClick={() => { changeFilter("All") }}>All</button>
                <button className={`${filter === "Applied" ? "bg-blue-900" : "bg-gray-700"} p-2.5 w-32 text-white text-3xl rounded `} onClick={() => { changeFilter("Applied") }}>Applied</button>
                <button className={`${filter === "Interview" ? "bg-blue-900" : "bg-gray-700"} p-2.5 w-34 text-white text-3xl rounded `} onClick={() => { changeFilter("Interview") }}>Interview</button>
                <button className={`${filter === "Rejected" ? "bg-blue-900" : "bg-gray-700"} p-2.5 w-32 text-white text-3xl rounded `} onClick={() => { changeFilter("Rejected") }}>Rejected</button>
                <button className={`${filter === "Offered" ? "bg-blue-900" : "bg-gray-700"} p-2.5 w-32 text-white text-3xl rounded `} onClick={() => { changeFilter("Offered") }}>Offered</button>
            </div>
        </div>
    )
}

export default FIlterJob
