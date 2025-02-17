import { Toaster } from "react-hot-toast";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Media from "./pages/Media";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news:id" element={<News />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  );
}

export default App;
