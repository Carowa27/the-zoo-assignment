import { Link } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/animals">All animals</Link>
        </li>
      </ul>
    </nav>
  );
};
