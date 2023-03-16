import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import styled from "styled-components";
import { Link } from "react-router-dom";


const Div = styled.div`
    
cursor:pointer;
`
export default function TemporaryDrawer(props) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 1050 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
        {props.detail.title}
      <Link to={"/JobDetails/" + props.detail.id} >new window</Link>
    
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Div onClick={toggleDrawer("right", true)}>{props.children}</Div>
        <Drawer

          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
