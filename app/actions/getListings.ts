import prisma from "@/app/libs/prismadb";
import { ISearchListingParams, SafeListing, SafeUser } from "../types";

export default async function getListings(
  params: ISearchListingParams
): Promise<(SafeListing & { user: SafeUser })[]> {
  try {
    const {
      userId,
      seatCount,
      fuel,
      fuelConsumption,
      transmissionType,
      startDate,
      endDate,
      cityOrProvince,
      category,
    } = params;

    const query: any = {};
    if (userId) {
      query.userId = userId;
    }
    if (category) {
      query.category = category;
    }
    if (cityOrProvince) {
      query.locationValue = cityOrProvince;
    }
    if (seatCount) {
      query.seatCount = { gte: +seatCount };
    }
    if (fuel) {
      query.fuel = fuel;
    }
    if (fuelConsumption) {
      query.fuelConsumption = { gte: +fuelConsumption };
    }
    if (transmissionType) {
      query.transmissionType = transmissionType;
    }
    // ktra ngày không trùng với ngày thuê của người khác
    if (startDate && endDate) {
      query.NOT = {
        reservation: {
          some: {
            OR: [
              { endDate: { gte: startDate }, startDate: { lte: startDate } },

              { startDate: { gte: endDate }, endDate: { lte: endDate } },
            ],
          },
        },
      };
    }
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
    const safeListings = listings.map((listing) => ({
      ...listing,
      user: {
        ...listing.user,
        emailVerified: listing.user.emailVerified?.toISOString() || null,
        createdAt: listing.createdAt.toISOString(),
        updatedAt: listing.updatedAt.toISOString(),
      },
      createdAt: listing.createdAt.toISOString(),
      updatedAt: listing.updatedAt.toISOString(),
    }));
    return safeListings;
  } catch (error) {
    console.error(error);
    return [];
  }
}
