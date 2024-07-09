import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "./Login.css";
import { useAuth } from "../AuthProvider";

export default function Login() {
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    userType: "customer",
  });
  const [err, setErr] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isSubmit) {
      const loginUser = async () => {
        try {
          console.log("Submitting form data:", formData);

          // const response = await axios.post(
          //   "https://localhost:7219/api/Users/login",
          //   formData,
          //   {
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }
          // );
          // console.log("Registration successful:", response.data);
          // const username = response.data.userName;
          // localStorage.setItem("username", username);
          // setUsername(response.data.userName);
          await login(formData.username, formData.password);
          // const storedUser = JSON.parse(localStorage.getItem("user"));
          // if (storedUser) {
          //   setUser(storedUser.user_Name);
          //   navigate("/home");
          // }
          navigate("/home");
        } catch (err) {
          console.error("Registration failed:", err);
          if (err.response && err.response.data) {
            console.log("Error response data:", err.response.data);
            setErr(err.response.data);
          } else {
            console.log("Error without response data:", err);
            setErr("Registration failed. Please try again.");
          }
        } finally {
          setIsSubmit(false);
        }
      };
      loginUser();
    }
  }, [isSubmit, formData, navigate, login]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setErr(null);
    setIsSubmit(true);
  };
  return (
    <>
      <div className="auth-portal">
        <div className="brand">
          <Link to="/home">
            <img
              src="src\assets\images\amazon-black.png"
              alt="amazon logo"
              className="Brand_img"
            />
          </Link>
        </div>

        <Card className="card">
          <Card.Body>
            <h2 className="title">Sign In</h2>
            <Form className="example-form" onSubmit={handleSubmit}>
              <Form.Group className="form-group" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="form-group" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="form-group" controlId="userType">
                <Form.Label>UserType</Form.Label>
                <Form.Control
                  as="select"
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <button type="submit" className="card_button">
                Continue
              </button>

              <div className="textt">
                By continuing, you agree to Amazon's{" "}
                <a href="#">Conditions of Use</a> and{" "}
                <a href="#">Privacy Notice</a>.
              </div>
              <hr />
              <div className="shop">
                <p>Buying for work?</p>
                <Link to="/login">Shop with Amazon Business</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
        <div className="hr-with-text">
          <hr />
          <h5 aria-level="5" className="hrtext">
            New to Amazon?
          </h5>
        </div>
        <div className="butn">
          <button type="submit" className="card_button">
            <Link to="/register"> Create your Amazon Account</Link>
          </button>
        </div>
      </div>
    </>
  );
}
