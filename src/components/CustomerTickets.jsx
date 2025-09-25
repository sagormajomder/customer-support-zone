import React from "react";

export default function CustomerTickets({ children }) {
  return (
    <section className="grid grid-cols-[7.5fr_2.5fr] gap-6">{children}</section>
  );
}
