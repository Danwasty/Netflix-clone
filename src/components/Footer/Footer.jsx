import React, { useEffect, useState } from "react";
import "./Footer.css";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
import play_store from "../../assets/play_store.png";
import app_store from "../../assets/app_store.png";

const Footer = () => {
  const [year, setYear] = useState("");

  useEffect(() => {
    const date = new Date();
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relations</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preferences</li>
        <li>Gift Cards</li>
        <li>Terms of Use</li>
        <li>Cooporate Information</li>
        <li>Meida Centre</li>
        <li>Privacy</li>
        <li>Contact Us</li>
      </ul>
      <div className="copyright-info">&copy; 1997- {year} UflixCinema, Inc</div>
      <div className="store-icons">
        <p>Get Our App</p>
        <ul>
          <a
            
          >
            <img src={play_store} alt="Get it on Google Play" />
          </a>
          <a
            
          >
            <img src={app_store} alt="Download on the App Store" />
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
