import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BookingPage = ()=>{
    const [data, setData] = useState({})
    const [show, setShow] = useState(false)

    const navigate = useNavigate()


    const handledata = (e)=>{
        const name = e.target.name
        const value = e.target.value
        setData(data=>({...data, [name]: value}))
    }


    const handleBack = ()=>{
        navigate("/")

    }


    const handleBookTicket = (e) =>{
        e.preventDefault()
        localStorage.setItem("Booking", JSON.stringify(data))
        //setData({fullname:"", time:"", date:""})
        setShow(true)
    }



    return(
        <>
        <text className=" flex flex-row justify-center bg-red-600 text-white w-4/5 py-5 mx-auto text-xl my-4">Ticket Booking page</text>
        <div className=" flex flex-row w-4/5 mx-auto my-2">
            <button className=" bg-red-700 text-white px-4 py-2 text-xl" onClick={handleBack}>Back</button>
        </div>
        {
            show && (
                <div className=" flex flex-col w-3/5 mx-auto gap-y-3 my-5 h-96 bg-red-800 absolute left-0 right-0 mt-10 justify-center text-white">
                    <text className=" text-white text-xl pt-5  text-center">Your movie ticket has booked</text>
                    <div className=" flex flex-row mx-auto">
                        <button className=" bg-gray-600 px-8 py-2" onClick={handleBack}>Back</button>
                    </div>
                </div>
            )
        }
        <form  onSubmit={handleBookTicket} className=" flex flex-col gap-y-2 px-4 py-2 w-4/5 lg:w-2/5          mx-auto mt-20 border-red-700 border-2 ">
            <text className=" text-center pb-5 pt-8 text-xl">Book your Movie Tiket</text>
            <input placeholder=" Enter your full name  " className=" border-2 border-red-600 h-10 pl-2" name="fullname" value={data.fullname} onChange={handledata} required/>
            
            <input type="date" className=" border-2 border-red-600 h-10 pl-2" name="date" value={data.date} onChange={handledata} required />
            <input type="time" className=" border-2 border-red-600 h-10 pl-2  " value={data.time} onChange={handledata} name="time " required />
            <div className="flex flex-row mx-auto gap-x-2 my-5">
                
                <button className=" bg-red-700 text-white px-6 py-2 text-xl" >Book Ticket</button>
            </div>

        </form>
        
        
        
        
        
        </>
    )
}