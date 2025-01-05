import { TbBeach, TbCarSuv, TbMountain, TbPool } from "react-icons/tb";
import { GiBarn, GiBoatFishing, GiForestCamp } from "react-icons/gi";
import { PiVan } from "react-icons/pi";
import { LiaTruckPickupSolid } from "react-icons/lia";
import { FaTruckPickup } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { IoCarSport } from "react-icons/io5";
import { TbBus } from "react-icons/tb";

export const categories = [
  {
    label: "SUV",
    icon: TbCarSuv,
    description: "SUV Car",
  },
  {
    label: "MiniVan",
    icon: PiVan,
    description: "MiniVan Car",
  },
  {
    label: "Sedan",
    icon: LiaTruckPickupSolid,
    description: "Sedan Car",
  },
  {
    label: "PickupTruck",
    icon: FaTruckPickup,
    description: "Pickup Truck",
  },
  {
    label: "Sportcar",
    icon: IoCarSport,
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
  { value: "Gasoline", label: "Gasoline" },
  { value: "Diesel", label: "Diesel" },
  // { value: "Electric", label: "Electric" },
];

export const transmissionTypeOptions = [
  { value: "Manual", label: "Manual" },
  { value: "Automatic", label: "Automatic" },
];

export const cityOrProvinceOptions = [
  { idProvince: "01", label: "Thành phố Hà Nội", value: "Hà Nội" },
  { idProvince: "79", label: "Thành phố Hồ Chí Minh", value: "Hồ Chí Minh" },
  { idProvince: "31", label: "Thành phố Hải Phòng", value: "Hải Phòng" },
  { idProvince: "48", label: "Thành phố Đà Nẵng", value: "Đà Nẵng" },
  { idProvince: "92", label: "Thành phố Cần Thơ", value: "Cần Thơ" },
  { idProvince: "02", label: "Tỉnh Hà Giang", value: "Hà Giang Province" },
  { idProvince: "04", label: "Tỉnh Cao Bằng", value: "Cao Bằng Province" },
  { idProvince: "06", label: "Tỉnh Bắc Kạn", value: "Bắc Kạn Province" },
  { idProvince: "08", label: "Tỉnh Tuyên Quang", value: "Tuyên Quang Province" },
  { idProvince: "10", label: "Tỉnh Lào Cai", value: "Lào Cai Province" },
  { idProvince: "11", label: "Tỉnh Điện Biên", value: "Điện Biên Province" },
  { idProvince: "12", label: "Tỉnh Lai Châu", value: "Lai Châu Province" },
  { idProvince: "14", label: "Tỉnh Sơn La", value: "Sơn La Province" },
  { idProvince: "15", label: "Tỉnh Yên Bái", value: "Yên Bái Province" },
  { idProvince: "17", label: "Tỉnh Hoà Bình", value: "Hoà Bình Province" },
  { idProvince: "19", label: "Tỉnh Thái Nguyên", value: "Thái Nguyên Province" },
  { idProvince: "20", label: "Tỉnh Lạng Sơn", value: "Lạng Sơn Province" },
  { idProvince: "22", label: "Tỉnh Quảng Ninh", value: "Quảng Ninh Province" },
  { idProvince: "24", label: "Tỉnh Bắc Giang", value: "Bắc Giang Province" },
  { idProvince: "25", label: "Tỉnh Phú Thọ", value: "Phú Thọ Province" },
  { idProvince: "26", label: "Tỉnh Vĩnh Phúc", value: "Vĩnh Phúc Province" },
  { idProvince: "27", label: "Tỉnh Bắc Ninh", value: "Bắc Ninh Province" },
  { idProvince: "30", label: "Tỉnh Hải Dương", value: "Hải Dương Province" },
  { idProvince: "33", label: "Tỉnh Hưng Yên", value: "Hưng Yên Province" },
  { idProvince: "34", label: "Tỉnh Thái Bình", value: "Thái Bình Province" },
  { idProvince: "35", label: "Tỉnh Hà Nam", value: "Hà Nam Province" },
  { idProvince: "36", label: "Tỉnh Nam Định", value: "Nam Định Province" },
  { idProvince: "37", label: "Tỉnh Ninh Bình", value: "Ninh Bình Province" },
  { idProvince: "38", label: "Tỉnh Thanh Hóa", value: "Thanh Hóa Province" },
  { idProvince: "40", label: "Tỉnh Nghệ An", value: "Nghệ An Province" },
  { idProvince: "42", label: "Tỉnh Hà Tĩnh", value: "Hà Tĩnh Province" },
  { idProvince: "44", label: "Tỉnh Quảng Bình", value: "Quảng Bình Province" },
  { idProvince: "45", label: "Tỉnh Quảng Trị", value: "Quảng Trị Province" },
  {
    idProvince: "46",
    label: "Tỉnh Thừa Thiên Huế",
    value: "Thừa Thiên Huế Province",
  },
  { idProvince: "49", label: "Tỉnh Quảng Nam", value: "Quảng Nam Province" },
  { idProvince: "51", label: "Tỉnh Quảng Ngãi", value: "Quảng Ngãi Province" },
  { idProvince: "52", label: "Tỉnh Bình Định", value: "Bình Định Province" },
  { idProvince: "54", label: "Tỉnh Phú Yên", value: "Phú Yên Province" },
  { idProvince: "56", label: "Tỉnh Khánh Hòa", value: "Khánh Hòa Province" },
  { idProvince: "58", label: "Tỉnh Ninh Thuận", value: "Ninh Thuận Province" },
  { idProvince: "60", label: "Tỉnh Bình Thuận", value: "Bình Thuận Province" },
  { idProvince: "62", label: "Tỉnh Kon Tum", value: "Kon Tum Province" },
  { idProvince: "64", label: "Tỉnh Gia Lai", value: "Gia Lai Province" },
  { idProvince: "66", label: "Tỉnh Đắk Lắk", value: "Đắk Lắk Province" },
  { idProvince: "67", label: "Tỉnh Đắk Nông", value: "Đắk Nông Province" },
  { idProvince: "68", label: "Tỉnh Lâm Đồng", value: "Lâm Đồng Province" },
  { idProvince: "70", label: "Tỉnh Bình Phước", value: "Bình Phước Province" },
  { idProvince: "72", label: "Tỉnh Tây Ninh", value: "Tây Ninh Province" },
  { idProvince: "74", label: "Tỉnh Bình Dương", value: "Bình Dương Province" },
  { idProvince: "75", label: "Tỉnh Đồng Nai", value: "Đồng Nai Province" },
  {
    idProvince: "77",
    label: "Tỉnh Bà Rịa - Vũng Tàu",
    value: "Bà Rịa - Vũng Tàu Province",
  },
  { idProvince: "80", label: "Tỉnh Long An", value: "Long An Province" },
  { idProvince: "82", label: "Tỉnh Tiền Giang", value: "Tiền Giang Province" },
  { idProvince: "83", label: "Tỉnh Bến Tre", value: "Bến Tre Province" },
  { idProvince: "84", label: "Tỉnh Trà Vinh", value: "Trà Vinh Province" },
  { idProvince: "86", label: "Tỉnh Vĩnh Long", value: "Vĩnh Long Province" },
  { idProvince: "87", label: "Tỉnh Đồng Tháp", value: "Đồng Tháp Province" },
  { idProvince: "89", label: "Tỉnh An Giang", value: "An Giang Province" },
  { idProvince: "91", label: "Tỉnh Kiên Giang", value: "Kiên Giang Province" },
  { idProvince: "93", label: "Tỉnh Hậu Giang", value: "Hậu Giang Province" },
  { idProvince: "94", label: "Tỉnh Sóc Trăng", value: "Sóc Trăng Province" },
  { idProvince: "95", label: "Tỉnh Bạc Liêu", value: "Bạc Liêu Province" },
  { idProvince: "96", label: "Tỉnh Cà Mau", value: "Cà Mau Province" },
];
