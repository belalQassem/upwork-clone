// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Styledskill } from "../../components/ListOfSkills/style";
// import ImgModal from "../../components/Modals/ImgModal";
// import OverViewModal from "../../components/Modals/OverViewModal";
// import RateModal from "../../components/Modals/RateModal";
// import SkillsModal from "../../components/Modals/SkillsModal";
// import TitleModal from "../../components/Modals/TitleModal";

// const Profile = () => {
//   const [title, setTilte] = useState("");
//   const [overView, setOverView] = useState("");
//   const [rate, setRate] = useState("");
//   const [img, setImg] = useState("");

//   const [skills, setSkills] = useState([]);




//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await axios.get(
//           "http://localhost:3000/personalInformation"
//         );
//         if (res) {
//           setTilte(res.data[0].title);
//           setOverView(res.data[0].overview);
//           setRate(res.data[0].rate);
//           setSkills(res.data[0].skills);
//           setImg(res.data[0].image);



         
          
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, []);

//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>title:{title}</p>
//       <TitleModal />
//       <p>overView:{overView}</p>
//       <OverViewModal />
//       <p>rate:{rate}</p>
//       <RateModal />
//       {skills.map((item) => <Styledskill  key={item.id}>{item.title}</Styledskill>)}
//             <SkillsModal/>
//             <p>img:{img}</p>
// <ImgModal/>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: theme.spacing(2),
  },
  title: {
    fontWeight: "bold",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
  },
}));

const Profile = () => {
  const classes = useStyles();

  const [title, setTitle] = useState("UI/UX Designer");
  const [overview, setOverview] = useState(
    "I am a highly skilled UI/UX designer with over 5 years of experience creating intuitive and visually appealing designs for mobile and web applications."
  );
  const [rate, setRate] = useState("$50/hr");
  const [skills, setSkills] = useState([
    { id: 1, title: "UI Design" },
    { id: 2, title: "UX Design" },
    { id: 3, title: "Mobile Design" },
    { id: 4, title: "Web Design" },
  ]);
  const [openTitleModal, setOpenTitleModal] = useState(false);
  const [openOverviewModal, setOpenOverviewModal] = useState(false);
  const [openRateModal, setOpenRateModal] = useState(false);
  const [openSkillsModal, setOpenSkillsModal] = useState(false);

  const handleTitleSave = (event) => {
    setTitle(event.target.value);
    setOpenTitleModal(false);
  };

  const handleOverviewSave = (event) => {
    setOverview(event.target.value);
    setOpenOverviewModal(false);
  };

  const handleRateSave = (event) => {
    setRate(event.target.value);
    setOpenRateModal(false);
  };

  const handleSkillsSave = (event) => {
    const newSkills = event.target.value.split(",");
    setSkills(
      newSkills.map((skill, index) => ({ id: index + 1, title: skill.trim() }))
    );
    setOpenSkillsModal(false);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={4} alignItems="center">
        <Grid item>
          <Avatar className={classes.avatar} />
        </Grid>
        <Grid item>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Button color="primary" onClick={() => setOpenTitleModal(true)}>
            Edit Title
          </Button>
          <Modal
            className={classes.modal}
            open={openTitleModal}
            onClose={() => setOpenTitleModal(false)}
          >
            <div className={classes.modalContent}>
              <Typography variant="h6" gutterBottom>
                Edit Title
              </Typography>
              <TextField
                fullWidth
                margin="dense"
                label="Title"
                variant="outlined"
                defaultValue={title}
                onChange={(event) => setTitle(event.target.value)}
                />
                <Button color="primary" onClick={handleTitleSave}>
                  Save
                </Button>
                <Button onClick={() => setOpenTitleModal(false)}>Cancel</Button>
              </div>
            </Modal>
            <Typography variant="body1">{overview}</Typography>
            <Button
              color="primary"
              onClick={() => setOpenOverviewModal(true)}
              style={{ marginTop: "1rem" }}
            >
              Edit Overview
            </Button>
            <Modal
              className={classes.modal}
              open={openOverviewModal}
              onClose={() => setOpenOverviewModal(false)}
            >
              <div className={classes.modalContent}>
                <Typography variant="h6" gutterBottom>
                  Edit Overview
                </Typography>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Overview"
                  variant="outlined"
                  multiline
                  rows={4}
                  defaultValue={overview}
                  onChange={(event) => setOverview(event.target.value)}
                />
                <Button color="primary" onClick={handleOverviewSave}>
                  Save
                </Button>
                <Button onClick={() => setOpenOverviewModal(false)}>
                  Cancel
                </Button>
              </div>
            </Modal>
            <Typography variant="body1">Hourly Rate: {rate}</Typography>
            <Button
              color="primary"
              onClick={() => setOpenRateModal(true)}
              style={{ marginTop: "1rem" }}
            >
              Edit Rate
            </Button>
            <Modal
              className={classes.modal}
              open={openRateModal}
              onClose={() => setOpenRateModal(false)}
            >
              <div className={classes.modalContent}>
                <Typography variant="h6" gutterBottom>
                  Edit Rate
                </Typography>
                <TextField
                  fullWidth
                  margin="dense"
                  label="Rate"
                  variant="outlined"
                  defaultValue={rate}
                  onChange={(event) => setRate(event.target.value)}
                />
                <Button color="primary" onClick={handleRateSave}>
                  Save
                </Button>
                <Button onClick={() => setOpenRateModal(false)}>Cancel</Button>
              </div>
            </Modal>
            <Typography variant="body1">
              Skills:{" "}
              {skills.map((skill) => (
                <span key={skill.id}>{skill.title}, </span>
              ))}
            </Typography>
            <Button
              color="primary"
              onClick={() => setOpenSkillsModal(true)}
              style={{ marginTop: "1rem" }}
              >
              Edit Skills
              </Button>
              <Modal
              className={classes.modal}
              open={openSkillsModal}
              onClose={() => setOpenSkillsModal(false)}
              >
              <div className={classes.modalContent}>
              <Typography variant="h6" gutterBottom>
              Edit Skills
              </Typography>
              <TextField
              fullWidth
              margin="dense"
              label="Skills"
              variant="outlined"
              multiline
              rows={4}
              defaultValue={skills.map((skill) => skill.title).join(", ")}
              onChange={(event) =>
              setSkills(
              event.target.value.split(",").map((title) => ({
              id: Math.floor(Math.random() * 1000000),
              title: title.trim(),
              }))
              )
              }
              />
              <Button color="primary" onClick={handleSkillsSave}>
              Save
              </Button>
              <Button onClick={() => setOpenSkillsModal(false)}>Cancel</Button>
              </div>
              </Modal>
              </div>
              );
              }
              export default Profile;
      
