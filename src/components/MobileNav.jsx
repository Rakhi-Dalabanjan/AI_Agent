import { Link, NavLink, useLocation } from "react-router-dom";
import { useInstallApp } from "../hooks/useInstallApp";

export function MobileNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const installInfo = useInstallApp();

  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);



  return (
    <>
      <div className="svc-nav-overlay" id="mobile-nav-overlay" />
      <div className="svc-nav-drawer" id="mobile-nav-drawer">
        <div className="svc-nav-close">
          <button type="button" id="mobile-nav-close-btn">
            <i data-lucide="x" />
          </button>
        </div>
        <nav className="svc-nav-links">
          {isHome ? (
            <>
              <NavLink to="/" end className={linkClass}>
                Home
              </NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/solutions">Solutions</NavLink>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/resources">Resources</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/" end>
                Home
              </NavLink>
              <NavLink to="/services" className={linkClass}>
                Services
              </NavLink>
              <NavLink to="/solutions" className={linkClass}>
                Solutions
              </NavLink>
              <NavLink to="/pricing" className={linkClass}>
                Pricing
              </NavLink>
              <NavLink to="/resources" className={linkClass}>
                Resources
              </NavLink>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </>
          )}
        </nav>
        <div className="svc-nav-cta">
          {isHome ? (
            <>
              <Link to="#">Login</Link>
              <button
                type="button"
                className="nav-btn-solid"
                onClick={installInfo.action}
              >
                {installInfo.text}
              </button>
            </>
          ) : (
            <>
              <a
                href="#"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "10px",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Login
              </a>
              <button
                type="button"
                className="nav-btn-solid"
                onClick={installInfo.action}
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {installInfo.text}
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
