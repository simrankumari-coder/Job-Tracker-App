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
            }
        })

    return (
        <div>
            <div>
                {filteredArray.map(job => {
                    return <JobCard key={job.id} job={job} />
                })}
            </div>
        </div>
    )
}

export default JobList
