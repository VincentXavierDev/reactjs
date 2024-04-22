import { Link } from "react-router-dom";

function MainNav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNav;