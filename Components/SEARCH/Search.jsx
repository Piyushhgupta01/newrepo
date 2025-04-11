import axios from "axios";
import { useContext, useState } from "react";
import { IoSendSharp } from "react-icons/io5";

import { Responsecontext } from "../../Context/Responsecontext";
import loadingimg from "../../assets/load.gif";

import "./serach.css";

export const Search=()=>{

    const [searchTerm,setsearchTerm]=useState("");
    const [loading,setloading]=useState(false);
    const{response,setresponse}= useContext(Responsecontext);
    

    const handleChange=(e)=>{
        setsearchTerm(e.target.value);

        
    } 

    const sendData=async()=>{
        try{
            const res=await axios.post("https://chatbot-backend-0hmv.onrender.com",{searchTerm})
            console.log(res.data);
            setresponse(pre=>{
                return[...response,{ answer: res.data,query:searchTerm}]
            });
            setloading(false);

        } catch(error){
            setloading(false);
            console.log(error)
        }
    }


    const handlesubmit=(e)=>{
        e.preventDefault();
        setloading(true);
        sendData();
    }
    return(
        <>
        <div className="conatiner"> 
            <form className="form-container" onSubmit={handlesubmit}>
            <input
            type="text"
            name="searchTerm"
            placeholder="HOW CAN I HELP YOU !!"
            className="search-input"
            onChange={handleChange}
            />
           {
            !loading?  (<button type="Submit">
            <IoSendSharp size={24}></IoSendSharp>
        </button>) : (
            <div className="imgg">
                <img src={loadingimg} alt="loasingimg"/>
            </div>
        )
           }
            </form>
            
        </div>
        

        
        
        </>
    )
}