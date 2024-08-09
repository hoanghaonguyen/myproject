import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Discovery from "./pages/discovery/Discovery";
import ContactUs from "./pages/contact-us/ContactUs";
import Event from "./pages/event/Event";
import Service from "./pages/service/Service";
import Book from "./pages/book/Book";
import NotFound from './pages/notfound/NotFound';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
