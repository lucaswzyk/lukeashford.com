import React from "react";
import "./style.css";
import {Helmet, HelmetProvider} from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {useTranslation} from "react-i18next";
import {introdata, personalInfo} from "../../config_option"; // Import for the image URL and resume
import {Gallery} from "../gallery";
import {About} from "../about";
import {ContactUs} from "../contact";

export const Home = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <div className="home-container">
          <Helmet>
            <meta charSet="utf-8"/>
            <title>{t("personalInfo.name")}</title>
            <meta name="description" content={t("meta.description")}/>
          </Helmet>
          {/* Home Section */}
          <section id="home" className="home">
            <div className="intro_sec d-block d-lg-flex align-items-center">
              <div
                  className="h_bg-image order-1 order-lg-2 h-100"
                  style={{
                    backgroundImage: `url(${introdata.your_img_url})`,
                    backgroundPosition: "70% 30%",
                  }}
                  aria-label={t("intro.profile_image_alt")}
                  role="img"
              ></div>
              <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
                <div className="align-self-center">
                  <div className="intro mx-auto">
                    <h2 className="mb-1x">{t("personalInfo.name")}</h2>
                    <h1 className="fluidz-48 mb-1x">
                      <Typewriter
                          options={{
                            strings: [
                              t("intro.animated.first"),
                              t("intro.animated.second"),
                              t("intro.animated.third"),
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            deleteSpeed: 10,
                          }}
                      />
                    </h1>
                    <p className="mb-1x">{t("intro.description")}</p>
                    <div className="intro_btn-action">
                      <a href="/#gallery" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('gallery').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <div id="button_gallery" className="ac_btn btn button_h">
                          {t("navigation.gallery")}
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                      <a href="/#about" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <div id="button_about" className="ac_btn btn button_h">
                          {t("navigation.about")}
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                      <a href="/#contact" onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
                      }}>
                        <div id="button_contact" className="ac_btn btn button_h">
                          {t("navigation.contact")}
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                    </div>
                    <div className="intro_btn-action pb-5 mt-3">
                      <a href={personalInfo.resume_url} target="_blank" rel="noopener noreferrer">
                        <div id="button_resume" className="ac_btn btn button_h">
                          {t("download_resume")}
                          <div className="ring one"></div>
                          <div className="ring two"></div>
                          <div className="ring three"></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="gallery">
            <Gallery/>
          </section>

          {/* About Me Section */}
          <section id="about" className="about">
            <About/>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <ContactUs/>
          </section>
        </div>
      </HelmetProvider>
  );
};
