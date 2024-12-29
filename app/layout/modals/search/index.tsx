"use client";
import React, { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Range } from "react-date-range";
import dynamic from "next/dynamic";
import qs from "query-string";

import { CountrySelectValue } from "@/app/types";
import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "@/app/components/modal";
import { formatISO, set } from "date-fns";
import Heading from "@/app/components/heading";
import CountrySelect from "@/app/components/country-select";
import Calendar from "@/app/components/calendar";
import CounterInput from "@/app/components/counter-input";
import CommonSelect from "@/app/components/common-select";
import { fuelOptions, transmissionTypeOptions } from "@/app/constant";

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

const SearchModal = () => {
  const searchModal = useSearchModal();
  const router = useRouter();
  const params = useSearchParams();
  const [step, setStep] = useState(STEPS.LOCATION);
  const [location, setLocation] = useState<CountrySelectValue>();
  const [seatCount, setSeatCount] = useState(4);
  const [fuel, setFuel] = useState('');
  const [fuelConsumption, setFuelConsumption] = useState(8);
  const [transmissionType, setTransmissionType] = useState('');
  const [dateRange, setDateRange] = useState<Range>({
    key: "selection",
    startDate: new Date(),
    endDate: new Date(),
  });

  const resetState = () => {
    setSeatCount(4);
    setFuel('');
    setFuelConsumption(8);
    setTransmissionType('');
    setDateRange({
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    });
  };

  const Map = useMemo(
    () => dynamic(() => import("@/app/components/map"), { ssr: false }),
    [location]
  );

  const onBack = useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  const onNext = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) {
      return onNext();
    }
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      seatCount,
      fuel,
      fuelConsumption,
      transmissionType,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }
    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    resetState();
    router.push(url);
  }, [
    step,
    onNext,
    params,
    router,
    location,
    dateRange,
    searchModal,
    seatCount,
    fuel,
    fuelConsumption,
    transmissionType,
  ]);

  const actionLabel = useMemo(
    () => (step === STEPS.INFO ? "Search" : "Next"),
    [step]
  );

  const secondaryActionLabel = useMemo(
    () => (step === STEPS.LOCATION ? undefined : "Back"),
    [step]
  );

  const bodyContent = useMemo(() => {
    switch (step) {
      case STEPS.LOCATION:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="Where do you wanna go?"
              subtitle="Find the perfect location!"
            />
            <CountrySelect
              value={location}
              onChange={(value) => setLocation(value)}
            />
            <hr />
            <div className="min-h-[35vh]">
              <Map center={location?.latlng} />
            </div>
          </div>
        );
      case STEPS.DATE:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="When do you plan to go?"
              subtitle="Make sure everyone is free!"
            />
            <Calendar
              onChange={(value) => setDateRange(value.selection)}
              value={dateRange}
            />
          </div>
        );
      case STEPS.INFO:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="More information"
              subtitle="Find your perfect place!"
            />
            {/* <CounterInput
              onChange={setGuestCount}
              title="Guests"
              subTitle="How many guests are coming?"
              value={guestCount}
            />
            <CounterInput
              onChange={setRoomCount}
              title="Rooms"
              subTitle="How many rooms do you need?"
              value={roomCount}
            />
            <CounterInput
              onChange={setBathroomCount}
              title="Bathrooms"
              subTitle="How many bathrooms do you need?"
              value={bathroomCount}
            /> */}
            <CounterInput
              value={seatCount}
              onChange={setSeatCount}
              title="Seats"
              subTitle="How many seats does your car have?"
            />
            <CounterInput
              value={fuelConsumption}
              onChange={setFuelConsumption}
              title="Fuel Consumption"
              subTitle="How much fuel does your car consume per 100 kilometers?"
            />
            <CommonSelect
              title="Fuel Type"
              options={fuelOptions}
              onChange={setFuel}
            />
            <CommonSelect
              title="Transmission Type"
              onChange={setTransmissionType}
              options={transmissionTypeOptions}
            />
          </div>
        );
    }
  }, [step, Map, location, dateRange, seatCount, fuelConsumption]);

  return (
    <Modal
      title="Filters"
      actionLabel={actionLabel}
      onClose={searchModal.onClose}
      onSubmit={onSubmit}
      isOpen={searchModal.isOpen}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      secondaryActionLabel={secondaryActionLabel}
      body={bodyContent}
    />
  );
};

export default SearchModal;
