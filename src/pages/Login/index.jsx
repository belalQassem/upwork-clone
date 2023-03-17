import React, { useState } from "react";
import axios from "axios";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.png";
import passwordshow from "../../assets/eye.png";
import { useAuthContext } from "../../context/AuthContext";
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
} from "./style";
import { schema } from "./validation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Login() {
  const { loading, setLoading, errors, setErrors, setToken, setAuthorized, setUsername } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");


  const handlePasswordShow = (e) => {
    e.preventDefault();
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "username") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await schema.validate({ email, password }, { abortEarly: false });

      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users?email=${email}&password=${password}`);

      if (res.data.length > 0) {
        const user = res.data[0];
        setUsername(user.name);
        setToken(user.token);
        localStorage.setItem("token", user.token);
        setUsername(user.name);
        localStorage.setItem("name", user.name);
        setErrors([]);
        setLoading(false);
        setAuthorized(true);
      } else {
        setErrors({ login: "email or password not correct" });
        setLoading(false);
        
      }
    } catch (e) {
      const errors = e.inner.reduce((acc, error) => {
        acc[error.path] = error.message;
        return acc;
      }, {});
      setErrors(errors);
      setLoading(false);
    }
  };


  return (
    <>
      <Header form />
      <StyledForm onSubmit={handleSubmit}>
        <Register>Log in to Freelance Platform</Register>
        <InputWrapper>
          <label htmlFor="username">Username or Email</label>
          <input
            type="email"
            id="username"
            onChange={handleChangeInput}
            value={email}
            placeholder="Email or phone"
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
            placeholder="Type Here"
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

        <SubmitButton type="submit">
          {loading ? "loading..." : "  Log In"}
        </SubmitButton>

        <StyledOR>
          <div></div> <span>or</span> <div></div>
        </StyledOR>

        <StyledButton facebook={apple}>
          <StyledImg src={google} alt="google" />
          Continue with Google
        </StyledButton>

        <StyledButton>
          <StyledImg src={apple} alt="facebook" facebook={apple} />
          Continue with apple
        </StyledButton>

        <AlredyAccount>Don’t have an Freelance account?</AlredyAccount>
        <StyledLink to="/signup"> Sign Up now</StyledLink>
      </StyledForm>
      <Footer form />
    </>
  );
}

export default Login;
