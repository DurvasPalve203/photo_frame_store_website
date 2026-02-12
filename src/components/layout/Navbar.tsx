import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav>
      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        {/* Logo */}
        <Link to="/" style={{ fontWeight: "bold" }}>
          Shiv Samarth Frame Center
        </Link>

        {/* Navigation */}
        <div style={{ display: "flex", gap: "1rem" }}>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
