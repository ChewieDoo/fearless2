# FEARLESS

Reconstruction of the official LE SSERAFIM website using React JS and Tailwind CSS for styling.

### Components

`Context.jsx` contains data (event handlers, useStates, useEffects, objects) used by different components. Contains the function `useGlobalContext()` which provide `AppContext` to each components.

### Key features

**Image gallery** that uses Tailwind CSS for responsive styling. When clicking into each artist image, the app displays a full-screen modal that provides an image slider. The image displayed are responsive to each artist selected. Each time an image is clicked, the event handler function switches the `selecteArtist` which is a state. Depending the the state, the image slider displays different list of images.

**Album page** showing image and an hover animation. When clicked, the link directed to is based on which album is clicked. The new page is also responsive and displays album objects. At the bottom is another reponsive image slider that displays image depending on which concepts are selected. The styling focuses on flex displays that is responsive to the browser which while maintaining the arrangements.
