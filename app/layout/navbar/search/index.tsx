"use client";

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  const searchModal = useSearchModal();
  const params = useSearchParams();
  const { getByValue } = useCountries();

  const locationValue = params?.get("locationValue");
  const startDate = params?.get("startDate");
  const endDate = params?.get("endDate");
  const seatCount = params?.get("seatCount");

  const locationLabel = useMemo(() => {
    if (locationValue) {
      return getByValue(locationValue as string)?.label;
    }

    return "Địa điểm";
  }, [locationValue, getByValue]);

  const durationLabel = useMemo(() => {
    if (startDate && endDate) {
      const start = new Date(startDate as string);
      const end = new Date(endDate as string);
      let diff = differenceInDays(end, start);

      if (diff === 0) {
        diff = 1;
      }

      return `${diff} Ngày`;
    }

    return "Thời gian thuê";
  }, [startDate, endDate]);

  const guestLabel = useMemo(() => {
    if (seatCount) {
      return `${seatCount} Chỗ`;
    }

    return "Chọn số chỗ ";
  }, [seatCount]);
  return (
    <div
      onClick={searchModal.onOpen}
      className="border-[1px] w-full md:w-auto py-2 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
    >
      <div className="flex flex-row items-center justify-between">
        <div
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          {locationLabel}
        </div>
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          {durationLabel}
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">{guestLabel}</div>
          <div
            className="
              p-2 
              bg-green-600
              rounded-lg
              text-white
            "
          >
            <button
          className="
            px-4 
            py-2 
            bg-green-600 
            text-white 
            font-semibold 
            rounded-lg
            hover:bg-green-700 
            transition
          "
        >
          Tìm Xe
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
