import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import JobCard from "../../components/JobCard";

const Filter = () => {
  const [filterJob, setFilterJob] = useState([]);
  const [searchValue] = useState(
    localStorage.getItem("search")
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/jobs?title_like=${searchValue}`
        );

        if (res) {
          setFilterJob(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [searchValue]);

  return (
    <>
      <JobCard Jobdetails={filterJob} />
    </>
  );
};

export default Filter;
