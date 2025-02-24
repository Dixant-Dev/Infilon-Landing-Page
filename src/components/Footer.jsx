import Icon from "./Icon"
import logo from "./../assets/images/logo.png"

const footerNav = [
  {
    name: "FAQ",
    url: "/faq",
  },
  {
    name: "Privacy",
    url: "/privacy",
  },
  {
    name: "Support",
    url: "/support",
  },
  {
    name: "Contact",
    url: "/contact",
  },
]

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:flex-row">
          <img src={logo} alt="Logo" className="h-12 w-auto mb-2" />
          <nav className="flex gap-6 text-sm md:pl-4">
            {footerNav.map((item) => (
              <a key={item.url} href={item.url} className="hover:underline">
                {item.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">
            <Icon name="facebook" color="white" />
          </a>
          <a href="#">
            <Icon name="instagram" color="white" />
          </a>
          <a href="#">
            <Icon name="linkedin" color="white" />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-4">
        © 2024 Central Texas Fly Fishing. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
