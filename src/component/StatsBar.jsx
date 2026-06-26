import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const StatsBar = () => {
    const { jobs } = useContext(JobContext)
    const statBoxClass = "text-center w-38 bg-teal-950 p-2 rounded text-black"
    return (
        <div>
            <div className='mt-8 mx-auto max-w-6xl gap-8 flex-col flex  p-4 rounded text-2xl font-bold bg-green-200'>
                <div className='flex flex-start'><span className='text-black '>Stats Bar</span></div>
                <div className='flex justify-center items-center gap-4  '>
                    <span className={statBoxClass}>Total : {jobs.length}</span> |
                    <span className={statBoxClass}> Applied :{jobs.filter(job => job.status === "applied").length}</span> |
                    <span className="w-40 ext-center bg-teal-950 p-2 rounded text-black"> Interview : {jobs.filter(job => job.status === "interview").length}</span> |
                    <span className={statBoxClass}> Rejected : {jobs.filter(job => job.status === "rejected").length}</span> |
                    <span className={statBoxClass}>Offered : {jobs.filter(job => job.status === "offered").length}</span></div>
            </div>
        </div>
    )
}

export default StatsBar     
