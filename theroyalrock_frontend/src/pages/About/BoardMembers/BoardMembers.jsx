import { React, useRef } from "react";
import "./BoardMembers.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import photo1 from "../../../assets/images/BoardMembers/Boss.jpg";
import photo2 from "../../../assets/images/BoardMembers/Anthoney.jpg";
import photo3 from "../../../assets/images/BoardMembers/Bild-PaaEkow.jpg";
import photo4 from "../../../assets/images/BoardMembers/David.jpg";
import photo5 from "../../../assets/images/BoardMembers/im5.png";
import photo6 from "../../../assets/images/BoardMembers/im6.png";
import photo7 from "../../../assets/images/BoardMembers/im7.png";
import photo8 from "../../../assets/images/BoardMembers/Isaac.jpg";

const BoardMembers = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="boardMembers">
      <ArrowBackIcon
        style={{ fontSize: 50, color: "black" }}
        className="m_back-btn"
        onClick={slideBackward}
      />
      <ArrowForwardIcon
        style={{ fontSize: 50, color: "black" }}
        className="m_next-btn"
        onClick={slideForward}
      />

      <div className="members-slider">
        <ul ref={slider}>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo1} alt="" loading="lazy" />
                <div>
                  <h3>Thomas Sky Leblanc Lorenz Kpobi </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                My name is Thomas Sky Kpobi LeBlanc and I am the husband of
                Princess NaaDjamah LeBlanc Kpobi. I am the founder of Royal Rock
                Foundation. My mission is to raise capital for this foundation
                so that a technical school for refrigeration, air conditioning,
                catering and hospitality can be established in Accra, as most
                schools in Accra are not of international standard. Through my
                father’s upbringing and German virtue, I have the accuracy and
                straightforwardness to promote education for future generations
                and lay the foundation for better education. I can proudly say
                that it is always a pleasure to work with and train Ghanaians.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo5} alt="" loading="lazy" />
                <div>
                  <h3>Dulcie Rita NaaDjamah LeBlanc Kpobi </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                I am Rita and I have been working in a health system for more
                than 10 years. My job is to pursue policies aimed at limiting
                the growth of a population, especially in poor or densely
                populated parts of the world, through contraception or
                sterilization programs. In response to the fact that the world’s
                population would soon outstrip food supplies, a movement to
                limit the number of births and thus the growth of the world’s
                population emerged at the beginning of the twentieth century.
                This is an area I am familiar with and am working on solutions
                for. This is a responsible task because the world’s resources
                are not infinite.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo2} alt="" loading="lazy" />
                <div>
                  <h3>Anthoney Nana Kwarteng</h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                I have been working in the field of IT technology for many years
                and it is always a challenge to implement and adapt to the
                continuous growth of the business market. It takes a high level
                of responsibility and experience to be able to constantly
                provide solutions to the IT sector. This work includes not only
                hardware but also the complete software. My knowledge of the
                various operating systems means that I am constantly facing up
                to new challenges.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo3} alt="" loading="lazy" />
                <div>
                  <h3>Lector PaaEkow Quaye </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                I am a teacher and researcher with 35 years of experience at
                various universities in California, Canada, Nigeria and Ghana. I
                teach Communication, Business Administration, Theology and
                Research Methods as well as Marketing and Public Relations at
                the Central University Accra. As a Pastor i have the skills to
                be a Speaker in the Foundation as well.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo4} alt="" loading="lazy" />
                <div>
                  <h3>David Boye Quartey </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                Hello, my name is David and I am 38 years old. I have been
                handling cargo in the international port of Tema for 18 years.
                As a logistics entrepreneur, the work is a trustworthy activity.
                International companies rely on me to ensure that all goods are
                delivered safely to the desired destination. This is what I
                stand for with my service in the port of Tema.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo6} alt="" loading="lazy" />
                <div>
                  <h3>Mathias Jenz </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                My name is Mathias and I have been self-employed for 20 years.
                For 15 years I have been working in the technical field for
                hospitals in Nigeria, Cameroon and Togo, supplying medical
                equipment to the surrounding hospitals. This task is a challenge
                and requires my full concentration. My wife supports me in this
                program because it is not only demanding but also fun.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo7} alt="" loading="lazy" />
                <div>
                  <h3>Michael Lorenz </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                Hello, I am Michael and I support Matthias with the
                transportation of hospital equipment and surgical material. I
                have been working in this field for 10 years. The work is
                sometimes very strenuous.
              </p>
            </div>
          </li>
          <li>
            <div className="m-slide">
              <div className="member-info">
                <img src={photo8} alt="" loading="lazy" />
                <div>
                  <h3>Isaac Appiah </h3>
                  <span>CEO</span>
                </div>
              </div>
              <p>
                I studied at Humberside University in Grimsby in the North East
                of England. Grimsby, England is the university for specialist
                engineers known for the development and application of
                refrigeration systems. I have 40 years experience with two-stage
                ammonia (NH3) systems and Freon systems for food processing,
                preservation and comfort cooling systems. Together with Thomas,
                I have decided to pass on this expertise to the next generation.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BoardMembers;
