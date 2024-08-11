import React from "react";
import {  HashRouter, Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import Discovery from "./pages/discovery/Discovery";
import ContactUs from "./pages/contact-us/ContactUs";
import Service from "./pages/service/Service";
import Book from "./pages/book/Book";
import NotFound from './pages/notfound/NotFound';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ThankYou from "./pages/thankyou/ThankYou";
import Shop from "./pages/products/Shop";
import ProductDetail from "./pages/product-detail/ProductDetail";
import Cart from "./pages/cart/Cart";
//import Loading from "./components/loading/Loading";

AOS.init();

function App() {


  return (
    <>
      <HashRouter>
        <Header />
        {/* {loading && <Loading />} */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>  
    </>
  );
}

export default App;
