import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TicketStates from "./components/TicketStates";

function App() {
  return (
    <div className="min-h-screen space-y-14 bg-[#F5F5F5] text-[#627382]">
      <Header />
      <Main>
        <TicketStates />
      </Main>
      <Footer />
    </div>
  );
}

export default App;

function Main({ children }) {
  return (
    <main>
      <Container>{children}</Container>
    </main>
  );
}
