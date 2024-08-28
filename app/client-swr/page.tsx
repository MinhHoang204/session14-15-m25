"use client";
import React from 'react'
import useSWR from 'swr'
import axios from 'axios'

// viết hàm đi lấy data
const getData = (url:string)=>
    axios.get(url)
    .then(res=>{
        return res.data
    })

export default function page() {
    const {data,error} = useSWR(
        "http://jsonplacehoder.typicode.com/users",
        getData
    )
    if(error) return <div>qúa trình lấy dữ liệu thất bại</div>
    console.log("gia tri data1111", data)
    if(!data) return <div>đang tải dữ liệu.....</div>
  return (
    <div>fetching data với thư viện swr
        {
            data.map((item:any) =>{
                return <li key = {item.id}>{item.name}</li>
            })
        }
    </div>
  )
}
