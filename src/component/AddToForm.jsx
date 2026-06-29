import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { JobContext } from '../context/JobContext'

const AddToForm = () => {
    const { showForm, toggleForm, addNewForm, editJob } = useContext(JobContext)
    const [company, setCompany] = useState("")
    const [position, setPosition] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("Applied")
    const [notes, setNotes] = useState("")
    useEffect(() => {
        if (editJob) {
            setCompany(editJob.company)
            setPosition(editJob.position)
            setDate(editJob.date)
            setStatus(editJob.status)
            setNotes(editJob.notes)
        }


    }, [editJob])

    if (!showForm) {
        return null
    }

    const handleSubmit = () => {
        if (
            !company ||
            !position ||
            !date ||
            !status
        ) {
            alert("please fill all the fields")
            return
        }
        addNewForm({ company, position, date, status, notes })
        setCompany("")
        setPosition("")
        setDate("")
        setStatus("Applied")
        setNotes("")
        toggleForm()
    }
    return (
        <div>
            <div className=' text-white flex justify-start p-4 text-2xl flex-col gap-4 bg-gray-900 mx-auto mt-2 max-w-xl rounded-2xl'>
                <label htmlFor="company">Company :
                    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='company name' id='company' />
                </label>
                <label htmlFor="position" >Position :
                    <input type='text' value={position} onChange={(e) => setPosition(e.target.value)} placeholder='position' id='position' />
                </label>
                <label htmlFor="date">Date :
                    <input type='date' value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' id='date' />
                </label>
                <label htmlFor="filter">
                    <span className='text-white'>Select your criteria :</span>
                    <select className='bg-gray-700 p-2 rounded-md' value={status} onChange={(e) => setStatus(e.target.value)} id='filter'>

                        <option>Applied</option>
                        <option>Interview</option>
                        <option>Rejected</option>
                        <option>Offered</option>
                    </select>
                </label>
                <label htmlFor="views">
                    <span className='text-white'>Share your views :</span>
                    <textarea placeholder="share your views" className=' bg-gray-700 p-2 rounded-md' value={notes} onChange={(e) => setNotes(e.target.value)} id='views'></textarea>
                </label>
                <div className='flex flex-row gap-5 justify-center items-center '>
                    <button className=' bg-gray-700 rounded-md w-24  p-1' onClick={handleSubmit}>Submit</button>
                    <button className=' bg-gray-700 rounded-md w-24  p-1' onClick={toggleForm}>Cancel</button></div>
            </div>
        </div>
    )
}

export default AddToForm
