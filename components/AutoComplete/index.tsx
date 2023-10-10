"use client";
import React, { useState } from "react";
import Select from "react-select";
import { IValues } from "@/app/home/page";

const options = [
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
  { value: "izmir", label: "İzmir" },
];

export type ISelect = {
  value: string;
  label: string;
} | null;

export type IAutoCompleteProps = {
  direction?: string;
  setData: (value: IValues) => void;
  data: IValues;
};

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
        options={options}
        placeholder="Bir şehir seçin..."
        isClearable={true}
        onChange={(value) => handleChange(value)}
        // isClearable={true}
      />
    </>
  );
};
