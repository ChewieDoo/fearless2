import { useGlobalContext } from "./Context";

const Gallery = () => {
  const { selectArtist, artists } = useGlobalContext();
  return (
    <div className='overflow-hidden relative w-full h-full'>
      <div className='grid grid-cols-8 gap-4 mt-32 ml-2'>
        <div className='col-start-2 col-span-6'>
          <h3 className='text-gray-5 font-bold text-2xl'>IM FEARLESS </h3>
        </div>
      </div>

      <div className='flex justify-center items-center mt-10 mx-32'>
        <div className='flex flex-wrap justify-center items center mb-48 px-8'>
          {artists.map((artist) => (
            <img
              src={artist.profile}
              alt={artist.artist}
              className='artist-image m-10'
              onClick={() => selectArtist(artist.id)}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
