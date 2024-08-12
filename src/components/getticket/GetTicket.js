import React, { useEffect, useState } from "react";
import "./getticket.css";
import { Col, Form, FormGroup, Input, Row, Spinner } from "reactstrap";
import adult from "../../images/book/adult.PNG";
import child from "../../images/book/child.PNG";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Swal from 'sweetalert2/dist/sweetalert2.js'

import AOS from "aos";
import "aos/dist/aos.css";


const GetTicket = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [adultQuantity, setAdultQuantity] = useState(0);
  const [childQuantity, setChildQuantity] = useState(0);

  const moneyChild = 40;
  const moneyAdult = 50;

  // const totalAmount = () => {
  //   const total = adultQuantity * moneyAdult + childQuantity * moneyChild;
  //   return total;
  // }
  const totalAmount = adultQuantity * moneyAdult + childQuantity * moneyChild;



  const handleMinusAdultQuantity = (e) => {
    e.preventDefault();
    setAdultQuantity(adultQuantity - 1 < 0 ? 0 : adultQuantity - 1);
  };

  const handlePlusAdultQuantity = (e) => {
    e.preventDefault();
    setAdultQuantity(adultQuantity + 1);
  };

  const handleMinusChildQuantity = (e) => {
    e.preventDefault();
    setChildQuantity(childQuantity - 1 < 0 ? 0 : childQuantity - 1);
  };

  const handlePlusChildQuantity = (e) => {
    e.preventDefault();
    setChildQuantity(childQuantity + 1);
  };

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [datepicker, setDatepicker] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const handleSubmit = (e) => {
    
    e.preventDefault();
    // check if adultQuantity and childQuantity are both 0 => no submit
    if (adultQuantity === 0 && childQuantity === 0) {
      // alert("Please choose at least 1 ticket");
      Swal.fire("Please choose at least 1 ticket");
      console.log("Chose at least 1 ticket");
      return;
    }

    // check if required fields are empty
    if (!firstname || !lastname || !phone || !email || !datepicker) {
      //alert("Please fill in all required fields");
      Swal.fire("Please fill in all required fields");
      console.log("Please fill in all required fields");
      return;
    }

    setLoading(true); // show loading spinner

    // Your EmailJS service ID, template ID, and public key 
    const serviceID = "service_1z0i5cp";
    const templateID = "template_26srqcd";
    const publicKey = "aKdSpH011sM0d1DmZ";

    // <p>Adult: ${adultQuantity} person(s)</p>
    // <p>Child: ${childQuantity} person(s)</p>

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: firstname + " " + lastname,
      from_email: email,
      to_name: "ZooFari",
      message: `
        <h3>Your Information: </h3>
        <p> - Mr/Mrs: ${firstname} ${" "} ${lastname} </p>
        <p> - Phone number: ${phone}</p>
        <p> - Email address: ${email}</p>
        <p> - Day you visit Vietnam Safari: ${datepicker}</p>
        <p> - Note: ${note}</p>
        <h3>Your Tickets: </h3>
        <p> - Adult: $50/person x ${adultQuantity}</p>
        <p> - Child: $40/person x ${childQuantity}</p>
        <h1>Total Amount: $${totalAmount}</h1>
        `
    };

    // Send an email using EmailJS send method
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        setLoading(false); // hide loading spinner
        Swal.fire({
          title: "Good job!",
          text: "Email sent successfully!",
          icon: "success"
        });
        console.log("Success!", response);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setDatepicker("");
        setNote("");
        setAdultQuantity(0);
        setChildQuantity(0);
        navigate('/thankyou');
      })
      .catch((error) => {
        setLoading(false); // hide loading spinner
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to send email. Please try again later.",
        });
        console.log("Failed...", error);
      });
  }

  return (
    <>

      <div className="getticket py-3 mt-5" data-aos="zoom-in">
        <div className="text">
          <h3 className="title">GET TICKET</h3>
        </div>
      </div>

      <div className="select">
        <div className="form">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col lg="7" data-aos="fade-right">
                <div className="mess">
                  <h3 className="title">Your information</h3>

                    <FormGroup className="name">
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First name*"
                        required
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Last name*"
                        required
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="phone">
                      <Input
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone number*"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      {/* <p className="invalid">
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        Invalid phone number
                      </p> */}
                    </FormGroup>
                    <FormGroup className="email">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup className="date">
                      <Input
                        type="date"
                        id="datepicker"
                        name="datepicker"
                        placeholder="Day you visit Vietnam Safari*"
                        required
                        value={datepicker}
                        onChange={(e) => setDatepicker(e.target.value)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="textarea"
                        type="textarea"
                        name="note"
                        id="note"
                        placeholder="Note"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </FormGroup>
                </div>
              </Col>
              <Col lg="5" data-aos="fade-left">
                <div className="chooseticket mt-3" >
                  <h3 className="title">Tickets</h3>
                  <div className="item" id='adult'>
                    <img src={adult} alt="" />
                    <div className="right">
                      <div className="name">
                        <div className="variant">
                          <h3>Adult</h3>
                        </div>
                      </div>
                      <div className="price">
                        <p>
                          <span>50</span>
                          $/person
                        </p>
                        <div className="pricecore" style={{ display: "none" }}>50</div>
                        <div className="sum" style={{ display: "none" }}>50</div>
                      </div>
                    </div>
                    <div className="money">
                      <div className="d-flex justify-content-between align-items-center" style={{ width: '80px', gap: '8px' }}>
                        <button
                          className="btn btn-light rounded-circle p-0"
                          style={{ width: '24px', height: '24px', color: '#06b6d4' }}
                          onClick={handleMinusAdultQuantity}
                        >
                          -
                        </button>
                        <span>{adultQuantity}</span>
                        <button
                          className="btn btn-light rounded-circle p-0"
                          style={{ width: '24px', height: '24px', color: '#06b6d4' }}
                          onClick={handlePlusAdultQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item" id="child">
                    <img src={child} alt="" />
                    <div className="right">
                      <div className="name">
                        <div className="variant">
                          <h3>Child</h3>
                        </div>
                      </div>
                      <div className="price">
                        <p><span>40</span>$/child</p>
                        <div className="pricecore" style={{ display: "none" }}>40</div>
                        <div claclassNamess="sum" style={{ display: "none" }}>40</div>
                      </div>
                    </div>
                    <div className="money">
                      <div className="d-flex justify-content-between align-items-center" style={{ width: '80px', gap: '8px' }}>
                        <button
                          className="btn btn-light rounded-circle p-0"
                          style={{ width: '24px', height: '24px', color: '#06b6d4' }}
                          onClick={handleMinusChildQuantity}
                        >
                          -
                        </button>
                        <span>{childQuantity}</span>
                        <button
                          className="btn btn-light rounded-circle p-0"
                          style={{ width: '24px', height: '24px', color: '#06b6d4' }}
                          onClick={handlePlusChildQuantity}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="total">
                    <h4>Total Amount: ${totalAmount}</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="d-flex">
              <div className="button">
                <button className="btn" type="submit" disabled={loading}>
                  {/* {loading ? <Spinner size="sm" color="light" /> : "PROCEED CHECK OUT"}  */}

                  { loading ? <PulseLoader color="#06b6d4" /> : "PROCEED CHECK OUT" }
                </button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default GetTicket;
