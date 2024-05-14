const VideoPlayer = ({ videoLink }) => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <iframe
        src={`${videoLink}`}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        width='80%'
        height='80%'
        allowFullScreen
        frameBorder='0'></iframe>
    </div>
  );
};

export default VideoPlayer;
