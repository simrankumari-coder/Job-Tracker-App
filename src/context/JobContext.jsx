import React from 'react'
import { createContext, useState } from "react";
export const JobContext = createContext()

export const JobProvider = ({ children }) => {
    const [jobs, setJobs] = useState([])
    const [filter, setFilter] = useState('All')
    const [showForm, setShowForm] = useState(false)
    function toggleForm() {
        setShowForm(!showForm)
    }
    function addNewForm(jobData) {
        const jobId = { id: Date.now(), ...jobData }
        setJobs([...jobs, jobId])
    }
    function editForm(jobId, updateData) {
        let updatedData = jobs.map(job => {
            if (job.id === jobId) {
                return { ...job, ...updateData }
            } else {
                return job
            }
        })
        setJobs(updateData)
    }
    function deleteForm(deleteId) {
        let deleteJob = jobs.filter(id => job.id !== deleteId)
        setJobs(deleteJob)
    }
    function changeFilter(newFilter) {

        setFilter(newFilter)

    }
    return (
        <>
            <JobContext.Provider value={{
                addNewForm, editForm, deleteForm, toggleForm, changeFilter, jobs, setJobs, filter, setFilter
                , showForm, setShowForm
            }
            }>
                {children}
            </JobContext.Provider>
        </>
    )
}


