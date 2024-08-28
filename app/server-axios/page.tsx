import React from 'react'
import axios from 'axios'

async function getData() {
    const res = await axios.get("http://jsonplacehoder.typicode.com/users")
    console.log("gia tri res", res);
    return res.data
}
getData();
export default async function page() {
    const users = await getData();
  return (
    <div>tìm nạp dữ liệu server bằng axios!
        {users.map((item: any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}
