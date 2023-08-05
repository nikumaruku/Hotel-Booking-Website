import "./navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-container">
        <span className="app__navbar-logo">nikubooking</span>
        <div className="app__navbar-items">
          <button className="app__navbar-buttons">Register</button>
          <button className="app__navbar-buttons">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
