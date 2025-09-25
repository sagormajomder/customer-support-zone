import { toast } from "react-toastify";
import calendarIcon from "../assets/Icons/calendar.svg";
import openIcon from "../assets/Icons/open.svg";
import progressIcon from "../assets/Icons/progress.svg";

export default function Tickets({ customerTickets, onTicketStatusChyange }) {
  const filteredCustomerTickets = customerTickets.filter(
    (t) => t.status !== "Resolved",
  );

  return (
    <section className="mb-8 sm:mb-0">
      <h2 className="heading-secondary mb-3">Customer Tickets</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredCustomerTickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            ticket={ticket}
            onTicketStatusChyange={onTicketStatusChyange}
          />
        ))}
      </div>
    </section>
  );
}

//Child
// {
//     "id": 2,
//     "title": "Payment failed",
//     "description": "Transaction not processed during checkout.",
//     "customer": "Bashir Ahmed",
//     "priority": "Medium",
//     "status": "Open",
//     "createdAt": "2025-09-24T10:30:00Z"
//   }
function Ticket({ ticket, onTicketStatusChyange }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  function handleTicketClick() {
    if (status === "Pending") {
      toast.error("Already it is in progress!");
      return;
    }
    onTicketStatusChyange(id, "Pending");
    toast.success("Ticket is in progress!");
  }

  return (
    <div
      onClick={handleTicketClick}
      className="flex cursor-pointer flex-col justify-between space-y-2.5 rounded-md bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="flex justify-between">
        <h4 className="heading-quaternary">{title}</h4>
        <div
          className={`flex items-center gap-1 rounded-full px-3 py-0.5 ${status.toLowerCase() === "open" ? "bg-[#B9F8CF]" : "bg-[#F8F3B9]"}`}
        >
          <img
            className="h-4"
            src={status.toLowerCase() === "open" ? openIcon : progressIcon}
            alt=""
          />
          <p
            className={`${status.toLowerCase() === "open" ? "text-[#0B5E06]" : "text-[#9C7700]"}`}
          >
            {status}
          </p>
        </div>
      </div>
      <p>{description}</p>
      <div className="xs:flex-row xs:items-center flex flex-col justify-between gap-1 text-sm sm:gap-0">
        <div className="flex items-center gap-2">
          <p className="font-medium">#{id}</p>
          <p
            className={`font-medium ${
              priority.toLowerCase() === "high"
                ? "text-[#F83044]"
                : priority.toLowerCase() === "medium"
                  ? "text-[#FEBB0C]"
                  : "text-[#02A53B]"
            } `}
          >
            {`${priority} Priority`.toUpperCase()}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p>{customer}</p>
          <div className="flex gap-0.5">
            <img className="h-5" src={calendarIcon} alt="" />
            <p>{new Date(createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
