import { Link, NavLink, useLocation } from 'react-router-dom';

export function Navbar({ variant = 'default' }) {
  const location = useLocation();
  const isHome = variant === 'home' || location.pathname === '/';

  return (
    <nav className="navbar" id="navbar">
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Link to="/" className="logo">
          <div className="logo-icon">
            <i data-lucide="bot" />
          </div>
          <h2>IAMKRATU.AI</h2>
        </Link>

        <div className="nav-links">
          {isHome ? (
            <>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : undefined)}>
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
              <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : undefined)}>
                Services
              </NavLink>
              <NavLink
                to="/solutions"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Solutions
              </NavLink>
              <NavLink
                to="/pricing"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="/resources"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                Contact
              </NavLink>
            </>
          )}
        </div>

        <div className="nav-actions">
          <Link to="/admin/login" className="btn-login">
            Login
          </Link>
          <button
            type="button"
            className="nav-btn-solid open-modal"
            data-modal-title="Book a Demo"
          >
            Book Free Demo
          </button>
          <button
            type="button"
            className="mobile-menu-btn"
            id="mobile-menu-btn"
            style={
              !isHome
                ? {
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  padding: '4px 8px',
                }
                : undefined
            }
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>
    </nav>
  );
}
