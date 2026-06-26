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

    }
    function editForm() {

    }
    function deleteForm() {

    }
    function changeFilter() {

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


