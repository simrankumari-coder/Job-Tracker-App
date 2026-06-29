import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
import JobCard from './JobCard'
const JobList = () => {
    const { filter, jobs, addNewForm } = useContext(JobContext)
    const filteredArray =
        jobs.filter(job => {
            if (filter === "All") {
                return true
            } else {
                return job.status === filter
                console.log(filter)
            }
        })

    return (
        <div>

            <div className='bg-gray-900 rounded flex flex-col gap-9 mx-auto mt-9 w-full max-w-6xl '>
                <div className='md:ml-9 ml-2 mt-8'><span className='text-white text-3xl font-medium '> 📋 Your Applications </span></div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center items-center gap-4 p-4'>
                    {filteredArray.map(job => {
                        return <JobCard key={job.id} job={job} />
                    })}</div>
            </div>
        </div >
    )
}

export default JobList
