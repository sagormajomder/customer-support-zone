import { Suspense } from "react";
import CustomerTickets from "./components/CustomerTickets";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TicketsManagement from "./components/TicketsManagement";
import { ToastContainer } from "react-toastify";

async function fetchTickets() {
  const res = await fetch("/tickets.json");
  return res.json();
}

const promisFetchTickets = fetchTickets();

function App() {
  return (
    <div className="min-h-screen space-y-14 bg-[#F5F5F5] text-[#627382]">
      <Header />
      <Main>
        <Suspense
          fallback={
            <span className="loading loading-spinner text-accent"></span>
          }
        >
          <TicketsManagement promisFetchTickets={promisFetchTickets} />
        </Suspense>
      </Main>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

function Main({ children }) {
  return <main className="mx-auto max-w-[80rem] px-3">{children}</main>;
}
