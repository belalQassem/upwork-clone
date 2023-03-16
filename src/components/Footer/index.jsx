import React from "react";
import face from "../../assets/face.png";
import youtube from "../../assets/youtube.png";
import linkedin from "../../assets/linkedin.png";
import insta from "../../assets/insta.png";
import tweet from "../../assets/tweet.png";
import apple from "../../assets/apple1.png";
import android from "../../assets/android.png";

import { Foot2, Icon, Icons, StyledFooter, Ul } from "./style";

const Footer = ({ form }) => {
  if (form) {
    return (
      <StyledFooter>
        <Foot2>&copy; 2015 - 2023 Upwork® Global Inc. • Privacy Policy</Foot2>
      </StyledFooter>
    );
  }
  return (
    <StyledFooter>
      <Ul>
        <div>
          <ul>
            <li>About Us</li>
            <li>Feedback</li>
            <li>Community</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Trust, Safety & Security</li>
            <li>Help & Support</li>
            <li>Freelance Foundation</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>CA Notice at Collection</li>
            <li>Cookie Settings</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Accessibility</li>
            <li>Desktop App</li>
            <li>Cookie Policy</li>
            <li>Enterprise Solutions</li>
          </ul>
        </div>
      </Ul>
      <Icons>
        <div>
          Follow Us
          <Icon src={face} alt="face" />
          <Icon src={tweet} alt="tweet" />
          <Icon src={linkedin} alt="linkedin" />
          <Icon src={insta} alt="insta" />
          <Icon src={youtube} alt="youtube" />
        </div>
        <div>
          Mobile App
          <Icon src={apple} alt="apple" />
          <Icon src={android} alt="apple" />
        </div>
      </Icons>
      <Foot2>&copy; 2015 - 2023 Freelance Platform® Global Inc.</Foot2>
    </StyledFooter>
  );
};

export default Footer;
