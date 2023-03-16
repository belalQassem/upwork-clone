import QuestionMarkOutlinedIcon from "@mui/icons-material/QuestionMarkOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { IconContainer,Icons } from "./style";


const NaveIcons = () => {
  return (
    <Icons>
      <IconContainer data-text="Help">
        <QuestionMarkOutlinedIcon />
      </IconContainer>

      <IconContainer data-text="Direct Contracts">
        <SendOutlinedIcon />
      </IconContainer>

      <IconContainer data-text="Notifications">
        <NotificationsNoneOutlinedIcon />
      </IconContainer>
    </Icons>
  );
};

export default NaveIcons;
