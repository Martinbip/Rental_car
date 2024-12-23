import Avatar from "@/app/components/avatar";
import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import React from "react";
import { IconType } from "react-icons";
import ListingCategory from "../category";
import dynamic from "next/dynamic";
import { TransmissionType, FuelType } from "@prisma/client";
const Map = dynamic(() => import("../../map"));

interface IListingInfoProps {
  user: SafeUser;
  category?: {
    icon: IconType;
    label: string;
    description: string;
  };
  seatCount: number,
  transmissionType: TransmissionType,
  fuel: FuelType,
  fuelConsumption: number,
  description: string;
  locationValue: string;
  rentedBy?: SafeUser;
}

const ListingInfo = ({
  user,
  category,
  seatCount,
  transmissionType,
  fuel,
  fuelConsumption,
  description,
  locationValue,
  rentedBy
}: IListingInfoProps) => {
  const { getByValue } = useCountries();
  const cordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2 ">
        <div className="text-xl font-semibold flex flex-row items-center gap-2">
          <div>Car owner {user.name}</div>
          <Avatar src={user.image} />
        </div>
        {rentedBy && 
          <div className="text-xl font-semibold flex flex-row items-center gap-2 mt-1">
            <div>Rented by {rentedBy.name}</div>
            <Avatar src={rentedBy.image} />
          </div>
        }
        
        <div>
          <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
            <div className="bg-green-300 text-black font-bold py-2 px-4 rounded-full">{seatCount} seats</div>
            <div className="bg-yellow-100 text-black font-bold py-2 px-4 rounded-full">{fuel}</div>
            <div className="bg-purple-100 text-black font-bold py-2 px-4 rounded-full">{fuelConsumption} L/100KM</div>
            <div className="bg-blue-200 text-black font-bold py-2 px-4 rounded-full">{transmissionType}</div>
          </div>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      <Map center={cordinates} />
    </div>
  );
};

export default ListingInfo;
