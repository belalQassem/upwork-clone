import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Jobtitle,
  Jobspeciality,
  JobDetailCard,
  Span,
  Jobdescription,
  Right,
  Left,
  JobStatus,
} from "./style";
import {  Divider } from "@mui/material";

const JobdetailsCard = () => {
  const { id } = useParams();
  const [jobdetails, setJobDetails] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/jobs/${id}`);
        if (res) {
          setJobDetails(res.data);
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  return (
    <JobDetailCard>
      <Right>
        <Jobtitle>{jobdetails.title}</Jobtitle>
        <Jobspeciality>{jobdetails.speciality}</Jobspeciality>
        <Span>Posted {jobdetails.posted}</Span>
        <Span>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            viewBox="0 0 14 14"
            width="18px"
            style={{
              verticalAlign: "middle",
              marginRight: "6px",
            }}
            fill="#1f57c3"
            role="img"
          >
            <path d="M10.8 2.692C10.214.93 8.439-.188 6.558.025c-1.062.12-1.961.566-2.631 1.384-.866 1.058-1.17 2.244-.722 3.569.266.782.649 1.511 1.063 2.225.758 1.308 1.618 2.547 2.529 3.754l.199.261c.029-.034.049-.056.065-.077a39.597 39.597 0 002.367-3.432c.458-.752.888-1.518 1.216-2.332.153-.381.287-.768.334-1.174.061-.517-.016-1.021-.178-1.511zM6.982 5.611c-.955 0-1.699-.736-1.699-1.684 0-.946.748-1.682 1.707-1.681.979.002 1.723.728 1.723 1.682.002.958-.745 1.683-1.731 1.683zm3.248 4.078c2.23.383 3.77 1.138 3.77 2.02C14 12.973 10.866 14 7 14c-3.867 0-7-1.027-7-2.291 0-.881 1.533-1.635 3.756-2.018.324.49.678.996 1.059 1.52-.883.128-1.578.313-2.004.494.733.311 2.19.659 4.189.659 2 0 3.456-.349 4.189-.659-.428-.184-1.127-.369-2.017-.498.375-.516.728-1.021 1.058-1.518z"></path>
          </svg>
          Worldwide
        </Span>

        <Divider variant="fullWidth" />
        <Jobdescription>{jobdetails.description}</Jobdescription>
        <Span>Salary - 80k INR/month</Span>
        <Span>Hours - normal IST office hours</Span>
        <Span>Holidays - 10 public holidays per year</Span>
        <Span>Annual Leaves - 20 days annual leave per year</Span>
        <Span>
          We are looking for a Senior React.js developer to join the team to
          lead UI development on a SaaS application.
        </Span>
        <Span>Must</Span>
        <Span>1. Be able to manage/deliver large/complex projects.</Span>
        <Span>
          2. Must have experience in developing dynamic UI's where everything is
          API driven and also developing and using reusable components.
        </Span>
        <Span>
          3. Have experience in developing complex CRM/ERP solutions where we
          are using quotations, invoices, sales orders, stock/inventory
          management and warehouses, purchasing/PO's etc.
        </Span>

        <Divider variant="fullWidth" />

        <JobStatus>
          <div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                style={{
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
                width={"18px"}
                role="img"
              >
                <g fillRule="evenodd">
                  <path d="M7 0a7 7 0 100 14A7 7 0 007 0m0 1.05A5.957 5.957 0 0112.95 7 5.957 5.957 0 017 12.95 5.957 5.957 0 011.05 7 5.957 5.957 0 017 1.05"></path>
                  <path d="M7.5 2.106a.5.5 0 11-1 0 .5.5 0 011 0m-2.514.406a.5.5 0 11-.867.5.5.5 0 01.867-.5M3.012 4.12a.5.5 0 11-.5.866.5.5 0 01.5-.866M2.106 6.5a.5.5 0 110 1 .5.5 0 010-1m.406 2.514a.5.5 0 11.5.867.5.5 0 01-.5-.867m1.608 1.974a.5.5 0 11.866.5.5.5 0 01-.866-.5m2.38.906a.5.5 0 111 0 .5.5 0 01-1 0m2.514-.406a.5.5 0 11.867-.5.5.5 0 01-.867.5m1.974-1.608a.5.5 0 11.5-.866.5.5 0 01-.5.866m.906-2.38a.5.5 0 110-1 .5.5 0 010 1m-.406-2.514a.5.5 0 11-.5-.867.5.5 0 01.5.867M9.88 3.012a.5.5 0 11-.866-.5.5.5 0 01.866.5"></path>
                  <polygon points="6.5 4.16 6.5 6.969 4.925 9.697 5.791 10.197 7.492 7.25 7.5 7.25 7.5 4.16"></polygon>
                </g>
              </svg>
              {jobdetails.hoursPerWeek}
            </p>
            <span>Hourly</span>
          </div>
          <div>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                viewBox="0 0 14 14"
                style={{
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
                width={"18px"}
                role="img"
              >
                <path d="M13 1h-2V0h-1v1H4V0H3v1H1c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1zm0 12H1V5h12v8z"></path>
                <path d="M5.1 11.1c1 0 1.7-.6 1.7-1.6 0-.9-.7-1.4-1.5-1.4-.3 0-.6.2-.8.4 0-.4.2-1 .8-1 .4 0 .6.1.9.3l.5-.8c-.4-.3-.8-.5-1.4-.5-1.4 0-2 1-2 2.4 0 .8.2 1.3.5 1.6.3.4.7.6 1.3.6zm0-.9c-.4 0-.6-.3-.6-.6 0-.4.2-.6.6-.6.4 0 .6.2.6.6 0 .3-.2.6-.6.6zm3.6.2h1V9.3h1.1v-1H9.7V7.2h-1v1.1H7.6v1h1.1v1.1z"></path>
              </svg>
              {jobdetails.estimatedTime}
            </p>
            <span>Project Length
</span>

          </div>
          <div>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14"   style={{
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
                width={"18px"} role="img"><path d="M12.8 8.4l-1.3-2.3v-.8C11.6 2.4 9.2 0 6.3 0S1.1 2.4 1.1 5.3c0 1.4.5 2.6 1.4 3.5v4.5c0 .4.3.7.7.7h5.3c.4 0 .7-.3.7-.7v-1h1.7c.4 0 .7-.3.7-.7V9h.9c.4 0 .5-.3.3-.6zM8.7 5.3v.4l.7.4c-.2.5-.4.9-.8 1.3L7.9 7c-.2.2-.5.3-.8.4v.8c-.2.1-.5.1-.8.1-.3 0-.5 0-.8-.1v-.8c-.2-.1-.5-.2-.7-.4l-.7.4c-.4-.4-.7-.8-.8-1.3l.7-.4v-.9l-.7-.4c.1-.5.4-1 .8-1.3l.7.4c.2-.2.5-.3.7-.4v-.8c.3-.1.5-.1.8-.1.3 0 .5 0 .8.1v.8c.3.1.5.2.8.4l.7-.4c.4.4.6.8.8 1.3l-.7.4v.5z"></path><circle cx="6.3" cy="5.3" r=".9"></circle></svg>
            {jobdetails.expertiseLevel}
            </p>
            <p>I am willing to pay higher rates for the most experienced freelancers
</p>
          </div>

          <div>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 14 14"   style={{
                  verticalAlign: "middle",
                  marginRight: "6px",
                }}
                width={"18px"} role="img"><path d="M8.971 1.332H5.64V0h3.331v1.332zm4.33 6.675a5.995 5.995 0 01-11.991 0c0-1.432.504-2.747 1.347-3.778l-.544-.542-.471.471L.7 3.216l.47-.471.942-.941.47-.472.942.943-.471.47.553.552a5.97 5.97 0 013.7-1.283 5.996 5.996 0 015.995 5.993zm-2.397-.601H7.906V4.411H6.704v4.194h4.201V7.406z"></path></svg>
                {jobdetails.hourlyRate}
            </p>
            <p
            >Hourly</p>
          </div>
        </JobStatus>
      </Right>
      <Left></Left>
    </JobDetailCard>
  );
};

export default JobdetailsCard;
