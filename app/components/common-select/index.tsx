"use client";

import { CountrySelectValue, ICommonSelectParams } from "@/app/types";
import React from "react";
import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

interface ICommonSelectProps {
  value?: ICommonSelectParams;
  options: ICommonSelectParams[];
  title: string;
  onChange: (value: any) => void;
}
const CommonSelect = ({ value, options, onChange, title }: ICommonSelectProps) => {


  return (
    <div>
      <div className="flex flex-col mb-1">
        <div className="font-medium">{title}</div>
      </div>
      <div>
        <Select
          isClearable
          value={value}
          options={options}
          placeholder="Select..."
          onChange={(value) => onChange(value?.value)}
          classNames={{
            control: () => "p-3 border-2",
            input: () => "text-lg",
            option: () => "text-lg ",
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 6,
            colors: {
              ...(theme?.colors ?? {}),
              primary: "black",
              primary25: "#ffe4e6",
              primary50: "#ffcacd",
            },
          })}
        />
      </div>
    </div>
  );
};

export default CommonSelect;
