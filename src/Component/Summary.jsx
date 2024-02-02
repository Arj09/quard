import React, { useContext } from "react";
import { UserContext } from "./ContextAPI/Context";
import { useNavigate } from "react-router-dom";

export const Summary = ()=>{
    const {data1} = useContext(UserContext)
    const navigate = useNavigate()

    const handleBack = ()=>{
        navigate("/")

    }
    const handleBookTicket = ()=>{
        navigate("/bookingpage")
        

    }
    
    return(
        <>
        <text className=" flex flex-row justify-center bg-red-600 text-white w-4/5 py-5 mx-auto text-xl my-4">Summary</text>
       <div className=" w-4/5 mx-auto border-2 border-red-400 ">
        <div className=" flex flex-row justify-center p-5">
            <img src={data1?.show?.image?.medium} alt="loading" />
        </div>
        <div className=" flex flex-col w-4/5 mx-auto gap-y-2  pb-5 ">
            <text>{`Name : ${data1?.show?.name}`}</text>
            <text>{`Language : ${data1.show.language}`}</text>
            <text>{`OfficialSite : ${data1.show.officialSite}`}</text>
            <text>{`Genres: ${data1.show.genres}`}</text>
            <text>{`Premiered : ${data1.show.premiered}`}</text>
            <text>{`status : ${data1.show.status}`}</text>
            <text>{`summary :${data1.show.summary}`}</text>
            <text>{`schedule : ${data1.show.schedule.days} ${data1.show.schedule.time} `}</text>
            <div className=" flex flex-row mx-auto gap-x-2">
                <button className="bg-red-700 text-white px-4 py-2 text-xl" onClick={ handleBack}>Back</button>
                <button className=" bg-red-700 text-white px-6 py-2 text-xl" onClick={handleBookTicket}>Book Ticket</button>
                
            </div>
            
            
            

        </div>

       </div>
       </>
    )
}