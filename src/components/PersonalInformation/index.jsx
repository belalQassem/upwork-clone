import React, { useEffect } from "react";
import { Box, Info, MoreInfo, Profile } from "./style";
import SliderSizes from "../SliderSizes";
import { Divider } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import axios from "axios";
import { useAuthContext } from "../../context/AuthContext";
const PersonalInformation = () => {
  const name = localStorage.getItem("name");

  const { img, setImg } = useAuthContext();
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/personalInformation`
        );
        if (res) {
          setImg(res.data[0].image)
          console.log(res.data[0].image)

        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setImg]);

  return (
    <Box>
      <Profile>
        <img src={img} alt="profile" />

        <h2>{name}</h2>
        <span>Front-End Development</span>
        <p>
          Profile Completeness:
        </p>
        <p>
          <SliderSizes />
        </p>

        <Divider variant="fullWidth" />
        <div>39 Available Connects</div>
      </Profile>

      <Info>
        <li>
          <p>
            Availability Badge
            <span>avilable</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Hours per week
            <span>More than 30 hrs/week</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Profile Visibility
            <span>Public</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>

        <li>
          <p>
            Job Preference
            <span>No preference set</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>
        <Divider variant="fullWidth" />
        <li>
          <p>
            My Categories
            <span>Web development</span>
          </p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
        </li>
      </Info>

      <MoreInfo>
        <p>
          <span>Upwork Academy</span>
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </p>{" "}
        <Divider variant="fullWidth" />
        <p>
          <span> Direct Contracts</span>
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </p>{" "}
        <Divider variant="fullWidth" />
        <p>
          <span>Get Paid</span>
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </p>{" "}
        <Divider variant="fullWidth" />
        <p>
          <span> Community & Forums</span>{" "}
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </p>
        <Divider variant="fullWidth" style={{ verticalAlign: "middle" }} />
        <p>
          <span> Help Center</span>{" "}
          <ArrowForwardIosIcon style={{ verticalAlign: "middle" }} />
        </p>
      </MoreInfo>
    </Box>
  );
};

export default PersonalInformation;
