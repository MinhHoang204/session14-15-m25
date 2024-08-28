"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function page() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const getData = async ()=>{
            let res = await axios.get("http://localhost:3000/api")
            setUsers(res.data)
        }
        getData()
    }, [])
    /*
       render du lieu o phia client 
     */
  return (
    <div>page
        {users.map((item:any)=>{
            return <li key={item.id}>{item.name}</li>
        })}
    </div>
  )
}
