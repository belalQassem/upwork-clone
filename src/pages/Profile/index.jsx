import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer/index";
import ImgModal from "../../components/Modals/ImgModal/ImgModal";
import OverViewModal from "../../components/Modals/OverViewModal";
import RateModal from "../../components/Modals/RateModal";
import SkillsModal from "../../components/Modals/SkillsModal";
import TitleModal from "../../components/Modals/TitleModal";
import { Container, OverView, Title, Hr, Rate, SKILLS,Span } from './style'
import ProfileImage from "./ProfileImage/ProfileImage";
import { Styledskill } from "../../components/ListOfSkills/style";
const Profile = () => {
  const [title, setTilte] = useState("");
  const [overView, setOverView] = useState("");
  const [rate, setRate] = useState("");
  const [setImg] = useState("");

  const [skills, setSkills] = useState([]);




  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/personalInformation`
        );
        if (res) {
          setTilte(res.data[0].title);
          setOverView(res.data[0].overview);
          setRate(res.data[0].rate);
          setSkills(res.data[0].skills);
          setImg(res.data[0].image);





        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [setImg]);

  return (
    <div>
      <Header />
      <Container>
        <ProfileImage />
        <ImgModal />
        <Title>{title}</Title>
        <TitleModal />
        <OverView>{overView}</OverView>
        <OverViewModal />
        <Hr />
        <Rate>${rate}</Rate>
        <RateModal />
        <SkillsModal />
        <Span>skills</Span>
        <SKILLS>
              <SkillsModal />
              {skills.map((item) => (
                <Styledskill key={item.id}>{item.title}</Styledskill>
              ))}
        </SKILLS>
      </Container>
      <Footer />
    </div>
  );
};
export default Profile;


