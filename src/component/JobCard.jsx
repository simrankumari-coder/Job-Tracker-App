import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const JobCard = ({ job }) => {
    const { editForm, deleteForm } = useContext(JobContext)
    return (
        <div>
            <div>
                <span>{job.company}</span>
                <span>{job.position}</span>
                <span>{job.date}</span>
                <span>{job.status}</span>
                <span>{job.notes}</span>
                <div>
                    <button onClick={() => editForm()}>Edit</button>
                    <button onClick={() => deleteForm(job.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard

