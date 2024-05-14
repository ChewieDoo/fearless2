import React from "react";
import Intro from "./Intro";
import Gallery from "./Gallery";
import ArtistPage from "./ArtistPage";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { showArtist } = useGlobalContext();

  return (
    <div>
      <Intro />
      <Gallery />
      {showArtist && <ArtistPage />}
    </div>
  );
};

export default Home;
