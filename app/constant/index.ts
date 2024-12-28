import { TbBeach, TbCarSuv, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiForestCamp,
} from "react-icons/gi";
import { PiVan } from "react-icons/pi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { FaTruckPickup } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { TbBus } from "react-icons/tb";


  
export const categories = [
  // {
  //   label: "Beach",
  //   icon: TbBeach,
  //   description: "This property is close to the beach!",
  // },
  // {
  //   label: "Modern",
  //   icon: MdOutlineVilla,
  //   description: "This property is modern!",
  // },
  // {
  //   label: "Countryside",
  //   icon: TbMountain,
  //   description: "This property is in the countryside!",
  // },
  // {
  //   label: "Pools",
  //   icon: TbPool,
  //   description: "This is property has a beautiful pool!",
  // },
  // {
  //   label: "Lake",
  //   icon: GiBoatFishing,
  //   description: "This property is near a lake!",
  // },
  // {
  //   label: "Camping",
  //   icon: GiForestCamp,
  //   description: "This property offers camping activities!",
  // },
  // {
  //   label: "Barns",
  //   icon: GiBarn,
  //   description: "This property is in a barn!",
  // },
  // {
  //   label: "Lux",
  //   icon: IoDiamond,
  //   description: "This property is brand new and luxurious!",
  // },
  {
    label: "SUV",
    icon: TbCarSuv ,
    description: "SUV Car",
  },
  {
    label: "MiniVan",
    icon: PiVan ,
    description: "MiniVan Car",
  },
  {
    label: "Sedan",
    icon: LiaTruckPickupSolid ,
    description: "Sedan Car",
  },
  {
    label: "PickupTruck",
    icon: FaTruckPickup ,
    description: "Pickup Truck",
  },
  {
    label: "Sportcar",
    icon: IoCarSport ,
    description: "Sport Car",
  },
  {
    label: "Touris bus",
    icon: TbBus,
    description: "Touris bus",
  },
  {
    label: "Luxury Car",
    icon: IoDiamond,
    description: "Luxury Car",
  },
  
];

export const fuelOptions = [
  { value: 'Gasoline', label: 'Gasoline' },
  { value: 'Diesel', label: 'Diesel' },
  { value: 'Electric', label: 'Electric' }
]

export const transmissionTypeOptions = [
  { value: 'Manual', label: 'Manual' },
  { value: 'Automatic', label: 'Automatic' }
]