import { toast } from "react-toastify";

export default function TaskStatus({
  customerInProgressTickets,
  customerResolvedTickets,
  onTicketStatusChyange,
}) {
  return (
    <aside>
      <h2 className="heading-secondary mb-3">Task Status</h2>
      <section className="mb-8 space-y-2">
        {customerInProgressTickets.length === 0 ? (
          <p>No progress tasks yet</p>
        ) : (
          customerInProgressTickets.map((t) => (
            <ProgressTask
              key={t.id}
              ticket={t}
              onTicketStatusChyange={onTicketStatusChyange}
            />
          ))
        )}
      </section>
      <h2 className="heading-secondary mb-3">Resolve Task</h2>
      <section className="space-y-2">
        {customerResolvedTickets.length === 0 ? (
          <p>No resolved tasks yet</p>
        ) : (
          customerResolvedTickets.map((t) => (
            <ResolveTask key={t.id} ticket={t} />
          ))
        )}
      </section>
    </aside>
  );
}

// Progress Task
function ProgressTask({ ticket, onTicketStatusChyange }) {
  const { id, title } = ticket;

  function handleCompleteBtnClick() {
    onTicketStatusChyange(id, "Resolved");
    toast.success("Ticket is resolved!");
  }
  return (
    <div className="flex flex-col space-y-1 rounded-md bg-white p-3 shadow-md">
      <h4 className="heading-quaternary">{title}</h4>
      <button
        onClick={handleCompleteBtnClick}
        className="cursor-pointer rounded-md bg-[#02A53B] py-1.5 text-white hover:bg-[#00832e]"
      >
        Complete
      </button>
    </div>
  );
}
// Resolve Task
function ResolveTask({ ticket }) {
  const { title } = ticket;
  return (
    <div className="space-y-1 rounded-md bg-[#E0E7FF] p-3 shadow-md">
      <h4 className="heading-quaternary">{title}</h4>
    </div>
  );
}
