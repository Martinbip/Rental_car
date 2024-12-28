import { Listing, Reservation, User, FuelType, TransmissionType } from "@prisma/client";

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeListing = Omit<
Listing, "createdAt" | "updatedAt"
> & {
  createdAt: string;
  updatedAt: string;
  user: SafeUser;
};
export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "updatedAt" | "startDate" | "endDate"
> & {
  createdAt: string;
  updatedAt: string;
  startDate: string;
  endDate: string;
};

export type CountrySelectValue = {
  flag: string;
  label: string;
  latlng: number[];
  region: string;
  value: string;
};

export interface ISearchListingParams {
  userId?: string;
  seatCount?: number;
  fuelConsumption?: number;
  transmissionType?: TransmissionType,
  fuel?: FuelType,
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export interface ICommonSelectParams {
  value: any;
  label: string;
}
