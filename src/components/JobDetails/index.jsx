import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCard from "../JobCard";
import styled from "styled-components";
import { Divider } from "@mui/material";

function JobDetails() {
  const [job, setJob] = useState([]);
 

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/jobs`
        );
        if (res) {
          setJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <>
      <Text>
        Browse jobs that match your experience to a client's hiring preferences.
        Ordered by most relevant.
      </Text>

      <JobCard Jobdetails={job} />
      <Divider variant="fullWidth" />

    </>
  );
}

export const Text = styled.span`
  font-size: 14px;
  color: #001e00;
  margin-bottom: 20px;
`;

export default JobDetails;
