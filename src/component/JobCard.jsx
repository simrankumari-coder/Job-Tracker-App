import React from 'react'

const JobCard = ({ job }) => {

    return (
        <div>
            <div>
                <span>{job.company}</span>
                <span>{job.position}</span>
                <span>{job.date}</span>
                <span>{job.status}</span>
                <span>{job.notes}</span>
            </div>
        </div>
    )
}

export default JobCard

