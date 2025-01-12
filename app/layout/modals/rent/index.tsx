"use client";

import CategoryInput from "@/app/components/category-input";
import { ComboboxLocation } from "@/app/components/combobox/combobox";
import CommonSelect from "@/app/components/common-select";
import CounterInput from "@/app/components/counter-input";
import Heading from "@/app/components/heading";
import ImageUpload from "@/app/components/image-upload";
import Input from "@/app/components/input";
import Modal from "@/app/components/modal";
import {
  categories,
  fuelOptions,
  transmissionTypeOptions,
} from "@/app/constant";
import useRentModal from "@/app/hooks/useRentModal";
import { FuelType, TransmissionType } from "@prisma/client";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}

const RentModal = () => {
  const router = useRouter();
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: "",
      locationLatLon: [21.043194360147794, 105.8397284],
      cityOrProvince: "",
      seatCount: 5,
      transmissionType: TransmissionType.Automatic,
      fuel: FuelType.Gasoline,
      fuelConsumption: 8,
      imageSrc: [],
      price: 1,
      title: "",
      description: "",
    },
  });

  const categoryValue = watch("category");
  const seatCountValue = watch("seatCount");
  const fuelConsumptionValue = watch("fuelConsumption");
  const imageSrcValue = watch("imageSrc");
  const locationLatLon = watch("locationLatLon");

  const Map = useMemo(
    () => dynamic(() => import("@/app/components/map"), { ssr: false }),
    [locationLatLon]
  );

  const setCustomValue = useCallback(
    (id: string, value: any) => {
      setValue(id, value, {
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      });
    },
    [setValue]
  );

  const onBack = () => setStep((value) => value - 1);
  const onNext = () => setStep((value) => value + 1);

  const onSubmit: SubmitHandler<FieldValues> = useCallback(
    (data) => {
      if (step !== STEPS.PRICE) {
        return onNext();
      }
      setIsLoading(true);
      console.log(data)
      axios
        .post("/api/listings", data)
        .then(() => {
          toast.success("Listing created!");
          router.refresh();
          reset();
          setStep(STEPS.CATEGORY);
          rentModal.onClose();
        })
        .catch((err) => {
          let error = err.response.data;
          if (!error) {
            error = "Something went wrong!";
          }
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [step, router, reset, rentModal]
  );

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) {
      return "Create";
    }
    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) {
      return undefined;
    }
    return "Back";
  }, [step]);

  const bodyContent = useMemo(() => {
    switch (step) {
      case STEPS.CATEGORY:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="Which of these best describes your car?"
              subtitle="Pick a category"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[50vh] overflow-y-auto">
              {categories.map((category) => (
                <div key={category.label} className="col-span-1">
                  <CategoryInput
                    onClick={(value) => setCustomValue("category", value)}
                    selected={categoryValue === category.label}
                    label={category.label}
                    icon={category.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case STEPS.LOCATION:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="What's the current location of the car?"
              subtitle="Help guests find you!"
            />
            <ComboboxLocation
              setFormValue={setCustomValue}
            />
            <div className="min-h-[35vh]">
              <Map center={locationLatLon} />
            </div>
          </div>
        );
      case STEPS.INFO:
        return (
          <div className="flex flex-col gap-8">
            <Heading
              title="Share some basics about your car"
              subtitle="What amenities do you have?"
            />
            <CounterInput
              value={seatCountValue}
              onChange={(value) => setCustomValue("seatCount", value)}
              title="Seats"
              subTitle="How many seats does your car have?"
            />
            <CounterInput
              value={fuelConsumptionValue}
              onChange={(value) => setCustomValue("fuelConsumption", value)}
              title="Fuel Consumption"
              subTitle="How much fuel does your car consume per 100 kilometers?"
            />
            <CommonSelect
              title="Fuel Type"
              options={fuelOptions}
              onChange={(value) => setCustomValue("fuel", value)}
            />
            <CommonSelect
              title="Transmission Type"
              onChange={(value) => setCustomValue("transmissionType", value)}
              options={transmissionTypeOptions}
            />
          </div>
        );
      case STEPS.IMAGES:
        return (
          <div className="flex flex-col gap-8 ">
            <Heading
              title="Add a photo of your cars"
              subtitle="Show guests what your car looks like!"
            />
            <ImageUpload
              value={imageSrcValue}
              onChange={(value) => setCustomValue("imageSrc", value)}
            />
          </div>
        );
      case STEPS.DESCRIPTION:
        return (
          <div className="flex flex-col gap-8 ">
            <Heading
              title="How would you describe your car?"
              subtitle="Short and sweet works best!"
            />
            <Input
              required
              id="title( Name of the car )"
              label="Title"
              disabled={isLoading}
              register={register}
              errors={errors}
            />
            <hr />
            <Input
              required
              id="description( information about the car and contact details )"
              label="Description"
              disabled={isLoading}
              register={register}
              errors={errors}
            />
          </div>
        );
      case STEPS.PRICE:
        return (
          <div className="flex flex-col gap-8 ">
            <Heading
              title="Now set your price?"
              subtitle="How much do you charge per day!"
            />
            <Input
              formatPrice
              id="price"
              label="Price"
              disabled={isLoading}
              register={register}
              errors={errors}
            />
          </div>
        );
    }
  }, [
    Map,
    step,
    errors,
    register,
    isLoading,
    categoryValue,
    imageSrcValue,
    setCustomValue,
    seatCountValue,
    fuelConsumptionValue,
    locationLatLon,
  ]);

  return (
    <Modal
      body={bodyContent}
      disabled={isLoading}
      title="upload here"
      actionLabel={actionLabel}
      isOpen={rentModal.isOpen}
      onClose={rentModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
    />
  );
};

export default RentModal;
