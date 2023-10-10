"use client";
import React from "react";
import { Select } from "react-select";

const styles = {};

const options = [
  { value: "istanbul", label: "İstanbul" },
  { value: "ankara", label: "Ankara" },
  { value: "izmir", label: "İzmir" },
];

export const AutoComplete = () => (
  <>
    <Select
      className="text-black text-sm"
      options={options}
      styles={styles}
      placeholder="Bir şehir seçin..."
    />
  </>
);
