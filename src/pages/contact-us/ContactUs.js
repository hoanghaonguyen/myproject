import React from 'react'
import Contact from '../../components/contact/Contact'
import ScrollToTop from '../../components/scrolltotop/ScrollToTop'
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
      <div className="bcrumb">
        <div className="container">
          <ul className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default ContactUs