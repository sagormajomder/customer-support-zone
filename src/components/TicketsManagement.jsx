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
  return (
    <>
      <TicketStates customerTickets={customerTickets} />
      <CustomerTickets>
        <Tickets customerTickets={customerTickets} />
        <TaskStatus customerTickets={customerTickets} />
      </CustomerTickets>
    </>
  );
}
