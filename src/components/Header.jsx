import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-white py-3 shadow-sm">
      <Container>
        <nav className="navbar min-h-0 justify-between p-0">
          {/* Start */}
          <div className="navbar-start w-fit">
            <div className="dropdown">
              {/* Hamburget Icon */}
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-black lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              {/* Mobile Menu */}
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-black/90 shadow"
              >
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>

                <button className="btn xs:hidden inline-flex items-center bg-linear-[125deg] from-[#632EE3] from-5% to-[#9F62F2] to-85% text-white">
                  <span className="mr-1 text-lg font-normal">+</span> New Ticket
                </button>
              </ul>
            </div>
            {/* Logo */}
            <a
              href="#"
              className="xs:text-2xl text-lg font-bold text-[#130B2D]"
            >
              CS — Ticket System
            </a>
          </div>

          {/* End */}
          <div className="navbar-end w-fit">
            <ul className="menu menu-horizontal hidden flex-nowrap px-1 text-black/90 lg:flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Download</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button className="btn xs:inline-flex hidden items-center bg-linear-[125deg] from-[#632EE3] from-5% to-[#9F62F2] to-85% text-white">
              <span className="mr-1 text-lg font-normal">+</span> New Ticket
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
