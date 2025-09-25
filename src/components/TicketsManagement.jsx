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

  const customerResolvedTickets = customerTickets.filter(
    (t) => t.status.toLowerCase() === "resolved",
  );

  function handleTicketStatusChange(id, status) {
    setCustomerTickets((tickets) =>
      tickets.map((t) => {
        if (t.id === id) {
          t.status = status;
        }
        return t;
      }),
    );
  }

  return (
    <>
      <TicketStates
        totalInProgressTickets={customerInProgressTickets.length}
        totalResolvedTickets={customerResolvedTickets.length}
      />
      <CustomerTickets>
        <Tickets
          customerTickets={customerTickets}
          onTicketStatusChyange={handleTicketStatusChange}
        />
        <TaskStatus
          customerInProgressTickets={customerInProgressTickets}
          customerResolvedTickets={customerResolvedTickets}
          onTicketStatusChyange={handleTicketStatusChange}
        />
      </CustomerTickets>
    </>
  );
}
