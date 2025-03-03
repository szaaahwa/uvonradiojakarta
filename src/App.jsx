import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import Media from "./pages/Media";
import NewsDetail from "./pages/NewsDetail";
import Dashboard from "./pages/admin/Dashboard";
import NewsMain from "./pages/admin/NewsMain";


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
        <Route path="/admin/news" element={<NewsMain/>}/>
      </Routes>
    </>
  );
}

export default App;
