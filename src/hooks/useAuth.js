import { useState } from "react";

const useAuth = () => {
  const searchedValues = JSON.parse(localStorage.getItem("searchValues")) || [];

  const [loading, setLoading] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState("");
  const [username, setUsername] = useState("");
  const [searchValue, setSearchValue] = useState(searchedValues);
  const[img,setImg] =useState("");
  

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setToken("");
    setUsername("");
    setAuthorized(false);
  };
  

  return {
    authorized,
    setAuthorized,
    loading,
    setLoading,
    errors,
    setErrors,
    token,
    setToken,
    username,
    setUsername,
    logout,
    searchValue,
    setSearchValue,
    img,
    setImg
  };
};

export default useAuth;
