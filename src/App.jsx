import { useState } from "react";
import "./App.css";

/* images */
import Logo from "./assets/images/logo.svg";
import ImgHeader from "./assets/images/illustration-1.svg";
import ImgFeature from "./assets/images/illustration-2.svg";
import IconArrow from "./assets/images/icon-arrow.svg";
import IconQuotes from "./assets/images/icon-quotes.svg";
import Avatar from "./assets/images/avatar-testimonial.jpg";

function App() {
  const [email0, setEmail0] = useState("");
  const [error0, setError0] = useState(false);
  const [email1, setEmail1] = useState("");
  const [error1, setError1] = useState(false);

  /* misc functions */
  function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
  }

  /* handlers */
  const handleSubmit = (e, index) => {
    e.preventDefault();

    const email = index === 0 ? email0 : email1;

    if (!isEmail(email)) {
      if (index === 0) {
        setError0(true);
      } else {
        setError1(true);
      }
      return;
    }

    setError0(false);
    setError1(false);
  };

  return (
    <>
      <nav className="nav block--padding">
        <img className="nav__logo" src={Logo} alt="logo img"></img>
        <div className="nav__container">
          <a className="nav__item">Features</a>
          <a className="nav__item">Team</a>
          <a className="nav__item">Sign In</a>
        </div>
      </nav>

      <header className="header block--padding">
        <div className="header__content">
          <h1 className="text--bold text--headings">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <form className="form__email-container">
            <div className="email-wrapper">
              <input
                className={"email text--body" + (error0 ? " error__email" : "")}
                type="email"
                placeholder="Enter your email..."
                value={email0}
                onChange={(e) => setEmail0(e.target.value)}
              ></input>
              {error0 ? (
                <div className="error__msg">Please check your email</div>
              ) : null}
            </div>
            <button
              className="button text--headings text--bold"
              type="submit"
              onClick={(e) => handleSubmit(e, 0)}
            >
              Get Started
            </button>
          </form>
        </div>
        <div className="header__img-wrapper">
          <img className="header__img" src={ImgHeader} alt="header img"></img>
        </div>
      </header>

      <div className="divider"></div>

      <main className="main block--padding">
        <div className="main__content">
          <h1 className="text--bold text--headings">
            Stay productive, wherever you are
          </h1>
          <div className="main__descriptions">
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a className="main__cta">
              See how Fylo works{" "}
              <img
                className="main__arrow"
                src={IconArrow}
                alt="icon arrow"
              ></img>
            </a>
          </div>

          <div className="testimonial">
            <img
              className="testimonial__quotes-img"
              src={IconQuotes}
              alt="quotes img"
            ></img>
            <p className="testimonial__text">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="testimonial__profile">
              <img
                className="testimonial__avatar"
                src={Avatar}
                alt="testimonial avatar"
              ></img>
              <div className="testimonial__person">
                <p className="text--bold">Kyle Burton</p>
                <p className="testimonial__person-title">
                  Founder & CEO, Huddle
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="main__img-wrapper">
          <img className="main__img" src={ImgFeature} alt="main img"></img>
        </div>
      </main>

      <footer className="footer block--padding">
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/exchyphen" target="_blank">
            exc
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
