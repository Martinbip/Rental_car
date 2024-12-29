"use client";
import { FuelType, Reservation, TransmissionType, User } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { categories } from "@/app/constant";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import Container from "@/app/components/container";
import ListingHead from "@/app/components/listing/head";
import ListingInfo from "@/app/components/listing/info";
import useLoginModal from "@/app/hooks/useLoginModal";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import ListingReservation from "@/app/components/listing/reservation";
import { Range } from "react-date-range";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface IListingDetailProps {
  listing: SafeListing & { user: SafeUser };
  currentUser?: SafeUser | null;
  reservations?: (SafeReservation & { listing: SafeListing } & { user: SafeUser })[] ;
}
const ListingDetail = ({
  listing,
  currentUser,
  reservations = [],
}: IListingDetailProps) => {
  const reservationId = useSearchParams()?.get("reservationId");
  const loginModal = useLoginModal();
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    reservations.forEach((reservation) => {
      const range = eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });
      dates = [...dates, ...range];
    });
    return dates;
  }, [reservations]);

  const category = useMemo(
    () => categories.find((category) => listing.category === category.label),
    [listing.category]
  );

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }
    setLoading(true);
    axios
      .post("/api/reservations", {
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing.id,
      })
      .then(() => {
        toast.success("Listing reserved!");
        setDateRange(initialDateRange);

        router.push("/trips");
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong!");
      })
      .finally(() => setLoading(false));
  }, [currentUser, loginModal, dateRange, listing, totalPrice, router]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInCalendarDays(
        dateRange.endDate,
        dateRange.startDate
      );
      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [listing.price, dateRange]);

  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
            <ListingInfo
              user={listing.user}
              rentedBy={reservations.find((r) => r.id === reservationId)?.user}
              category={category}
              description={listing.description}
              seatCount={listing.seatCount as number}
              fuel={listing.fuel as FuelType}
              fuelConsumption={listing.fuelConsumption as number}
              transmissionType={listing.transmissionType as TransmissionType}
              locationLatLon={listing.locationLatLon}
            />
            <div className="order-first md-10 md:order-last md:col-span-3">
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading || currentUser?.id === listing.user.id}
                disabledDates={disabledDates}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ListingDetail;
