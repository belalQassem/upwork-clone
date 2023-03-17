import React, { useEffect, useState } from "react";
import Technology from "../ListOfSkills";
import { useJobContext } from "./../../context/jobContext";
import Canvas from "../../components/Canvas";

import {
  Cardjob,
  JobDescription,
  Jobdetail,
  Jobdetail2,
  Span,
  ToggleSaveBtn,
  P
} from "./style";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnTwoTone";
import Stars from "../Stars";

const JobCard = ({ Jobdetails }) => {
  const { state, addToSaved, removeFromSaved } = useJobContext();

  const [expandedJobId, setExpandedJobId] = useState(null);

  useEffect(() => {
    localStorage.setItem("savedJobs", JSON.stringify(state.jobs));
    localStorage.setItem("count", state.count);
  }, [state.jobs, state.count]);

  const handleToggleSaved = (detail) => {
    const isSaved = state.jobs.find((item) => item.id === detail.id);
    isSaved ? removeFromSaved(detail.id) : addToSaved(detail);
  };

  const toggleShow = (id) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <>
      {Jobdetails?.map((detail) => (
        <Cardjob key={detail.id}>
          <Canvas detail={detail}>
            <P>{detail.title}</P>
            <Jobdetail>
              {detail.hourlyRate} - {detail.expertiseLevel} - Est.
              {detail.estimatedTime},{detail.hoursPerWeek} - Budget:
              {detail.budget} - Posted in:{detail.posted}
            </Jobdetail>
            </Canvas>
            <JobDescription>
              {expandedJobId === detail.id
                ? detail.description
                : `${detail.description.slice(0, 200)}... `}
              {detail.description.length > 200 && (
                <Span onClick={() => toggleShow(detail.id)}>
                  {expandedJobId === detail.id ? "less" : "more"}
                </Span>
              )}
            </JobDescription>
            <Technology technologiesOfItem={detail?.technologies} />
          <p>
            <span>Proposals:</span> {detail.proposals}
          </p>

          <Jobdetail2>
            {detail.paymentVerified ? (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="blue"
                  style={{
                    width: "16px",
                    verticalAlign: "middle",
                    paddingRight: "6px",
                  }}
                  viewBox="0 0 14 14"
                  role="img"
                >
                  <path d="M13.72 7.03c.45-.56.34-1.39-.24-1.82l-.55-.41c-.34-.25-.53-.66-.51-1.08l.03-.68c.03-.72-.53-1.32-1.25-1.33h-.68c-.42 0-.81-.22-1.05-.57L9.11.57c-.39-.6-1.2-.75-1.79-.33l-.55.4c-.34.24-.79.3-1.18.15L4.95.55c-.67-.25-1.41.11-1.64.79l-.21.65c-.14.4-.46.71-.87.82l-.65.18C.89 3.19.5 3.92.71 4.6l.21.65c.13.41.04.85-.22 1.18l-.42.54c-.45.56-.34 1.39.24 1.81l.55.41c.34.25.53.66.51 1.08l-.03.68c-.03.72.54 1.32 1.25 1.33h.68c.42 0 .81.22 1.05.57l.37.57c.39.6 1.21.75 1.79.33l.55-.4c.34-.25.78-.31 1.18-.16l.64.24c.67.25 1.41-.1 1.64-.79l.21-.65c.13-.4.45-.71.86-.82l.65-.17c.69-.19 1.09-.92.87-1.61l-.21-.65c-.13-.4-.05-.85.22-1.18l.42-.53zM6.06 9.84L3.5 7.27l1.23-1.23 1.33 1.33 3.21-3.21L10.5 5.4 6.06 9.84z"></path>
                </svg>
                Payment Verified <Stars filled />
              </span>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 14 14"
                  role="img"
                  fill="grey"
                  style={{
                    width: "16px",
                    verticalAlign: "middle",
                    paddingRight: "6px",
                  }}
                >
                  <path d="M12.6 7.181V1.4c0-.771-.63-1.4-1.4-1.4H1.399C.63 0 0 .629 0 1.4v7c0 .771.63 1.4 1.399 1.4h4.918A3.85 3.85 0 1012.6 7.181zM11.2 1.4v1.401H1.399V1.4H11.2zm-4.477 7H1.399V4.901H11.2v1.548a3.84 3.84 0 00-1.051-.149 3.845 3.845 0 00-3.426 2.1zm5.527 2.917l-.934.933-1.167-1.166-1.167 1.166-.932-.933 1.166-1.167L8.05 8.983l.932-.933 1.167 1.168 1.167-1.168.934.934-1.168 1.167 1.168 1.166z"></path>
                </svg>
                Payment Unverified <Stars />
              </span>
            )}
            <span>
              {" "}
              {detail.amountSpent}
              spent
            </span>
            <span>
              {" "}
              <LocationOnOutlinedIcon
                sx={{ verticalAlign: "middle", width: "25px" }}
              />
              {detail.location}
            </span>
          </Jobdetail2>
      
        
        <ToggleSaveBtn  onClick={() => handleToggleSaved(detail)}>
            {state.jobs.find((item) => item.id === detail.id) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="20px"
                
              >
                <path
                  fill-rule="evenodd"
                  d="M7 3.646C7 1.632 5.433 0 3.5 0S0 1.632 0 3.646c0 .813.256 1.566.689 2.172L7 14l6.311-8.182A3.73 3.73 0 0014 3.646C14 1.632 12.433 0 10.5 0S7 1.632 7 3.646"
                  fill="green"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                role="img"
                width="20px"
              >
                <path
                  fill-rule="evenodd"
                  d="M3.938 1.683c-1.206 0-2.188.999-2.188 2.227 0 .487.153.95.441 1.339l4.81 5.996 4.829-6.021c.268-.364.421-.827.421-1.314 0-1.228-.982-2.227-2.188-2.227-1.206 0-2.187.999-2.187 2.227h-1.75c0-1.228-.982-2.227-2.188-2.227zM7.001 14L.785 6.252A3.888 3.888 0 010 3.91C0 1.754 1.767 0 3.938 0c1.236 0 2.34.568 3.063 1.455A3.94 3.94 0 0110.063 0c2.171 0 3.938 1.754 3.938 3.91 0 .839-.265 1.641-.766 2.316L7.001 14z"
                ></path>
              </svg>
            )}
          </ToggleSaveBtn>
        </Cardjob>
      ))}
    </>
  );
};

export default JobCard;
