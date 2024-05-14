import React from "react";
import { TfiClose } from "react-icons/tfi";
import { useState } from "react";
import { useGlobalContext } from "./Context";

const ArtistPage = () => {
  const { closeArtist, selectedArtist } = useGlobalContext();
  const [currIndex, setCurrIndex] = useState(0);
  const { images: images } = selectedArtist;

  const handlePrevBtn = () => {
    const newIndex = currIndex === 0 ? images.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };
  const handleNextBtn = () => {
    const newIndex = currIndex === images.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  return (
    <div className='artist-page-overlay'>
      <div className='overflow-hidden relative w-full h-full'>
        <div
          className='flex transition-transform ease-out duration-500'
          style={{
            transform: `translateX(-${currIndex * 100}vw)`,
            width: `${100 * images.length}vw`,
          }}>
          <div className='flex justify-center items-center w-full h-screen'>
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
          </div>
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

        <button className='absolute top-4 right-4 p-4' onClick={closeArtist}>
          <TfiClose size='24' />
        </button>

        <div className='absolute top-1 left-0'>
          <h3 className='vertical-text pt-2 pl-2'>LE SSERAFIM</h3>
        </div>

        <div className='absolute bottom-1 right-0'>
          <h3 className='vertical-text-right pt-2 pl-2'>IM FEARLESS</h3>
        </div>

        <div className='absolute bottom-88 right-8'>
          <div className='flex items-center justify-center gap-4'>
            <div className='w-3 h-3 text-2xl'> {currIndex + 1} / 3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
