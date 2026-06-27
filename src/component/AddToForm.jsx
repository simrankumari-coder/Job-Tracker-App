import React from 'react'
import { useContext, useState } from 'react'
import { JobContext } from '../context/JobContext'

const AddToForm = () => {
    const { showForm, toggleForm, addNewForm } = useContext(JobContext)
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("")
    const [notes, setNotes] = useState("")

    if (!showForm) {
        return null
    }

    const handleSubmit = () => {
        addNewForm({ company, position, date, status, notes })
        setCompany("")
        setPosition("")
        setDate("")
        setStatus("")
        setNotes("")
    }
    return (
        <div>
            <div>
                <label htmlFor="company">Company :
                    <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder='company name' id='company' />
                </label>
                <label htmlFor="position" >Position :
                    <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder='position' id='position' />
                </label>
                <label htmlFor="date">date :
                    <input value={date} onChange={(e) => setDate(e.target.value)} placeholder='date' id='date' />
                </label>
                <label htmlFor="filter">
                    <select value={status} onChange={(e) => setStatus(e.target.value)} id='filter'>
                        <option disabled>Select the current criteria </option>
                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Rejected</option>
                        <option>Offered</option>
                    </select>
                </label>
                <label htmlFor="views">
                    <textarea value={notes} onChange={(e) => setNotes(e.target.value)} id='views'></textarea>
                </label>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={toggleForm}>Cancel</button>
            </div>
        </div>
    )
}

export default AddToForm
