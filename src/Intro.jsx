import React from "react";

const groupLogo =
  "https://sourcemusic.com/resources/artist/ee7a25f9-b7a4-4422-bb36-1206a7896f9b.png";

const Intro = () => {
  return (
    <main className='grid grid-cols-8 gap-4'>
      <div className='col-start-2 col-span-6 items-center flex justify-center mt-28 mb-28'>
        <img
          src={groupLogo}
          className='object-contain max-w-full max-h-full'></img>
      </div>

      <div className='col-start-2 col-span-2 text-2xl mb-2'>
        <h3 className='text-gray-5 font-bold'>DEBUT</h3>
      </div>

      <div className='col-start-2 col-span-2 font-bold text-4xl mb-10'>
        <h1>2022.05.02</h1>
      </div>

      <div className='col-start-2 col-span-6 leading-loose'>
        LE SSERAFIM is a girl group with SOURCE MUSIC, a label under HYBE,
        consisting of five members of different nationalities: SAKURA, KIM
        CHAEWON, HUH YUNJIN, KAZUHA and HONG EUNCHAE. The first girl group to
        launch through a collaboration between HYBE and SOURCE MUSIC, they are
        taking a daring stance and saying right from the outset that they will
        stand at the very top. The group’s name, LE SSERAFIM, is an anagram of
        the words “I’M FEARLESS.” The name captures the group’s self-confidence
        and iron will as they go out into the world fearlessly and unwavering
        before the watchful eyes of the world. It is like an incantation to
        guarantee their success on the merit of their unbreakable poise and
        strength.
      </div>
    </main>
  );
};

export default Intro;
