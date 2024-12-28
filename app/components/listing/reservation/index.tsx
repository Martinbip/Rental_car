"use client";
import React from "react";
import { Range } from "react-date-range";

import Calendar from "@/app/components/calendar";
import Button from "@/app/components/button";

interface IListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

const ListingReservation = ({
  price,
  totalPrice,
  onChangeDate,
  onSubmit,
  dateRange,
  disabledDates,
  disabled,
}: IListingReservationProps) => {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">VND {price}</div>
        <div className="font-light text-neutral-600">ngày</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Chọn thuê" onClick={onSubmit} />
      </div>
      <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
        <div>Tổng tiền</div>
        <div>VND {totalPrice}</div>
      </div>
    </div>
  );
};

export default ListingReservation;
