import fishersImage1 from "./../assets/images/fishers.jpeg"
import fishersImage2 from "./../assets/images/journey.jpeg"
import fishersImage3 from "./../assets/images/catchday.jpeg"
import fishersImage4 from "./../assets/images/troattales.jpeg"
import Button from "./Button"

const stories = [
  {
    title: "John’s Story",
    description:
      "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ",
    image: fishersImage1,
  },
  {
    title: "The Journey",
    description:
      "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
    image: fishersImage2,
  },
  {
    title: "Catch Day",
    description:
      "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
    image: fishersImage3,
  },
  {
    title: "Trout Tales",
    description:
      "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
    image: fishersImage4,
  },
]

const Story = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-8">Member Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 items-start"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-50 h-50 md:w-48 md:h-48 object-cover border-2 border-transparent transition"
            />
            <div className="sm:flex-1">
              <h3 className="font-secondary text-[2rem]">{story.title}</h3>
              <p className="text-gray-600">{story.description}</p>
              <Button text="Read more" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Story
