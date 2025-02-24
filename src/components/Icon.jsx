import { FaBars } from "react-icons/fa"
import { IoIosSunny } from "react-icons/io"
import { PiMoonStarsFill } from "react-icons/pi"

import {
  RxCaretDown,
  RxCaretLeft,
  RxCaretRight,
  RxCaretUp,
} from "react-icons/rx"

import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { IoCloseSharp } from "react-icons/io5"

import { PiFacebookLogoFill } from "react-icons/pi"

const Icon = ({ name, size = 24, color = "black" }) => {
  let IconComponent

  // Map icon names to their respective icon components
  switch (name) {
    case "moon":
      IconComponent = PiMoonStarsFill
      break
    case "sun":
      IconComponent = IoIosSunny
      break
    case "menu":
      IconComponent = FaBars
      break
    case "close":
      IconComponent = IoCloseSharp
      break
    case "down":
      IconComponent = RxCaretDown
      break
    case "up":
      IconComponent = RxCaretUp
      break
    case "right":
      IconComponent = RxCaretRight
      break
    case "left":
      IconComponent = RxCaretLeft
      break
    case "instagram":
      IconComponent = AiFillInstagram
      break
    case "linkedin":
      IconComponent = AiFillLinkedin
      break
    case "facebook":
      IconComponent = PiFacebookLogoFill
      break
    default:
      IconComponent = null
  }

  if (!IconComponent) {
    return <span>Icon not found</span>
  }

  return <IconComponent size={size} color={color} />
}

export default Icon
