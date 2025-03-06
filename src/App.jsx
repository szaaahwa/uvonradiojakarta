import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Media from "./pages/Media";
import NewsDetail from "./pages/NewsDetail";
import Dashboard from "./pages/admin/Dashboard";
import NewsMain from "./pages/admin/NewsMain";
import NewsEdit from "./components/admin/News/NewsEdit";
import MediaAdmin from "./pages/admin/MediaMain";
import MediaEdit from "./components/admin/Media/MediaEdit";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/media" element={<Media />} />

        {/* adminnn */}
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        {/* berita */}
        <Route path="/admin/news" element={<NewsMain/>}/>
        <Route path="/admin/edit-news/:id" element={<NewsEdit/>}/>

        {/* Media */}
        <Route path="/admin/media" element={<MediaAdmin/>}/>
        <Route path="/admin/edit-media/:id" element={<MediaEdit/>}/>
      </Routes>
    </>
  );
}

export default App;
