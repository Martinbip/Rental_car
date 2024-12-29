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
  cityOrProvince?: string;
  category?: string;
}

export interface ICommonSelectParams {
  value: any;
  label: string;
}

export interface NominatimResponse {
  place_id: string;
  licence: string;
  osm_type: string;
  osm_id: string;
  boundingbox: [string, string, string, string]; // [south, north, west, east]
  lat: string; // Latitude as a string
  lon: string; // Longitude as a string
  display_name: string;
  class: string; // E.g., "place"
  type: string; // E.g., "city"
  importance: number; // Ranking score
  icon?: string; // Optional icon URL for certain places
  address: {
    city?: string; // Optional because not all places are cities
    state?: string; // Optional because not all places have states
    country?: string;
    country_code?: string;
    ISO3166_2_lvl4?: string; // Adjusted to use camelCase
  };
}
