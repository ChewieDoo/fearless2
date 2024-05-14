import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home";
import Discography from "./Discography";
import Footer from "./Footer";
import AlbumPage from "./AlbumPage";
import { useGlobalContext } from "./Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const { selectedAlbum } = useGlobalContext();
  return (
    <div>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/discography' element={<Discography />}></Route>
          <Route
            path={`/discography/${selectedAlbum.albumName}`}
            element={<AlbumPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
