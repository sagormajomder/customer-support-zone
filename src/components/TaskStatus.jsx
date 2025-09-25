export default function TaskStatus({
  customerInProgressTickets,
  customerResolvedTickets,
}) {
  return (
    <aside>
      <h2 className="heading-secondary mb-3">Task Status</h2>
      <section className="mb-8 space-y-2">
        {customerInProgressTickets.length === 0 ? (
          <p>No progress tasks yet</p>
        ) : (
          customerInProgressTickets.map((t) => (
            <ProgressTask key={t.id} ticket={t} />
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

// {
//     "id": 2,
//     "title": "Payment failed",
//     "description": "Transaction not processed during checkout.",
//     "customer": "Bashir Ahmed",
//     "priority": "Medium",
//     "status": "Open",
//     "createdAt": "2025-09-24T10:30:00Z"
//   }

// Progress Task
function ProgressTask({ ticket }) {
  const { title } = ticket;
  return (
    <div className="flex flex-col space-y-1 rounded-md bg-white p-3 shadow-md">
      <h4 className="heading-quaternary">{title}</h4>
      <button className="rounded-md bg-[#02A53B] py-1.5 text-white">
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
