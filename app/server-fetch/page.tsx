import React from 'react'
/*
    dùng fetch đi lấy dữ liệu và render dữ liệu ở phía server 
 */
async function getData() {
    const res = await fetch("http://jsonplacehoder.typicode.com/users");
    const data = res.json();
    return data;
}
export default async function page() {
    const users = await getData();
  return (
    <div>tìm nạp dữ liệu server với fetch!
        {users.map((item:any)=>{
            return <li>{item.name}</li>
        })}
    </div>
  )
}