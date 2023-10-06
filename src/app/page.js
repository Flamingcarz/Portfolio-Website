import styles from "./globals.css";
import SocialLink from "../components/social-link";
import PageButton from "../components/PageButton";
import Image from "next/image";

export default function Home() {
  return ( <div className="header-container">
    <div className="up-container">
      <div className="header">
        <table className="table">
          <tr>
            <td>
              <table className="tab">
              <tr>
                <td style={{width: 40 + "%"}}>
                <Image 
                  src="/profilepic.jpg" 
                  alt="Profile Pic" 
                  className="profile-pic"
                  width="35"
                  height="35"
                />
                </td>
                <td style={{width: 40 + "%"}}>
                  <h1 className="name">Devaki Prasad. </h1>
                  <h3 className="tagline">
                    <i>Full-time Student, Coffee Lover </i>
                      and a 
                    <i> Motor Sport Entusiast.</i>
                  </h3>
                </td>
              </tr>
                <tr>
                  <td>
                    <div className="sociallink-container">
                      <SocialLink href="https://github.com/Flamingcarz" text="GitHub" />
                      <SocialLink href="" text="Instagram" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="pagebutton-container">
                      <PageButton text="About Me" href="/about" title="View About Me"/>
                      <PageButton 
                        text="My Projects"
                        href="/projects"
                        title="View My Projects"
                      />
                      <PageButton text="My Blog" href="/blog" title="View My Blog"/>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div className="about-conatiner">
      <h4>
        I am currently studying at PES University Bangalore. 
      </h4>
      <h4>
        My field of interest is Automobile Engineering.
      </h4>
      <h4>
        I am always ready to learn new things to progress towards my goal!!
      </h4>
    </div>
  </div>
  );
}
