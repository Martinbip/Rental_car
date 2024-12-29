"use client";

import useCountries from "@/app/hooks/useCountries";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import HeartButton from "../../heart-button";
import Button from "../../button";
import Avatar from "@/app/components/avatar";
//  import { SafeUser } from "@/app/types";

interface IListingCardProps {
  
  data: SafeListing&{user:SafeUser};
  currentUser?: SafeUser | null;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  
}

const ListingCard = ({

  data,
  currentUser,
  onAction,
  disabled,
  actionId = "",
  actionLabel,
  reservation,
}: IListingCardProps) => {
  const router = useRouter();

  const handleAction = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      if (disabled) return;
      onAction?.(actionId);
    },
    [disabled, actionId, onAction]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }
    return data.price;
  }, [reservation, data.price]);

  
  const reservationDate = useMemo(() => {
    if (!reservation) return null;
    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <div
      className="col-span-1 cursor-pointer group"
      onClick={() => router.push(`/listings/${data.id}?reservationId=${reservation?.id}`)}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="aspect-square w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            alt="Listing"
            src={data.imageSrc[0]}
            className="object-cover h-full w-full group-hover:scale-110 transition"
          />
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data.id} currentUser={currentUser} />
          </div>
          <div className="absolute bot-3 left-3">
          <Avatar src={data.user.image || "/images/placeholder.jpg"} />
          </div>
        </div>
        <div className="font-semibold text-lg">
          {data.cityOrProvince}
        </div>
        <div className="font-light text-neutral-500">
          {reservationDate || data.category}
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="font-semibold">VND {price}</div>
          {!reservation && <div className="font-light">ngày</div>}
        </div>
        {onAction && actionLabel && (
          <Button
            small
            disabled={disabled}
            label={actionLabel}
            onClick={handleAction}
          />
        )}
      </div>
    </div>
  );
};

export default ListingCard;
