import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContext";
import {StyledImgPROFILE} from './style'

const ProfileImage = ({ click }) => {
  const [loading, setLoading] = useState(true);
  const { img, setImg } = useAuthContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/personalInformation`
        );
        if (res.data[0].image) {
          setImg(res.data[0].image);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [setImg]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!img) {
    return <StyledImgPROFILE src="/default-avatar.png" alt="default avatar" onClick={click} />;
  }

  return <StyledImgPROFILE src={img} alt="profile" onClick={click} />;
};

export default ProfileImage;
