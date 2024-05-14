import React from "react";
import { useGlobalContext } from "./Context";
import { Link } from "react-router-dom"; // using Link instead of <a> tags, this way the page (/the state) doesn't reset when navigating to the new link

const Discography = () => {
  const { discography, selectAlbum } = useGlobalContext();
  return (
    <div className='flex flex-wrap-reverse justify-center items-start mb-48'>
      {discography.map((album) => (
        <div className='album-container hover-zoom'>
          <Link to={`/discography/${album.albumName}`}>
            <button onClick={() => selectAlbum(album.id)}>
              <img src={album.albumCover} className='object-cover' />
              <div className='overlay-text object-cover text-center absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center'>
                <p className='text-center'>{album.caption}</p>
                <br />
                <h3
                  className='mt-2 font-bold text-center'
                  style={{ fontSize: "1.25rem" }}>
                  {album.albumName}
                </h3>
              </div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discography;
