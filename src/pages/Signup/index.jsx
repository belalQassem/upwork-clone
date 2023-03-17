import React, { useState } from "react";
import {
  AlredyAccount,
  ErrorMessage,
  InputWrapper,
  Register,
  ShowPassword,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledLink,
  StyledOR,
  SubmitButton,
} from "../Login/style";

import google from "../../assets/google.svg";
import apple from "../../assets/apple.png";
import passwordshow from "../../assets/eye.png";

import { CheckedInputWrapper, InputFullName } from "./style";
import { useAuthContext } from "../../context/AuthContext";
import { schema } from "./validation";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Signup = () => {
  const {
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    setToken,
    setUsername,
  } = useAuthContext();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "firstname") setFirstName(value);
    if (id === "lastname") setLastName(value);
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
    if (id === "checked") setChecked(e.target.checked);
  };

  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    schema
      .validate(
        {
          firstname,
          email,
          password,
          lastname,
          checked,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/users`, {
          name: firstname,
          email: email,
          password: password,
        });
        if (res) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          setUsername(res.data.name);
          localStorage.setItem("name", res.data.name);
          setErrors([]);
          setLoading(false);
          setAuthorized(true);
        }
      })
      .catch((e) => {
        const errors = e.inner.reduce((acc, error) => {
          acc[error.path] = error.message;

          return acc;
        }, {});

        setErrors(errors);
        setLoading(false);
      });
  };
  return (
    <>
      <Header form />

      <StyledForm onSubmit={handleSubmit}>
        <Register>Sign up to find work you love</Register>

        <StyledButton>
          <StyledImg src={apple} alt="facebook" facebook={apple} />
          Continue with apple
        </StyledButton>
        <StyledButton facebook={apple}>
          <StyledImg src={google} alt="google" />
          Continue with Google
        </StyledButton>
        <StyledOR>
          <div></div> <span>or</span> <div></div>
        </StyledOR>

        <InputFullName>
          <div>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              onChange={handleChangeInput}
              value={firstname}
              placeholder="Type here"
            />
          </div>

          <div>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              onChange={handleChangeInput}
              value={lastname}
              placeholder="Type here"
            />
          </div>
        </InputFullName>
        {errors && errors.firstname && (
          <ErrorMessage>{errors.firstname}</ErrorMessage>
        )}
        {errors && errors.lastname && (
          <ErrorMessage>{errors.lastname}</ErrorMessage>
        )}
        <InputWrapper>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={handleChangeInput}
            value={email}
            placeholder="Email "
          />
        </InputWrapper>
        {errors && errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        <InputWrapper>
          <label htmlFor="password">Password</label>
          <input
            type={passwordType}
            id="password"
            onChange={handleChangeInput}
            value={password}
            placeholder="Password (8 or more characters)"
          />

          {errors && errors.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}
          <ShowPassword
            src={passwordshow}
            alt="passwordshow"
            className="passwordshow"
            onClick={handlePasswordShow}
          />
        </InputWrapper>

        <CheckedInputWrapper>
          <input
            type="checkbox"
            id="checked"
            onChange={handleChangeInput}
            checked={checked}
          />
          <label htmlFor="checked">
            Yes, I agree to the freelnace Terms of Service
          </label>
        </CheckedInputWrapper>
        {errors && errors.checked && (
          <ErrorMessage>{errors.checked}</ErrorMessage>
        )}
        <SubmitButton type="submit">
          {loading ? "loading..." : "Create My Account"}
        </SubmitButton>

        <AlredyAccount>Already have an account?</AlredyAccount>
        <StyledLink to="/login"> Log In</StyledLink>
      </StyledForm>
      <Footer form />
    </>
  );
};

export default Signup;
