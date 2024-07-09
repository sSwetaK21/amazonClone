import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "./Register.css";
import { useAuth } from "../AuthProvider";

export default function Register() {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    user_Name: "",
    email: "",
    password: "",
    usertype: "customer",
  });
  const [err, setErr] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmit) {
      const registerUser = async () => {
        try {
          console.log("Submitting form data:", formData);
          const response = await axios.post(
            "https://localhost:7219/api/Users/register",
            formData,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          console.log("Registration successful:", response.data);
          //Storing data in local storage here
          // localStorage.setItem("user", JSON.stringify(response.data));
          // setUser(response.data.user_Name);
          await login(formData.user_Name, formData.password);
          navigate("/login");
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
      registerUser();
    }
  }, [isSubmit, formData, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    setErr(null);
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
            <h2 className="title">Create an Account</h2>
            <Form className="example-form" onSubmit={handleSubmit}>
              <Form.Group className="form-group" controlId="user_Name">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="user_Name"
                  value={formData.user_Name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="form-group" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
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
              <Form.Group className="form-group" controlId="usertype">
                <Form.Label>UserType</Form.Label>
                <Form.Control
                  as="select"
                  name="usertype"
                  value={formData.usertype}
                  onChange={handleChange}
                  required
                >
                  <option value="customer">Customer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </Form.Control>
              </Form.Group>
              <button type="submit" className="card_button">
                {isSubmit ? "Submitting..." : "Continue"}
              </button>
              {err && <div className="error">{err}</div>}

              <div className="textt">
                By continuing, you agree to Amazon's{" "}
                <a href="#">Conditions of Use</a> and{" "}
                <a href="#">Privacy Notice</a>.
              </div>
              <hr />
              <div className="shop">
                <p>Already have an account?</p>
                <Link to="/login">Login Now</Link>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
