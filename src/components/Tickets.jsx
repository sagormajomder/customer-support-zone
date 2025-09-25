import calendarIcon from "../assets/Icons/calendar.svg";
import openIcon from "../assets/Icons/open.svg";
import progressIcon from "../assets/Icons/progress.svg";

export default function Tickets({ customerTickets }) {
  return (
    <section>
      <h2 className="heading-secondary mb-3">Customer Tickets</h2>
      <div className="grid grid-cols-2 gap-4">
        {customerTickets.map((ticket) => (
          <Ticket key={ticket.id} ticket={ticket} />
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
function Ticket({ ticket }) {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;
  return (
    <div className="space-y-2.5 rounded-md bg-white p-3 shadow-lg">
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
      <div className="flex justify-between text-sm">
        <div className="flex gap-2">
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
        <div className="flex gap-2">
          <p>{customer}</p>
          <img className="h-5" src={calendarIcon} alt="" />
          <p>{new Date(createdAt).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
