import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import VideoPlayer from "./VideoPlayer";
import ConceptPhotos from "./ConceptPhotos";

const AlbumPage = () => {
  const { selectedAlbum } = useGlobalContext();
  const {
    albumName,
    caption,
    albumCover,
    description,
    tracks,
    videos,
    artistPhotos,
  } = selectedAlbum;

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [selectedConcept, setSelectedConcept] = useState(artistPhotos[0]);

  const [currIndex, setCurrIndex] = useState(0);

  const handlePrevBtn = () => {
    const newIndex =
      currIndex === 0 ? selectedConcept.photos.length - 1 : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const handleNextBtn = () => {
    const newIndex =
      currIndex === selectedConcept.photos.length - 1 ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const handleSelectedVideo = (id) => {
    setSelectedVideo(videos.find((video) => video.id === id));
  };

  const handleSelectedConcept = (id) => {
    setSelectedConcept(artistPhotos.find((concept) => concept.id === id));
  };

  return (
    <div className='overflow-hidden relative w-full h-full'>
      <div className='flex justify-center items-center mt-20'>
        <h3 className='text-2xl font-bold'>{caption}</h3>
      </div>
      <div className='flex justify-center items-center mt-8'>
        <h1 className='text-8xl font-bold'>{albumName}</h1>
      </div>
      <div className='flex justify-center items-center mt-12'>
        <img
          src={albumCover}
          style={{ width: "420px", height: "420px" }}
          className='shadow'
        />
      </div>
      <div className='flex justify-center items-center mt-16 mx-32 text-center leading-loose'>
        <p>{description}</p>
      </div>
      <div className='flex justify-center items-center mt-44'>
        <h1 className='text-8xl font-bold'>TRACKS</h1>
      </div>
      <div className='mt-16 flex justify-center'>
        <div className='flex flex-col items-start'>
          {tracks.map((track) => (
            <div className='flex justify-center items-center mt-6'>
              <div className='font-bold mr-6 ' style={{ fontSize: "1.25rem" }}>
                0{track.id}
              </div>
              <div className='font-bold mr-4 ' style={{ fontSize: "1.25rem" }}>
                {track.song}
              </div>
              <div
                className='font-bold text-gray-5'
                style={{ fontSize: "1.2rem" }}>
                {track.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center mt-44'>
        <h1 className='text-8xl font-bold'>VIDEO</h1>
      </div>
      <div className='flex justify-center items-center mt-16 mx-32 text-center'>
        <div className='flex flex-wrap max-w-2xl items-center justify-center'>
          {videos.map((video) => (
            <div
              onClick={() => handleSelectedVideo(video.id)}
              className='mx-16 mt-8 text-gray-5 font-bold hover:underline cursor-pointer'>
              {video.title}
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center mt-16 mx-32 text-center'>
        <VideoPlayer videoLink={selectedVideo.videoLink} />
      </div>
      <div className='flex justify-center items-center mt-44'>
        <h1 className='text-8xl font-bold'>PHOTOS</h1>
      </div>
      <div className='flex mt-16 flex-row justify-between'>
        <div className='flex justify-center ml-56'>
          <h3 className='text-4xl font-bold'>{selectedConcept.photoShoot}</h3>
        </div>
        <div className='flex justify-center mr-56'>
          <button
            className='text-4xl px-8 hover:underline-offset cursor-pointer'
            onClick={handlePrevBtn}>
            &lt;
          </button>
          <div className='text-4xl font-bold'> {currIndex + 1} / </div>
          <div className='text-4xl font-bold text-gray-5'>
            &nbsp;{selectedConcept.photos.length}
          </div>
          <button
            className='text-4xl px-8 hover:underline-offset cursor-pointer'
            onClick={handleNextBtn}>
            &gt;
          </button>
        </div>
      </div>
      <div className='mt-16 flex justify-center'>
        <div className='flex flex-row justify-center items-start'>
          <div className='grid grid-cols-8 gap-4'>
            <div className='col-start-2 col-span-2'>
              <ul>
                {artistPhotos.map((concept) => (
                  <li
                    onClick={() => handleSelectedConcept(concept.id)}
                    className={`concept-list-item hover-line ${
                      selectedConcept.id === concept.id ? "active" : ""
                    }`}>
                    {concept.photoShoot}
                  </li>
                ))}
              </ul>
            </div>
            <div className='col-start-4 col-span-8 mb-48'>
              <ConceptPhotos
                selectedConcept={selectedConcept}
                currIndex={currIndex}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
