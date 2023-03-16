import {
  AccountIMg,
  Head,
  Online,
  Profilediv,
  StyledBoxes,
  Stylednav,
  Stylednotifecation,
} from "./style";
import NavList from "./NavList";
import NaveIcons from "./NaveIcons";
import { useState } from "react";
import Logout from "../Logout";
import Searchbox from "../Searchbox";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function Header({ form }) {
  const [showDiv, setShowDiv] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const { img } = useAuthContext();
  const handleShow = () => {
    setShowDiv(!showDiv);
  };
  const handleOnlineClick = () => {
    setIsOnline(true);
  };

  const handleInvisibleClick = () => {
    setIsOnline(false);
  };

  const name = localStorage.getItem("name");

  if (form) {
    return (
      <Stylednav>
        <Head>upwork</Head>
      </Stylednav>
    );
  } else {
    return (
      <Stylednav>
        <Link to={"/"}><Head>upwork</Head></Link>
        <StyledBoxes>
          <NavList />
          <Stylednotifecation>
            <Searchbox width="300px" />
            <NaveIcons />
            <AccountIMg>
              <img src={img} alt="profile" onClick={handleShow} />
            </AccountIMg>
            {showDiv && (
              <Profilediv>
                <img src={img} alt="profile" />

                <h2>{name}</h2>
                <span>Freelancer</span>
                <div>
                  <Online isOnline={isOnline} onClick={handleOnlineClick}>
                    Online
                  </Online>
                  <Online isOnline={!isOnline} onClick={handleInvisibleClick}>
                    Invisible
                  </Online>
                </div>
                <ul>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      data-name="Layer 1"
                      viewBox="0 0 24 24"
                      style={{ verticalAlign: "middle", width: "20px" }}
                      role="img"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="3.5"
                        fill="none"
                        vector-effect="non-scaling-stroke"
                        stroke="var(--icon-color, #001e00)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                      ></circle>
                      <path
                        fill="none"
                        vector-effect="non-scaling-stroke"
                        stroke="var(--icon-color, #001e00)"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M18.25 12.62v-1.24h0l2.36-2a9 9 0 00-2.18-3.67l-2.89 1.1h0a6.89 6.89 0 00-.88-.5h0l-.52-3a8.62 8.62 0 00-4.28 0l-.52 3h0a6.89 6.89 0 00-.88.5l-2.89-1.1a9 9 0 00-2.18 3.67l2.36 2a6.22 6.22 0 000 1.22l-2.36 2a9 9 0 002.18 3.67l2.89-1.1a6.89 6.89 0 00.88.5h0l.52 3a8.62 8.62 0 004.28 0l.52-3h0a6.89 6.89 0 00.88-.5h0l2.89 1.1a9 9 0 002.18-3.67l-2.36-2z"
                      ></path>
                    </svg>
                    Settings
                  </li>
                  <Logout />
                </ul>
              </Profilediv>
            )}
          </Stylednotifecation>
        </StyledBoxes>
      </Stylednav>
    );
  }
}
