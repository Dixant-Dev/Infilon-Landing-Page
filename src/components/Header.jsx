import Navigation from "./Navigation"
import Logo from "./Logo"
const Header = () => {
  return (
    <header className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center">
        <Logo />
      </div>
      <Navigation />
    </header>
  )
}

export default Header
