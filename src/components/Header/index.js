import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import "./index.css";

const Header = () => (
  <div className="nav">
    <NavLink to="/" className="link">
      <img
        src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg?w=740&t=st=1700372110~exp=1700372710~hmac=ea950b1529e6d4cacdc6036983b56804952315889699812eb14e07c8a90f8bd1"
        alt="logo"
        className="logo"
      />
    </NavLink>
    <ul className="ul">
      <NavLink to="/" className="link">
        <li>
          <FaHome size={20} /> Home
        </li>
      </NavLink>
      <NavLink to="/contact" className="link">
        <li>
          <MdCall size={20} />
          Contact Us
        </li>
      </NavLink>
    </ul>
  </div>
);
export default Header;
