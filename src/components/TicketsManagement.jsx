import React, { use, useState } from "react";
import CustomerTickets from "./CustomerTickets";
import TaskStatus from "./TaskStatus";
import TicketStates from "./TicketStates";
import Tickets from "./Tickets";

export default function TicketsManagement({ promisFetchTickets }) {
  // Load Data
  const initialData = use(promisFetchTickets);
  // Set data
  const [customerTickets, setCustomerTickets] = useState(initialData);

  const customerInProgressTickets = customerTickets.filter(
    (t) => t.status.toLowerCase() === "pending",
  );

  console.log(customerInProgressTickets);

  const customerResolvedTickets = customerTickets.filter(
    (t) => t.status.toLowerCase() === "resolved",
  );

  return (
    <>
      <TicketStates
        totalInProgressTickets={customerInProgressTickets.length}
        totalResolvedTickets={customerResolvedTickets.length}
      />
      <CustomerTickets>
        <Tickets customerTickets={customerTickets} />
        <TaskStatus
          customerInProgressTickets={customerInProgressTickets}
          customerResolvedTickets={customerResolvedTickets}
        />
      </CustomerTickets>
    </>
  );
}
