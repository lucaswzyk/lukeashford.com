import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Gallery } from "../gallery";
import { About } from "../about";
import { ContactUs } from "../contact";

export const Home = () => {
  return (
    <HelmetProvider>
      <div className="home-container">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        {/* Home Section */}
        <section id="home" className="home">
          <div className="intro_sec d-block d-lg-flex align-items-center">
            <div
              className="h_bg-image order-1 order-lg-2 h-100"
              style={{
                backgroundImage: `url(${introdata.your_img_url})`,
                backgroundPosition: "center 8%",
              }}
            ></div>
            <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
              <div className="align-self-center">
                <div className="intro mx-auto">
                  <h2 className="mb-1x">{introdata.title}</h2>
                  <h1 className="fluidz-48 mb-1x">
                    <Typewriter
                      options={{
                        strings: [
                          introdata.animated.first,
                          introdata.animated.second,
                          introdata.animated.third,
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 10,
                      }}
                    />
                  </h1>
                  <p className="mb-1x">{introdata.description}</p>
                  <div className="intro_btn-action pb-5">
                    <a href="#gallery" className="text_2">
                      <div id="button_p" className="ac_btn btn">
                        My Gallery
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="#about">
                      <div id="button_h" className="ac_btn btn">
                        About Me
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    <a href="#contact">
                      <div id="button_h" className="ac_btn btn">
                        Contact Me
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
          <Gallery />
        </section>

        {/* About Me Section */}
        <section id="about" className="about">
          <About />
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <ContactUs />
        </section>
      </div>
    </HelmetProvider>
  );
};
