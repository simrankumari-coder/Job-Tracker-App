import React from 'react'
import { useContext } from 'react'
import { JobContext } from '../context/JobContext'
const JobCard = ({ job }) => {
    const { deleteForm, openEditForm, setEditJob, editJob, toggleForm } = useContext(JobContext)
    return (
        <div>
            <div className='bg-gray-800 border border-gray-800 flex flex-col gap-4 w-full h-full p-4 rounded-md hover:border-blue-900 hover: hover:bg-gray-700 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.4)] hover:scale-[1.00]'>

                <h3 className='text-lg font-bold text-blue-400'>🏢 {job.company}</h3>
                <p className='text-sm text-gray-300'>{job.position}</p>
                <p className='text-xs text-gray-400'>📅 Date: {job.date}</p>
                <div>
                    <p className={`font-semibold ${job.status === "Applied" ? "text-blue-400" :
                        job.status === "Interview" ? "text-yellow-400" :
                            job.status === "Rejected" ? "text-red-400" :
                                "text-green-400"

                        } `}>✓ Status: {job.status}</p>
                    <span className='text-white text-sm line-clamp-3 break-words'>📝 Notes: {job.notes || "No notes"}</span>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-blue-600 px-4 py-1 rounded text-sm hover:bg-blue-700' onClick={() => openEditForm(job)

                    }>Edit</button>
                    <button className='bg-red-600 px-4 py-1 rounded text-sm hover:bg-red-700' onClick={() => deleteForm(job.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default JobCard

