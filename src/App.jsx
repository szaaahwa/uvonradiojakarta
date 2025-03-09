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
import ProgramMain from "./pages/admin/ProgramMain"
import ProgramEdit from "./components/admin/Program/ProgramEdit";
import DivisiMain from "./pages/admin/DivisiMain";
import Contact from "./pages/admin/Contact";
import DivisiEdit from "./components/admin/Divisi/DivisiEdit";
import Divisi from "./pages/Divisi";
import Login from "./pages/admin/auth/Login";
import Register from "./pages/admin/auth/Register";

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
        <Route path="/divisi" element={<Divisi/>}/>

        {/* adminnn */}
        <Route path="/admin/dashboard" element={<Dashboard/>}/>
        {/* berita */}
        <Route path="/admin/news" element={<NewsMain/>}/>
        <Route path="/admin/edit-news/:id" element={<NewsEdit/>}/>

        {/* Media */}
        <Route path="/admin/media" element={<MediaAdmin/>}/>
        <Route path="/admin/edit-media/:id" element={<MediaEdit/>}/>

        {/* Programs */}
        <Route path="/admin/program" element={<ProgramMain/>}/>
        <Route path="/admin/edit-program/:id" element={<ProgramEdit/>}/>

        {/* divisi */}
        <Route path="/admin/divisi" element={<DivisiMain/>}/>
        <Route path="/admin/edit-divisi/:id" element={<DivisiEdit/>}/>
        

        {/* kontak */}
        <Route path="/admin/contact" element={<Contact/>}/>
        {/* Login */}
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin/register" element={<Register/>}/>
      </Routes>
    </>
  );
}

export default App;
