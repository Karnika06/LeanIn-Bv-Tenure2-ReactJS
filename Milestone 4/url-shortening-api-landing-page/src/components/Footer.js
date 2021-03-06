import styled from "styled-components";
import logo from "../img/whitelogo.svg";
import facebook from "../img/icon-facebook.svg";
import instagram from "../img/icon-instagram.svg";
import pinterest from "../img/icon-pinterest.svg";
import twitter from "../img/icon-twitter.svg";
const Footer = () => {
  return (
    <Footerdiv>
      <div className="container footer">
        <div className="footer-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="features footer-list">
          <h4>Features</h4>
          <span>Link Shortening</span>
          <span> Branded Links</span>
          <span>Analytics</span>
        </div>
        <div className="resources footer-list">
          <h4> Resources</h4>
          <span>Blog</span>
          <span>Developers</span>
          <span>Support</span>
        </div>
        <div className="company footer-list">
          <h4> Company</h4>
          <span>About</span>
          <span>Our Team</span>
          <span>Careers</span>
          <span>Contact</span>
        </div>
        <div className="social">
          <img src={facebook} alt="fb" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="pinterest" />
          <img src={instagram} alt="instagram" />
        </div>
      </div>
    </Footerdiv>
  );
};

const Footerdiv = styled.div`
  background: hsl(260, 8%, 14%);
  .footer {
    padding: 3rem 0;
    padding-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .social {
      margin: 0.5rem;
      display: flex;
      gap: 1rem;
      margin: 4%;
      img {
        cursor: pointer;
      }
    }

    .footer-logo {
      flex-basis: 20%;
      margin: 4%
    }
    .footer-list {
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
      margin-top: 1%;
      margin-right: 5%;
      margin-bottom: 5%;
      gap: 0.5rem;
      h4 {
        color: hsl(0, 0%, 75%);
      }
      span {
        font-size: 15px;
        color: hsl(257, 7%, 63%);
        cursor: pointer;
        align: left;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  @media (max-width: 950px) {
    .footer {
      
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
export default Footer;
