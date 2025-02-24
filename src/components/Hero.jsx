import fishingImage from "./../assets/images/fishing.jpeg"
import Button from "./Button"
const Hero = () => {
  return (
    <section className="bg-white md:py-20">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
        <div className="py-10 px-6 md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Central Texas <br /> Fly Fishing
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque dui
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>

          <Button text="Get Started" />
        </div>

        <div className="md:w-1/2">
          <img
            src={fishingImage}
            alt="Fishing"
            className="w-full h-auto md:w-[400px] md:h-[300px] sm:w-[400px] sm:h-[500px] "
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
