import { useState } from "react"
import fishesImage from "./../assets/images/fishes.jpeg"
import Icon from "./Icon"
import Button from "./Button"

const features = [
  {
    title: "Explore Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque dui cursus vestibulum, facilisi ac, sed faucibus.",
    image: fishesImage,
  },
  {
    title: "Explore Fly Fishing",
    description:
      "At lacus vitae nulla sagittis scelerisque nisl. Pellentesque dui cursus vestibulum, facilisi ac, sed faucibus.",
    image: fishesImage,
  },
]

const Feature = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full px-4 py-8 space-y-4 bg-tan-lighter">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Featured options</h2>
        {features.map((feature, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left flex justify-between items-center py-4 font-semibold text-lg"
              onClick={() => toggleAccordion(index)}
            >
              {feature.title}
              {openIndex === index ? <Icon name="up" /> : <Icon name="down" />}
            </button>

            {openIndex === index && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center py-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-100 h-54"
                />
                <div>
                  <h2 className="text-2xl font-bold">{feature.title}</h2>
                  <p className="text-gray-600 mt-2">{feature.description}</p>

                  <Button text="Learn more" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feature
