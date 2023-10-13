"use client";
import React, { useState } from "react";
import Select from "react-select";
import { IValues,ISelect,IAutoCompleteProps } from "@/types";

const options1 = [
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
];
const options2 = [
  { value: "İzmir", label: "İzmir" },
  { value: "Bursa", label: "Bursa" },
];





export const AutoComplete = (props: IAutoCompleteProps) => {
  const { direction, setData, data } = props;
  const handleChange = (value: ISelect) => {
    if (direction === "nereden") {
      setData({ ...data, fromWhere: value?.label ? value.label : "" });
    } else {
      setData({ ...data, toWhere: value?.label ? value.label : "" });
    }
  };
  return (
    <>
      <Select
        className="text-black text-sm"
        options={direction == "nereden" ? options1 : options2}
        placeholder="Bir şehir seçin..."
        isClearable={true}
        onChange={(value) => handleChange(value)}
        // isClearable={true}
      />
    </>
  );
};
