import { Button, Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import JobCard from "../JobCard";
import { Text } from "../JobDetails";

const MostRecent = () => {
  const [mostJob, setMostJob] = useState([]);
  const [count, setCount] = useState(3);

  const handleLoadJobs = () => {
    setCount((prevCount) => prevCount + 3);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/jobs?_sort=id&_order=desc_page=1&_limit=${count}`
        );
        if (res) {
          setMostJob(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [count]);

  return (
    <>
      <Text>
        Browse the most recent jobs that match your skills and profile
        description to the skills clients are looking for.
      </Text>

      <JobCard Jobdetails={mostJob} />
      <Divider variant="fullWidth" />
      <Button
        onClick={handleLoadJobs}
        variant="outlined"
        color="success"
        sx={{ borderRadius: "6px"}}
      >
        load more jobs
      </Button>
    </>
  );
};

export default MostRecent;
