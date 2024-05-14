const ConceptPhotos = ({ selectedConcept, currIndex }) => {
  const imageHeight = 600;
  const multiplier = 100;

  return (
    <div className='overflow-hidden relative w-full h-full'>
      <div
        className='flex transition-transform ease-out duration-500'
        style={{
          transform: `translateX(-${currIndex * (imageHeight - 50)}px)`,
          width: `${multiplier * imageHeight}px`,
        }}>
        <div className='flex justify-center items-center'>
          {selectedConcept.photos.map((image, index) => (
            <div className='flex justify-center w-full h-full'>
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className='concept-image-slider'
                style={{
                  height: `${imageHeight}px`,
                  maxWidth: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConceptPhotos;
