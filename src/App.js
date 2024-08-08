import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Discovery from "./pages/discovery/Discovery";
import Contact from "./pages/contact/Contact";
import Event from "./pages/event/Event";
import Service from "./pages/service/Service";
import Book from "./pages/book/Book";
import NotFound from './pages/notfound/NotFound';
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
