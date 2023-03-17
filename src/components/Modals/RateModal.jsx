import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { Navigate } from "react-router-dom";
import {Input,Button} from './ImgModal/style'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 8,
};

const RateModal = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
      handleSavedRateStatus(newRate)
      setOpen(true);
   
  };


  const handleSavedRateStatus = (value) => {
    setFee(value * (20 / 100));
    setReceive(value - value * (20 / 100));
  }

  const [newRate, setNewRate] = useState(0);

  const [fee, setFee] = useState(0);
  const [receive, setReceive] = useState(0);

  const [title, setTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [img, setImg] = useState("");

  const [skills, setSkills] = useState([]);

  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}personalInformation`
        );
        if (res) {
          setNewRate(res.data[0].rate);
          setOverView(res.data[0].overview);
          setTitle(res.data[0].title);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);

        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    if (id === "newRate") {
      setNewRate(value);
      setFee(value * (20 / 100));
      setReceive(value - value * (20 / 100));
    }
    if (id === "receive") setReceive(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/personalInformation/1`,
          {
            rate: newRate,
            overview: overView,
            title: title,
            skills: skills,
          image:img

          }
        );
        if (res) {
          setNavigator(true);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
       <svg
            onClick={handleOpen}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            fill="#3c8224"
            viewBox="0 0 14 14"
            role="img"
            style={{ width:"30px",height:"30px",cursor:"pointer",position:'absolute',top:'290px',right:"150px"}}
          >
            <path
              fillRule="evenodd"
              d="M0 11.044V14h2.956l8.555-8.633L8.556 2.41 0 11.044zm13.767-7.933a.752.752 0 000-1.089L11.977.233a.752.752 0 00-1.088 0l-1.4 1.4 2.955 2.956 1.323-1.478z"
            ></path>
          </svg>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Edit Your Rate
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2,mb:3 }}>
          Please note that your new hourly rate will only apply to new contracts. The Upwork Service Fee is 20% when you begin a contract with a new client. Once you bill over $500 with your client, the fee will be 10%.
          </Typography>
          <form onSubmit={handleUpdateTitle}>
            Hourly Rate
            Total amount the client will see
            
            <Input
              type="text"
              value={newRate}
              onChange={handleChangeInput}
              id="newRate"
            />
            $
            <br/>
            20% Upwork Service Fee
            <Input
              type="text"
              value={fee}
              onChange={handleChangeInput}
              id="fee"
              disabled
            />
            $
            <br/>
            You'll Receive
            The estimated amount you'll receive after service fees
            <Input
              type="text"
              value={receive}
              onChange={handleChangeInput}
              id="receive"
            />
            $

            <Button type="submit">save</Button>
            <Button type="button" onClick={handleClose}>
              cancel
            </Button>
          </form>
        </Box>
      </Modal>
      {navigator ? <Navigate to={"/redirect"} /> : ""}
    </div>
  );
};

export default RateModal;
