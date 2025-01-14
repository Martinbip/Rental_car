import getCurrentUser from "@/app/actions/getCurrentUser";
import getReservations from "@/app/actions/getReservations";
import ClientOnly from "@/app/components/client-only";
import EmptyState from "@/app/components/empty-state";
import Orders from "@/app/layout/orders";
import React from "react";

const OrdersPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subTitle="Please login" />
      </ClientOnly>
    );
  }

  const reservations = await getReservations({
    userId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No cars Found"
          subTitle="Looks like you have not reserved any cars"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Orders 
        reservations={reservations} 
        currentUser={currentUser} 
      />
    </ClientOnly>
  );
};

export default OrdersPage;