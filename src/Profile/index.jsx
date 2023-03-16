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
