import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const artists = [
    {
      id: 1,
      artist: "Chaewon",
      profile:
        "https://sourcemusic.com/resources/main/7e9795c2-731b-4229-a848-e545cc37f2df.jpg",
      images: [
        "https://sourcemusic.com/resources/artist/2244b2da-59ed-4367-a419-108044509e87.jpg",
        "https://sourcemusic.com/resources/artist/337dc84d-4ff9-4d2d-829a-350bc5b30558.jpg",
        "https://sourcemusic.com/resources/artist/c200139e-dbc6-4e85-beb8-721825f42a25.jpg",
      ],
    },
    {
      id: 2,
      artist: "Sakura",
      profile:
        "https://sourcemusic.com/resources/main/0be4a37b-6f15-487c-85d6-74d7b26067d6.jpg",
      images: [
        "https://sourcemusic.com/resources/artist/850b26ef-3b6c-4116-a281-0bca6903c56e.jpg",
        "https://sourcemusic.com/resources/artist/26118d50-0682-4ff2-a32a-14862583d97e.jpg",
        "https://sourcemusic.com/resources/artist/b605dbc7-100f-422a-b7c7-a13b35d9cb79.jpg",
      ],
    },
    {
      id: 3,
      artist: "Yunjin",
      profile:
        "https://sourcemusic.com/resources/main/46815cfc-834d-4aeb-8d00-194440e148c9.jpg",
      images: [
        "https://sourcemusic.com/resources/artist/45118e2f-1b04-487b-8bed-20975f0e5b02.jpg",
        "https://sourcemusic.com/resources/artist/be37c8d7-848b-49bb-8c16-c2419b60a9f5.jpg",
        "https://sourcemusic.com/resources/artist/7e5bf454-5a00-4de8-9d78-200f98eda9f3.jpg",
      ],
    },
    {
      id: 4,
      artist: "Kazuha",
      profile:
        "https://sourcemusic.com/resources/main/e791f6a6-263f-4a68-a5a5-3d988bee426a.jpg",
      images: [
        "https://sourcemusic.com/resources/artist/ca08eaf7-7870-48c4-8c23-900f32e8acee.jpg",
        "https://sourcemusic.com/resources/artist/1561acb4-15b4-4f41-8fb9-abb7576a1863.jpg",
        "https://sourcemusic.com/resources/artist/ff4ee59f-90fe-407f-9878-cde39e96520e.jpg",
      ],
    },
    {
      id: 5,
      artist: "Eunchae",
      profile:
        "https://sourcemusic.com/resources/main/ada20929-e547-4314-bea3-90b88456e93c.jpg",
      images: [
        "https://sourcemusic.com/resources/artist/92256115-4083-4555-a099-d470ab8529b5.jpg",
        "https://sourcemusic.com/resources/artist/53ccfef9-6d6f-4d8c-bd07-e5f72a5c64b0.jpg",
        "https://sourcemusic.com/resources/artist/6215f309-d9eb-43a8-bdf1-dbd71b7caa85.jpg",
      ],
    },
  ];

  const discography = [
    {
      id: 1,
      albumName: "FEARLESS",
      caption: "1st Mini Album",
      albumCover:
        " https://sourcemusic.com/resources/discography/c82a4114-7be3-44cd-bb3f-fcec274c018c.png",
    },

    {
      id: 2,
      albumName: "ANTIFRAGILE",
      caption: "2nd Mini Album",
      albumCover:
        "https://sourcemusic.com/resources/discography/cfae49df-6597-465f-b21f-7b7597560ed1.png",
    },

    {
      id: 3,
      albumName: "UNFORGIVEN",
      caption: "1st Studio Album",
      albumCover:
        "https://sourcemusic.com/resources/discography/163b19aa-70cd-4850-a7e6-2767813e47cf.jpg",
    },
    {
      id: 4,
      albumName: "PERFECT NIGHT",
      caption: "Digital Single",
      albumCover:
        "https://sourcemusic.com/resources/discography/9f927477-1836-40eb-b9fe-1e8879acb248.jpg",
    },
    {
      id: 5,
      albumName: "EASY",
      caption: "3rd Mini Album",
      albumCover:
        "https://sourcemusic.com/resources/discography/7c210f34-ee38-4cb4-af60-47485ceaf442.png",
      description:
        "“EASY”, the group’s 3rd mini album, talks about their insecurities and concerns behind the stages that they have never shared before. Truth be told, the “fearless” attitude against the policing eyes of the world, as well as the “antifragile” mindset in the face of tribulations and the “unforgiven” strength that seeks no one’s forgiveness, were no products of natural birth. They make an honest revelation that everything they have achieved so far was the outcome of countless nights of contemplation and putting in an extreme amount of work.",
      tracks: [
        { id: 1, song: "Good Bones", duration: "2:40" },
        { id: 2, song: "EASY", duration: "2:45" },
        { id: 3, song: "Swan Song", duration: "2:37" },
        { id: 4, song: "Smart", duration: "2:46" },
        { id: 5, song: "We got so much", duration: "2:46" },
      ],
      videos: [
        {
          id: 1,
          title: "'EASY' OFFICIAL MV",
          videoLink: "https://www.youtube.com/embed/bNKXxwOQYB8",
        },
        {
          id: 2,
          title: " EASY TRAILER 'Good Bones'",
          videoLink: "https://www.youtube.com/embed/WKVBAwHqyEk",
        },
        {
          id: 3,
          title: "EASY TRAILER 'Good Bones (Portrait ver.)' ",
          videoLink: "https://www.youtube.com/embed/XUQa4qT3IJ4",
        },
      ],
      artistPhotos: [
        {
          id: 1,
          photoShoot: "Compact ver.",
          photos: [
            "https://sourcemusic.com/resources/discography/173d3a3e-f4b4-489e-b5f6-084a3e870a6c.jpg",
            "https://sourcemusic.com/resources/discography/652b01ec-893d-4725-bcdf-3c26c3bb2b30.jpg",
            "https://sourcemusic.com/resources/discography/399317a0-d66c-4166-b04b-83183c901aec.jpg",
            "https://sourcemusic.com/resources/discography/935eb5ab-2ffe-43a6-8af3-6b6b3ff62f62.jpg",
            "https://sourcemusic.com/resources/discography/1f38d87b-8100-4cef-a685-2fb8ef8272b8.jpg",
            "https://sourcemusic.com/resources/discography/313ef887-ac3a-4e84-9754-6c144f3d55b8.jpg",
            "https://sourcemusic.com/resources/discography/77a24bc2-64a6-4d4c-b41a-0bd23eef2823.jpg",
            "https://sourcemusic.com/resources/discography/6c5bb938-cfd0-42e2-b3a8-d2bf51c887f0.jpg",
            "https://sourcemusic.com/resources/discography/3afb206b-799f-4b6d-9c5a-ecf17eb2c617.jpg",
            "https://sourcemusic.com/resources/discography/fc7cd879-5dc8-49b0-9c0c-6799e6437833.jpg",
            "https://sourcemusic.com/resources/discography/173d3a3e-f4b4-489e-b5f6-084a3e870a6c.jpg",
          ],
        },
        {
          id: 2,
          photoShoot: "Weverse Albums ver.",
          photos: [
            "https://sourcemusic.com/resources/discography/be320729-cd8b-45df-ba00-9c7ce83b7f04.jpg",
            "https://sourcemusic.com/resources/discography/9419a724-2e1e-4016-83a9-2fb61bf8d46c.jpg",
            "https://sourcemusic.com/resources/discography/a0f8dc0e-92cc-4822-8a47-2d588cecfc26.jpg",
            "https://sourcemusic.com/resources/discography/ed5aa303-713b-42b2-bb3c-cc1db04e9029.jpg",
            "https://sourcemusic.com/resources/discography/12481188-d117-4d1f-a980-5c95ca4438bb.jpg",
            "https://sourcemusic.com/resources/discography/2bc8a094-bb26-4a80-89d9-6d710634030a.jpg",
            "https://sourcemusic.com/resources/discography/5f54c75d-d7de-4302-b38e-ba83a1fb676c.jpg",
            "https://sourcemusic.com/resources/discography/b7b1834a-6e22-4248-bae3-ab02798d24a8.jpg",
          ],
        },
        {
          id: 3,
          photoShoot: "BALMY FLEX",
          photos: [
            "https://sourcemusic.com/resources/discography/89077bb8-924e-4577-ac3d-39a36b375098.jpg",
            "https://sourcemusic.com/resources/discography/7f909223-66a8-40a5-ae26-97d5df7d3b8c.jpg",
            "https://sourcemusic.com/resources/discography/ff4e3258-1f5f-4a20-a912-d290710c7141.jpg",
            "https://sourcemusic.com/resources/discography/eeacce36-f3d1-448a-bd6b-5bb753ba6335.jpg",
            "https://sourcemusic.com/resources/discography/39e18fee-7f86-4640-b3fd-0649c45b3732.jpg",
            "https://sourcemusic.com/resources/discography/c2823c81-3d66-40bf-a1e4-7f2e52d5eedc.jpg",
            "https://sourcemusic.com/resources/discography/b873fee4-d217-4f03-8a46-d7d0472cdca6.jpg",
            "https://sourcemusic.com/resources/discography/a8dce143-38f8-4c12-b13a-399af4a10c3f.jpg",
            "https://sourcemusic.com/resources/discography/e7002aa7-65b9-4aad-87e8-845f800bffba.jpg",
            "https://sourcemusic.com/resources/discography/eaa1ced1-9fed-48ba-8305-e92cd608cde2.jpg",
            "https://sourcemusic.com/resources/discography/c691ec19-603c-4f10-a483-a1c64af65dee.jpg",
            "https://sourcemusic.com/resources/discography/b95938e6-ab3c-454b-97f7-46f81bbbd232.jpg",
            "https://sourcemusic.com/resources/discography/f72c56e4-fc32-42d2-8d35-f156ee4d80d4.jpg",
            "https://sourcemusic.com/resources/discography/32a40eec-dccf-41e6-aaea-d2274b3d99d8.jpg",
            "https://sourcemusic.com/resources/discography/b3329cbd-724b-459f-86c6-ebfe3109026b.jpg",
          ],
        },
      ],
    },
  ];

  const [selectedArtist, setSelectedArtist] = useState({});
  const [showArtist, setShowArtist] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState({});

  const selectArtist = (id) => {
    setSelectedArtist(artists.find((artist) => artist.id === id));
    setShowArtist(true);
  };

  const closeArtist = () => {
    setShowArtist(false);
  };

  const selectAlbum = (id) => {
    setSelectedAlbum(discography.find((album) => album.id === id));
  };

  return (
    <AppContext.Provider
      value={{
        artists,
        showArtist,
        closeArtist,
        selectArtist,
        selectedArtist,
        discography,
        selectAlbum,
        selectedAlbum,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
