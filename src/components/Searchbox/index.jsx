import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Iconsearch, Search } from "./style";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Searchbox = ({ width }) => {
  const [search, setSearch] = useState("");
  const [allJobs, setAllJobs] = useState([]);
  const { searchValue, setSearchValue } = useAuthContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/jobs`);

        if (res) {
          setAllJobs(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/filter");
    localStorage.setItem("search", search);
    const searched = [...searchValue, search];
    setSearchValue((prevState) => [...prevState, search]);
    localStorage.setItem("searchValues", JSON.stringify(searched));
  };

  return (
    <Search width={width} onSubmit={handleSubmit}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allJobs.map((job) => job.title)}
        renderInput={(params) => (
          <TextField
            // sx={{ width: width, marginTop: "6px" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderTopLeftRadius: "8px",
                borderBottomLeftRadius: "8px",
                padding: "0",
                border: "none",
                width: width,
              },

              "& .MuiOutlinedInput-root:active": {
                border: "none",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid #e4ebe4",
                width: width,
              },
            }}
            {...params}
            label="Search for Job..."
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
      <Iconsearch>
        <SearchIcon
          sx={{ width: "40px", margin: "-8px", color: "white" }}
        />
      </Iconsearch>
    </Search>
  );
};

export default Searchbox;
