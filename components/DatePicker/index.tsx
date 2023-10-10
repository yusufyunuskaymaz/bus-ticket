"use client";
import React, { useState } from "react";
import {IAutoCompleteProps} from "../AutoComplete"

export default function DatePicker(props:IAutoCompleteProps) {
  const {data,setData} = props
  const [selectedDate, setSelectedDate] = useState(
  );

  const handleChange =(value:string)=>{
    setData({...data, date:value})
  }

  return (
    <div>
      <label htmlFor="date">Gidiş Tarihi</label>
      <input
        value={data.date}
        onChange={(e) => handleChange(e.target.value)}
        id="date"
        className="input text-black text-base w-full p-2 py-1.5 rounded font-normal"
        type="date"
      />
    </div>
  );
}
