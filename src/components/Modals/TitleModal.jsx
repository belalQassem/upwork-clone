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
  p: 10,
};

const TitleModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [newTitle, setNewTitle] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [skills, setSkills] = useState([]);
  const [img, setImg] = useState("");


  const [navigator, setNavigator] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/personalInformation`
        );
        if (res) {
          setNewTitle(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
                  setImg(res.data[0].image);


        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleChangeInput = (e) => {
    const { value } = e.target;
    setNewTitle(value);
  };

  const handleUpdateTitle = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const res = await axios.put(
          `${process.env.REACT_APP_API_URL}/personalInformation/1`,
          {
            title: newTitle,
            overview: overView,
            rate: rate,
            skills:skills,
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
            style={{ width:"30px",height:"30px",cursor:"pointer",position:'absolute',top:'290px',right:"400px"}}
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Your Title
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 4,mb:5 }}>
            Your title: Enter a single sentence description of your professional
            skills/experience (e.g. Expert Web Designer with Ajax experience)
          </Typography>
          <form onSubmit={handleUpdateTitle}>
            <Input type="text" value={newTitle} onChange={handleChangeInput} />
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

export default TitleModal;
