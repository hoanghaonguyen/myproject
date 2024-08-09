import React from "react";
import "./getticket.css";
import { Alert, Col, Form, FormGroup, Input, Row } from "reactstrap";

const GetTicket = () => {
  return (
    <>
      <div className="getticket">
        <div className="text">
          <h3 className="title">GET TICKET</h3>
        </div>
      </div>

      <div className="select">
        <div className="form">
          <Form>
            <Row>
              <Col lg="7">
                <div className="mess">
                  <h3 className="title">Your information</h3>
                  {/* <Alert color="danger">
                    <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                    Please do not leave the required fields (*) blank
                  </Alert> */}
                  <Form>
                    <FormGroup className="name">
                      <Input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder="First name*"
                        required
                      />
                      <Input
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder="Last name*"
                        required
                      />
                    </FormGroup>
                    <FormGroup className="phone">
                      <Input
                        id="phone"
                        name="phone"
                        type="number"
                        placeholder="Phone number*"
                        required
                      />
                      <p className="invalid">
                        <i className="fa-sharp fa-solid fa-circle-exclamation"></i>
                        Invalid phone number
                      </p>
                    </FormGroup>
                    <FormGroup className="email">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email*"
                        required
                      />
                    </FormGroup>
                    {/* <FormGroup>
                      <Input
                        id="exampleDate"
                        name="date"
                        placeholder="date placeholder"
                        type="date"
                      />
                    </FormGroup> */}
                    <FormGroup className="date">
                      <Input
                        type="date"
                        id="datepicker"
                        name="datepicker"
                        placeholder="Day you visit Vietnam Safari*"
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        className="textarea"
                        type="textarea"
                        name="note"
                        id="note"
                        placeholder="Note"
                      />
                    </FormGroup>
                  </Form>
                </div>
              </Col>
              <Col lg="5"></Col>
            </Row>
            <div className="d-flex">
              <div className="button">
                <button className="btn" type="submit">
                  PROCEED CHECK OUT
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
