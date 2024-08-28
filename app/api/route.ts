// Cấu hình các method (GET, POST, PUT, PATCH, DELETE)
import { NextResponse } from "next/server";
let users = [
    {
        id:1,
        name: "phuong hoa",
        address: "HN"
    },
    {
        id:2,
        name: "hong van",
        address: "HCM"
    },
    {
        id:3,
        name: "xuan phap",
        address: "ha giang"
    }
]
export async function GET() {
    return NextResponse.json("data tra ve!");
} 