import { NextResponse } from "next/server"
import {datas} from "@/data"
import { ISeferler } from "@/app/home/page"; 
export async function POST(req:Request){
     let filteredData : ISeferler[] | object[]
     const body = await req.json()
     console.log(body,"bodyyyyy");
     filteredData = datas.filter(item=> item.fromWhere === body.fromWhere && item.toWhere === body.toWhere && item.date === body.date)
     if(filteredData.length ==0){
          filteredData = [{message:`${body.fromWhere} - ${body.toWhere} arası sefer bulunamadı.`}]
     }
     return NextResponse.json({seferler:filteredData})
}    