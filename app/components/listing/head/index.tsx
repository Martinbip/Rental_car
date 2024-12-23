"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React, { useMemo } from "react";
import Heading from "../../heading";
import Image from "next/image";
import HeartButton from "../../heart-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
interface IListingHeadProps {
  title: string;
  imageSrc: string[];
  locationValue: string;
  id: string;
  currentUser?: SafeUser | null;
}

const ListingHead = ({
  title,
  imageSrc,
  locationValue,
  currentUser,
  id,
}: IListingHeadProps) => {
  const { getByValue } = useCountries();
  const location = useMemo(
    () => getByValue(locationValue),
    [getByValue, locationValue]
  );

  return (
    <>
      <Heading
        title={title}
        subtitle={`${location?.region}, ${location?.label}`}
      />
      <div className="w-full h-[60vh] rounded-xl relative">
        {imageSrc && (
                <Carousel>
                  <CarouselContent>
                    {imageSrc.map((url,index) => (  
                      <CarouselItem key={index} className="relative h-[60vh]">
                        <Image
                          fill
                          src={url}
                          alt="Listing Detail Image"
                          className="object-cover w-full h-full"
                        />
                      </CarouselItem>)
                    )}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
            )}
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
};

export default ListingHead;
