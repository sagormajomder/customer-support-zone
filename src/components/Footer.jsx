import emailIcon from "../assets/Icons/email.svg";
import facebookIcon from "../assets/Icons/facebook.svg";
import linkeninIcon from "../assets/Icons/linkedin.svg";
import xIcon from "../assets/Icons/x.svg";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black pt-14">
      <Container>
        {/* Footer Menu */}
        <div className="xs:grid-cols-[repeat(auto-fit,minmax(12.5rem,1fr))] grid grid-cols-1 gap-4 border-b border-b-[#E5E7EB]/20 pb-14 text-[#A1A1AA]">
          {/* Menu 1 */}
          <div className="mb-8 space-y-4">
            <h2 className="heading-secondary text-white">CS — Ticket System</h2>
            <p>
              CS — Ticket System helps manage customer support by organizing
              issues into trackable tickets, assigning them to agents, and
              ensuring timely resolution through streamlined communication and
              status updates.
            </p>
          </div>
          {/* Menu 2 */}
          <div className="xs:ml-8 mb-8 space-y-4">
            <h3 className="heading-tertiary">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Saled</a>
              </li>
            </ul>
          </div>
          {/* Menu 3 */}
          <div className="mb-8 space-y-4">
            <h3 className="heading-tertiary">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>
          {/* Menu 4 */}
          <div className="mb-8 space-y-4">
            <h3 className="heading-tertiary">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>
          {/* Menu 5 */}
          <div className="mb-8 space-y-4">
            <h3 className="heading-tertiary">Social Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="inline-flex items-center gap-2" href="#">
                  <img src={xIcon} alt="x Icon" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2" href="#">
                  <img src={linkeninIcon} alt="Linkenin Icon" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2" href="#">
                  <img src={facebookIcon} alt="Facebook Icon" />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="inline-flex items-center gap-2" href="#">
                  <img src={emailIcon} alt="Email Icon" />
                  <span>support@cst.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-5">
          <p className="text-center text-[#FAFAFA]">
            &copy; {new Date().getFullYear()} CS — Ticket System. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
