import React, { useContext, useEffect, useState } from "react";
import    axios from "axios"
import { UserContext } from "./ContextAPI/Context";
import { useNavigate } from "react-router-dom";

export const Home = ()=>{
    const [data, setData] = useState([])
    const {setData1 } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get("https://api.tvmaze.com/search/shows?q=all").then((res)=>{
          
            setData(res.data)

        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const handlegoto = (index)=>{
        setData1(data[index])
        console.log(data[index])
        navigate("/summary")

    }

    


    
    return(
        <div>
            <div className=" flex flex-col w-full bg-red-600 h-20 mx-auto  ">
                <text className=" text-center text-white text-2xl pt-5">Cenima House</text>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  grid-flow-row gap-y-3 gap-x-2  w-4/5 mx-auto pl- pt-5 ">
                {
                    data?.map((data, index)=>{
                        return(
                            <ul key={index} className=" w-5/5  h-96 cursor-pointer " onClick={()=>handlegoto(index)}>
                                <div className=" w-full h-4/5  border-2">
                                    <img alt="laodig" src={data?.show?.image?.medium} className=" w-full h-full mx-auto"   />
                                    
                                </div>
                                <div className=" flex flex-col gap-y-1 px-2 pt-2 bg-orange-400 pb-5">
                                    <text>{`Movie Name : ${data.show.name}`}</text>
                                    <text>{`Rating : ${data.show.rating.average}`}</text>

                                </div>
                            </ul>
                        )
                    })
                }
            </div>

        </div>
    )
}