import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";

const images = [
  "https://sourcemusic.com/resources/artist/2244b2da-59ed-4367-a419-108044509e87.jpg",
  "https://sourcemusic.com/resources/artist/337dc84d-4ff9-4d2d-829a-350bc5b30558.jpg",
  "https://sourcemusic.com/resources/artist/c200139e-dbc6-4e85-beb8-721825f42a25.jpg",
];

const SliderExample = () => {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <Carousel>
        {images.map((image, index) => (
          <div className='flex justify-center w-full h-full'>
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className='artist-image-slider'
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

const Carousel = ({ children }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const handlePrevBtn = () => {
    const newIndex = currIndex === 0 ? children.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const handleNextBtn = () => {
    const newIndex = currIndex === children.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  return (
    <div className='overflow-hidden relative w-full h-full'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{
          transform: `translateX(-${currIndex * 100}vw)`,
          width: `${100 * children.length}vw`,
        }}>
        {children}
      </div>
      <div className='absolute inset-y-0 flex items-center justify-between w-full px-4'>
        <button
          className='p-4 hover:underline-offset cursor-pointer'
          onClick={handlePrevBtn}>
          &lt; PREV
        </button>
        <button
          className='p-4 hover:underline-offset cursor-pointer'
          onClick={handleNextBtn}>
          NEXT &gt;
        </button>
      </div>

      <div className='absolute top-4 right-4 p-4 curosr-pointer'>
        <TfiClose size='24' />
      </div>

      <div className='absolute top-1 left-1'>
        <h3 className='vertical-text pt-2 pl-2'>LE SSERAFIM</h3>
      </div>

      <div className='absolute bottom-1 right-1'>
        <h3 className='vertical-text-right pt-2 pl-2'>IM FEARLESS</h3>
      </div>

      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {images.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                currIndex === i ? "p-2" : "bg-opacity-50"
              }`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderExample;
