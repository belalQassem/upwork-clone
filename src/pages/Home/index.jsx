import React from "react";
import { Container } from "../../global/style";
import Header from "../../components/Header";
import TimeStatus from "../../components/HandelingTime";
import JobsLiked from "../../components/JobsLiked";
import Footer from "./../../components/Footer/index";
import ScrollButton from "../../components/ScrollButton";
import PersonalInformation from "../../components/PersonalInformation";
import { useAuthContext } from "./../../context/AuthContext";
import Searchbox from "../../components/Searchbox";

const Home = () => {
  const { searchValue } = useAuthContext();
  return (
    <>
      <Header />
      <Container>
        <div>
          <TimeStatus />
          <Searchbox width="795px" />
          <div>
            Recent Searches:{" "}
            {searchValue.slice(-3).map((value, index) => (
              <span key={index} style={{ textDecoration: "underline" }}>
                {value}
              </span>
            ))}
          </div>
          <JobsLiked />
          <ScrollButton />
        </div>
        <PersonalInformation />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
