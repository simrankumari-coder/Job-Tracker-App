import React from 'react'
import { createContext, useState, useEffect } from "react";
export const JobContext = createContext()

export const JobProvider = ({ children }) => {
    const [filter, setFilter] = useState('All')
    const [showForm, setShowForm] = useState(false)
    const [editJob, setEditJob] = useState(null)
    const [jobs, setJobs] = useState(
        () => {
            let saved = localStorage.getItem("jobs")
            return saved ? JSON.parse(saved) : []
        }
    )


    useEffect(() => {
        localStorage.setItem("jobs", JSON.stringify(jobs))
    }, [jobs])

    function toggleForm() {
        setShowForm(!showForm)
    }

    function addNewForm(jobData) {
        if (editJob) {
            let updatedData = jobs.map(edit => {
                return edit.id === editJob.id ? { ...edit, ...jobData } : edit
            })
            setJobs(updatedData)
            setEditJob(null)
        } else {


            const newJob = { id: Date.now(), ...jobData }
            setJobs([...jobs, newJob])
            setShowForm(false)
        }
    }

    function openEditForm(job) {
        console.log(job)
        setEditJob(job)
        setShowForm(true)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    function deleteForm(deleteId) {
        let deleteJob = jobs.filter(job => job.id !== deleteId)
        setJobs(deleteJob)
    }
    function changeFilter(newFilter) {

        setFilter(newFilter)


    }
    return (
        <>
            <JobContext.Provider value={{
                addNewForm, deleteForm, toggleForm, changeFilter, jobs, setJobs, filter, setFilter
                , showForm, setShowForm, editJob, openEditForm, setEditJob
            }
            }>
                {children}
            </JobContext.Provider>
        </>
    )
}


