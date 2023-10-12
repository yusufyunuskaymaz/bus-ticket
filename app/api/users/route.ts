import { NextResponse } from "next/server"
import {datas} from "@/data"
export async function POST(req:Request){
     const body = await req.json()
     console.log(body,"bodyyyyy");
     const filteredData = datas.filter(item=> item.kalkisSehri === body.fromWhere && item.varisSehri === body.toWhere)
     return NextResponse.json({seferler:filteredData})
}    