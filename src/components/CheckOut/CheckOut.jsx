import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";

import "./CheckOut.css";

export default function CheckOut() {
  const navigate = useNavigate();
  const [cardForm, setCardForm] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [addressForm, setAddressForm] = useState({
    firstName: "",
    phoneNumber: "",
    address: "",
  });

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressForm({ ...addressForm, [name]: value });
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardForm({ ...cardForm, [name]: value });
  };
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log("Address submitted", addressForm);
  };

  const handleCardSubmit = (e) => {
    e.preventDefault();
    console.log("Card submitted", cardForm);
  };
  return (
    <div>
      <div className="head">
        <div className="brand">
          <Link to="/home">
            <img
              src="src\assets\images\amazon-black.png"
              alt="brand"
              className="BrandImg"
            />
          </Link>
        </div>
        <div className="title">
          <h3>CheckOut</h3>
        </div>
        <div className="lockicon">
          <i className="bx bxs-lock-open-alt"></i>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img
                  src="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png"
                  alt="Visa"
                />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1234</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small>
                  <span className="fw-bold">Expiry date:</span>
                  <span>MM/YY</span>
                </small>
                <small>
                  <span className="fw-bold">Name:</span>
                  <span>username</span>
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img
                  src="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png"
                  alt="Mastercard"
                />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1234</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small>
                  <span className="fw-bold">Expiry date:</span>
                  <span>MM/YY</span>
                </small>
                <small>
                  <span className="fw-bold">Name:</span>
                  <span>username</span>
                </small>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
              <div className="img-box">
                <img
                  src="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png"
                  alt="Discover"
                />
              </div>
              <div className="number">
                <label className="fw-bold">**** **** **** 1234</label>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <small>
                  <span className="fw-bold">Expiry date:</span>
                  <span>MM/YY</span>
                </small>
                <small>
                  <span className="fw-bold">Name:</span>
                  <span>username</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-12 mt-4">
            <div className="card p-3 w-100">
              <p className="mb-0 fw-bold h4">Payment Methods</p>
            </div>
          </div>
          <div className="col-12">
            <div className="card p-3 w-100">
              <div className="card-body border p-0">
                <p>
                  <button
                    className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseAddress"
                    aria-expanded="true"
                    aria-controls="collapseAddress"
                  >
                    <span className="fw-bold">1 Delivery Address</span>
                    <span className="bx bx-map"></span>
                  </button>
                </p>
                <div className="collapse p-3 pt-0" id="collapseAddress">
                  <div className="row">
                    <div className="col-12">
                      <form className="add_form" onSubmit={handleAddressSubmit}>
                        <div className="row">
                          <div className="col-6">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                name="firstName"
                                value={addressForm.firstName}
                                onChange={handleAddressChange}
                              />
                              <label className="form__label">First Name</label>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                name="phoneNumber"
                                value={addressForm.phoneNumber}
                                onChange={handleAddressChange}
                              />
                              <label className="form__label">
                                Phone Number
                              </label>
                            </div>
                          </div>

                          <div className="col-12">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                name="address"
                                value={addressForm.address}
                                onChange={handleAddressChange}
                              />
                              <label className="form__label">Address</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn w-100 card_button">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body border p-0">
                <p>
                  <button
                    className="btn btn-primary p-2 w-100 h-100 d-flex align-items-center justify-content-between"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseCard"
                    aria-expanded="true"
                    aria-controls="collapseCard"
                  >
                    <span className="fw-bold">2 Credit Card</span>
                    <span className="">
                      <span className="bx bxl-paypal"></span>
                    </span>
                  </button>
                </p>
                <div className="collapse show p-3 pt-0" id="collapseCard">
                  <div className="row">
                    <div className="col-lg-5 mb-lg-0 mb-3">
                      <p className="h4 mb-0">Summary</p>
                    </div>
                    <div className="col-lg-7">
                      <form className="card_form" onSubmit={handleCardSubmit}>
                        <div className="row">
                          <div className="col-12">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="4 Digits Only"
                                name="cardNumber"
                                value={cardForm.cardNumber}
                                onChange={handleCardChange}
                              />
                              <label className="form__label">Card Number</label>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="MM/YY"
                                name="expiryDate"
                                value={cardForm.expiryDate}
                                onChange={handleCardChange}
                              />
                              <label className="form__label">Expiry Date</label>
                            </div>
                          </div>

                          <div className="col-6">
                            <div className="form__div">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="****"
                                name="cvv"
                                value={cardForm.cvv}
                                onChange={handleCardChange}
                              />
                              <label className="form__label">CVV Code</label>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form__div">
                              <input
                                type="text"
                                className="form-control"
                                placeholder=" "
                                name="nameOnCard"
                                value={cardForm.nameOnCard}
                                onChange={handleCardChange}
                              />
                              <label className="form__label">
                                Name on the Card
                              </label>
                            </div>
                          </div>
                          <div className="col-12">
                            <button className="btn w-100 card_button">
                              Submit
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary payment"
              onClick={() => navigate("/thankyou")}
            >
              Make Payment
            </button>
          </div>
        </div> */}
        <div className="row">
          <div className="col-12">
            <div className="card p-3 w-100">
              <p className="mb-0 fw-bold h4">Payment Methods</p>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>1. Delivery Address</Accordion.Header>
              <Accordion.Body>
                <div className="col-12">
                  <form className="add_form" onSubmit={handleAddressSubmit}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form__div">
                          <label className="form__label">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                            name="firstName"
                            value={addressForm.firstName}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <label className="form__label">Phone Number</label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                            name="phoneNumber"
                            value={addressForm.phoneNumber}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form__div">
                          <label className="form__label">Address</label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                            name="address"
                            value={addressForm.address}
                            onChange={handleAddressChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn w-100 btn-primary card_button"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>2. Credit Card</Accordion.Header>
              <Accordion.Body>
                <div className="col">
                  <form className="card_form" onSubmit={handleCardSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <label className="form__label">Card Number</label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="4 Digits Only"
                            name="cardNumber"
                            value={cardForm.cardNumber}
                            onChange={handleCardChange}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <label className="form__label">Expiry Date</label>

                          <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YY"
                            name="expiryDate"
                            value={cardForm.expiryDate}
                            onChange={handleCardChange}
                          />
                        </div>
                      </div>

                      <div className="col-6">
                        <div className="form__div">
                          <label className="form__label">CVV Code</label>

                          <input
                            type="password"
                            className="form-control"
                            placeholder="****"
                            name="cvv"
                            value={cardForm.cvv}
                            onChange={handleCardChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form__div">
                          <label className="form__label">
                            Name on the Card
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder=" "
                            name="nameOnCard"
                            value={cardForm.nameOnCard}
                            onChange={handleCardChange}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn w-100 btn-primary card_button"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className="col-12">
            <button
              className="btn btn-primary payment"
              onClick={() => navigate("/thankyou")}
            >
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
