export default function TicketStates({
  totalInProgressTickets,
  totalResolvedTickets,
}) {
  return (
    <section className="xs:grid-cols-2 mb-14 grid grid-cols-1 gap-4">
      <div className="rounded-lg bg-linear-[125deg] from-[#632EE3] from-5% to-[#9F62F2] to-85% text-center text-white">
        <div className="space-y-2.5 rounded-lg bg-contain bg-position-[left,right] bg-no-repeat p-10 md:bg-[url(./assets/vector1.png),url(./assets/vector2.png)]">
          <p className="text-2xl">In-progress</p>
          <p className="text-6xl">{totalInProgressTickets}</p>
        </div>
      </div>
      <div className="rounded-lg bg-linear-[90deg] from-[#54CF68] from-10% to-[#00827A] to-90% text-center text-white">
        <div className="space-y-2.5 rounded-lg bg-contain bg-position-[left,right] bg-no-repeat p-10 md:bg-[url(./assets/vector1.png),url(./assets/vector2.png)]">
          <p className="text-2xl">Resolve</p>
          <p className="text-6xl">{totalResolvedTickets}</p>
        </div>
      </div>
    </section>
  );
}
