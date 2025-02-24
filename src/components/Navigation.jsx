import { NavLink } from "react-router-dom"
import { useState } from "react"
import Icon from "./Icon"

const navLinks = [
  { name: "Home", url: "/" },
  { name: "About us", url: "/about" },
  { name: "Services", url: "/services" },
  { name: "Contact", url: "/contact" },
]
const Navigation = ({ links, className }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <NavLink
            key={link.url}
            to={link.url}
            className={({ isActive }) =>
              `text-gray-700 hover:text-black ${
                isActive ? "border-b-2 border-black pb-1" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>

      <button
        className="md:hidden p-2 text-gray-700 hover:text-black"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <Icon name="close" /> : <Icon name="menu" />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-black ${
                    isActive ? "border-b-2 border-black pb-1" : ""
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}

export default Navigation
