import prisma from "@/app/libs/prismadb";
import { SafeListing, SafeReservation, SafeUser } from "../types";
import getCurrentUser from "./getCurrentUser";

export default async function getFavorites(): Promise<(SafeListing&{user:SafeUser})[]> {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return [];
    }

    const favoriteListings = await prisma.listing.findMany({
      where: {
        id: {
          in: [...(currentUser.favoriteIds || [])],
        },
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeFavoriteListings = favoriteListings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
      updatedAt: listing.updatedAt.toISOString(),
      user : {
        ...listing.user,
        createdAt: listing.user.createdAt.toISOString(),
        updatedAt: listing.user.updatedAt.toISOString(),
        emailVerified: listing.user.emailVerified ? listing.user.emailVerified.toISOString() : null,
      }
    }));
    return safeFavoriteListings;
  } catch (error) {
    console.error(error);
    return [];
  }
}
