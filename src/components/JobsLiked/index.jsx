import React from "react";
import BasicTabs from "../JobsTabs";
import { Jobs, Title } from "./style";

const JobsLiked = () => {
  return (
    <Jobs>
      <Title>Jobs you might like</Title>
      <BasicTabs />
    </Jobs>
  );
};

export default JobsLiked;
