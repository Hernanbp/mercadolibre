import React, { useEffect, useState } from "react"
import right from "../assets/right.svg"
import left from "../assets/left.svg"

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHover, setIsHover] = useState(false)
  const [images, setImages] = useState([
    {
      url: "https://http2.mlstatic.com/D_NQ_896370-MLA51984116702_102022-OO.webp",
      id: 1,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_624427-MLA51954236971_102022-OO.webp",
      id: 2,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_793361-MLA51954211265_102022-OO.webp",
      id: 3,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_815643-MLA51953854055_102022-OO.webp",
      id: 4,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_648795-MLA51986275103_102022-OO.webp",
      id: 5,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_860664-MLA51953628457_102022-OO.webp",
      id: 6,
      active: false,
    },
    {
      url: "https://http2.mlstatic.com/D_NQ_858026-MLA51976299392_102022-OO.webp",
      id: 7,
      active: false,
    },
  ])

  const onMouseOver = () => {
    setIsHover(true)
  }

  const onMouseLeave = () => {
    setIsHover(false)
  }

  const prev = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    showImage(newIndex)
  }

  const next = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    showImage(newIndex)
  }

  const showImage = (index: number) => {
    setCurrentIndex(index)
    //find image with same id and change status
    const newImages = images.find((image) => image.id === index + 1)
    if (newImages) {
      newImages.active = true
    }
    setImages([...images])
    images
      .filter((image) => image.id !== index + 1)
      .map((image) => {
        image.active = false
        return image
      })
  }

  //autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 4000)
    return () => clearInterval(interval)
  })

  const content = (
    <div
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseOver}
      className="carousel-container"
    >
      <div
        className="carousel"
        style={{ backgroundImage: `url(${images[currentIndex].url})` }}
      >
        {isHover && (
          <>
            <button className="btn-control left" onClick={prev}>
              <img src={left} alt="left-arrow" />
            </button>
            <button className="btn-control right" onClick={next}>
              <img src={right} alt="right-arrow" />
            </button>
          </>
        )}
        <div className="dots">
          {images.map(({ active }, index) => (
            <div
              className={active ? "dot active" : "dot"}
              onClick={() => showImage(index)}
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )

  return content
}

export default Carousel
