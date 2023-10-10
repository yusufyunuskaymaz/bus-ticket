import { NextResponse } from "next/server"
import {datas} from "@/data"
export async function GET(){
     return NextResponse.json({seferler:datas})
}    