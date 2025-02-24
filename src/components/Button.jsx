const Button = ({
  text = "Click Me",
  onClick = () => {},
  bgColor = "bg-brown-default",
  textColor = "text-white",
  hoverColor = "hover:bg-gray-800",
  className = "",
}) => {
  return (
    <button
      className={`mt-6 px-6 py-3 ${bgColor} ${textColor} rounded-md ${hoverColor} transition ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
