import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Learns from "./pages/Learns";
import About from "./pages/About";
import Contact from "./pages/Contact";
import LessonDetail from "./pages/LessonDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="learns" element={<Learns />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail/:id" element={<LessonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;