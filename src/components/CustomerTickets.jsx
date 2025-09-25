import React from "react";

export default function CustomerTickets({ children }) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-[7fr_3fr] sm:gap-6 lg:grid-cols-[7.5fr_2.5fr]">
      {children}
    </section>
  );
}
