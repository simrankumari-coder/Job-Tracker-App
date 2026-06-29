import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const StatsBar = () => {
    const { jobs } = useContext(JobContext)
    const statBoxClass = "w-full sm:w-auto bg-gray-700 p-2 rounded text-center"
    return (
        <div>
            <div className='w-full max-w-6xl mx-auto mt-8 p-4 bg-gray-900 rounded text-white'>
                <div className='flex ml-9 mt-5 mb-3'><span className='text-white text-3xl font-medium'> 📊 Statistics </span></div>
                <div className='flex flex-wrap gap-3 md:gap-4 justify-center '>
                    <span className={statBoxClass}>Total : {jobs.length}</span>
                    <span className={statBoxClass}> Applied :{jobs.filter(job => job.status === "Applied").length}</span>
                    <span className="md:w-36 w-full text-center bg-gray-700 p-2 rounded text-white"> Interview : {jobs.filter(job => job.status === "Interview").length}</span>
                    <span className={statBoxClass}> Rejected : {jobs.filter(job => job.status === "Rejected").length}</span>
                    <span className={statBoxClass}>Offered : {jobs.filter(job => job.status === "Offered").length}</span></div>
            </div>
        </div>
    )
}

export default StatsBar     
