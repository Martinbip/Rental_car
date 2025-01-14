import getCurrentUser from "@/app/actions/getCurrentUser";
import getListings from "@/app/actions/getListings";
import ClientOnly from "@/app/components/client-only";
import EmptyState from "@/app/components/empty-state";
import Vehicle from "@/app/layout/vehicle";
import React from "react";

const VehiclePage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }

  const properties = await getListings({
    userId: currentUser.id,
  });

  if (properties.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No car found"
          subTitle="Looks like you don't have car yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Vehicle 
        currentUser={currentUser} 
        listings={properties} 
      />
    </ClientOnly>
  );
};

export default VehiclePage;
