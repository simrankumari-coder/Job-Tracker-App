import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'

const JobList = () => {
    const { filter, jobs } = useContext(JobContext)
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
                    return <JobCard key={ } job={job} />
                })}
            </div>
        </div>
    )
}

export default JobList
