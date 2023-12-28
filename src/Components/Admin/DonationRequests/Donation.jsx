import React, { useEffect, useState } from 'react'
import "./Donation.css"
import { donationDetails } from '../../../Services/adminApi'
function Donation() {
  const [donationData,setDonationData]=useState([])
  const fetchDonationDetails=async()=>{
    const {data} =await donationDetails()
    if(data.status){
      console.log(data,"*****");
      setDonationData(data?.data)
    }
  }
  useEffect(()=>{
fetchDonationDetails()
  },[])
  return (
    <div className='donationMain'>
        <h4>Donation requests</h4>
        {donationData.map((value)=>(
          <div className='mainDivClass'>
          <img className='image' src={`http://localhost:4000/images/${value.imageUrl}`} alt="" />

          {/* localhost:4000/images/Requests/big_200707_bike_1703701893288.jpg */}
        <div className='listView'>
        <h4>{value.requestTitle}</h4>
        <h6 className='my-4'>{value.requestDescription}</h6>
       <div className='lastline'>
        <p className='d-flex'>Contact  : <span>{ value.ownerId.email}</span></p>
        <button className='btn btn-primary verifiedBtn'>Verify Donation</button>
        </div>
        </div>
        </div>
        ))}
    </div>
  )
}

export default Donation