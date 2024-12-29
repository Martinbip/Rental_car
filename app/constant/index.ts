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
  { value: "Electric", label: "Electric" },
];

export const transmissionTypeOptions = [
  { value: "Manual", label: "Manual" },
  { value: "Automatic", label: "Automatic" },
];

export const cityOrProvinceOptions = [
  { idProvince: "01", name: "Thành phố Hà Nội", value: "Hà Nội" },
  { idProvince: "79", name: "Thành phố Hồ Chí Minh", value: "Hồ Chí Minh" },
  { idProvince: "31", name: "Thành phố Hải Phòng", value: "Hải Phòng" },
  { idProvince: "48", name: "Thành phố Đà Nẵng", value: "Đà Nẵng" },
  { idProvince: "92", name: "Thành phố Cần Thơ", value: "Cần Thơ" },
  { idProvince: "02", name: "Tỉnh Hà Giang", value: "Hà Giang Province" },
  { idProvince: "04", name: "Tỉnh Cao Bằng", value: "Cao Bằng Province" },
  { idProvince: "06", name: "Tỉnh Bắc Kạn", value: "Bắc Kạn Province" },
  { idProvince: "08", name: "Tỉnh Tuyên Quang", value: "Tuyên Quang Province" },
  { idProvince: "10", name: "Tỉnh Lào Cai", value: "Lào Cai Province" },
  { idProvince: "11", name: "Tỉnh Điện Biên", value: "Điện Biên Province" },
  { idProvince: "12", name: "Tỉnh Lai Châu", value: "Lai Châu Province" },
  { idProvince: "14", name: "Tỉnh Sơn La", value: "Sơn La Province" },
  { idProvince: "15", name: "Tỉnh Yên Bái", value: "Yên Bái Province" },
  { idProvince: "17", name: "Tỉnh Hoà Bình", value: "Hoà Bình Province" },
  { idProvince: "19", name: "Tỉnh Thái Nguyên", value: "Thái Nguyên Province" },
  { idProvince: "20", name: "Tỉnh Lạng Sơn", value: "Lạng Sơn Province" },
  { idProvince: "22", name: "Tỉnh Quảng Ninh", value: "Quảng Ninh Province" },
  { idProvince: "24", name: "Tỉnh Bắc Giang", value: "Bắc Giang Province" },
  { idProvince: "25", name: "Tỉnh Phú Thọ", value: "Phú Thọ Province" },
  { idProvince: "26", name: "Tỉnh Vĩnh Phúc", value: "Vĩnh Phúc Province" },
  { idProvince: "27", name: "Tỉnh Bắc Ninh", value: "Bắc Ninh Province" },
  { idProvince: "30", name: "Tỉnh Hải Dương", value: "Hải Dương Province" },
  { idProvince: "33", name: "Tỉnh Hưng Yên", value: "Hưng Yên Province" },
  { idProvince: "34", name: "Tỉnh Thái Bình", value: "Thái Bình Province" },
  { idProvince: "35", name: "Tỉnh Hà Nam", value: "Hà Nam Province" },
  { idProvince: "36", name: "Tỉnh Nam Định", value: "Nam Định Province" },
  { idProvince: "37", name: "Tỉnh Ninh Bình", value: "Ninh Bình Province" },
  { idProvince: "38", name: "Tỉnh Thanh Hóa", value: "Thanh Hóa Province" },
  { idProvince: "40", name: "Tỉnh Nghệ An", value: "Nghệ An Province" },
  { idProvince: "42", name: "Tỉnh Hà Tĩnh", value: "Hà Tĩnh Province" },
  { idProvince: "44", name: "Tỉnh Quảng Bình", value: "Quảng Bình Province" },
  { idProvince: "45", name: "Tỉnh Quảng Trị", value: "Quảng Trị Province" },
  {
    idProvince: "46",
    name: "Tỉnh Thừa Thiên Huế",
    value: "Thừa Thiên Huế Province",
  },
  { idProvince: "49", name: "Tỉnh Quảng Nam", value: "Quảng Nam Province" },
  { idProvince: "51", name: "Tỉnh Quảng Ngãi", value: "Quảng Ngãi Province" },
  { idProvince: "52", name: "Tỉnh Bình Định", value: "Bình Định Province" },
  { idProvince: "54", name: "Tỉnh Phú Yên", value: "Phú Yên Province" },
  { idProvince: "56", name: "Tỉnh Khánh Hòa", value: "Khánh Hòa Province" },
  { idProvince: "58", name: "Tỉnh Ninh Thuận", value: "Ninh Thuận Province" },
  { idProvince: "60", name: "Tỉnh Bình Thuận", value: "Bình Thuận Province" },
  { idProvince: "62", name: "Tỉnh Kon Tum", value: "Kon Tum Province" },
  { idProvince: "64", name: "Tỉnh Gia Lai", value: "Gia Lai Province" },
  { idProvince: "66", name: "Tỉnh Đắk Lắk", value: "Đắk Lắk Province" },
  { idProvince: "67", name: "Tỉnh Đắk Nông", value: "Đắk Nông Province" },
  { idProvince: "68", name: "Tỉnh Lâm Đồng", value: "Lâm Đồng Province" },
  { idProvince: "70", name: "Tỉnh Bình Phước", value: "Bình Phước Province" },
  { idProvince: "72", name: "Tỉnh Tây Ninh", value: "Tây Ninh Province" },
  { idProvince: "74", name: "Tỉnh Bình Dương", value: "Bình Dương Province" },
  { idProvince: "75", name: "Tỉnh Đồng Nai", value: "Đồng Nai Province" },
  {
    idProvince: "77",
    name: "Tỉnh Bà Rịa - Vũng Tàu",
    value: "Bà Rịa - Vũng Tàu Province",
  },
  { idProvince: "80", name: "Tỉnh Long An", value: "Long An Province" },
  { idProvince: "82", name: "Tỉnh Tiền Giang", value: "Tiền Giang Province" },
  { idProvince: "83", name: "Tỉnh Bến Tre", value: "Bến Tre Province" },
  { idProvince: "84", name: "Tỉnh Trà Vinh", value: "Trà Vinh Province" },
  { idProvince: "86", name: "Tỉnh Vĩnh Long", value: "Vĩnh Long Province" },
  { idProvince: "87", name: "Tỉnh Đồng Tháp", value: "Đồng Tháp Province" },
  { idProvince: "89", name: "Tỉnh An Giang", value: "An Giang Province" },
  { idProvince: "91", name: "Tỉnh Kiên Giang", value: "Kiên Giang Province" },
  { idProvince: "93", name: "Tỉnh Hậu Giang", value: "Hậu Giang Province" },
  { idProvince: "94", name: "Tỉnh Sóc Trăng", value: "Sóc Trăng Province" },
  { idProvince: "95", name: "Tỉnh Bạc Liêu", value: "Bạc Liêu Province" },
  { idProvince: "96", name: "Tỉnh Cà Mau", value: "Cà Mau Province" },
];
