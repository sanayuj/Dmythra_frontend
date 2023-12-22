import React, { useState,useEffect } from 'react'
import "./Announcements.css"
import { fetchAnnouncement } from '../../../Services/userApi'
function Announcements() {
    const [announcement,setAnnouncement]=useState([])
    const fetchData=async()=>{
        const {data}=await fetchAnnouncement()
        if(data.status){
            setAnnouncement(data.Announcement)
        }else{
            console.log("error");
        } 
    }
    useEffect(()=>{
        fetchData()

    },[])
  return (
    <div>
     <h4 className='announcementHeading'>Announcements</h4>
        <div className='mainDivAnn'>
            {announcement.map((announcement)=>(
                <div className='announcementDiv'>
                <h5 className='my-3'>{announcement.announcementTopic}</h5>
                <p>{announcement.announcementDescription}.</p>
                <p>Posted date : {new Date(announcement.date).toLocaleDateString("en-GB")}</p>
             </div>
            ))}
            
            
            
        </div>
    </div>
  )
}

export default Announcements;