import { useState, useEffect } from "react"
import logoWithName from "./../assets/images/logoWithName.png"
import logo from "./../assets/images/logo.png"

const Logo = () => {
  const [logoSrc, setLogoSrc] = useState(logoWithName)

  useEffect(() => {
    const updateLogo = () => {
      if (window.innerWidth < 768) {
        setLogoSrc(logo)
      } else {
        setLogoSrc(logoWithName)
      }
    }

    updateLogo()
    window.addEventListener("resize", updateLogo)

    return () => window.removeEventListener("resize", updateLogo)
  }, [])
  return <img src={logoSrc} alt="Logo" className="h-10 w-auto" />
}

export default Logo
