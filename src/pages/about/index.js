import React from "react";
import "./style.css";
import {HelmetProvider} from "react-helmet-async";
import {Col, Container, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import StarRating from "../../components/starBar";

export const About = () => {
  const {t} = useTranslation();

  return (
      <HelmetProvider>
        <Container className="About-header">
          <Row className="mb-5 mt-3 pt-md-3">
            <Col lg="12">
              <h1 className="display-4 mb-4">{t("navigation.about")}</h1>
              <hr className="separator-line"/>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">
                {t("about.sections.information")}
              </h3>
            </Col>
            <Col lg="7">
              <p>
                {t("about.sections.personal_info.blonde")}
                <br/>
                {t("about.sections.personal_info.eyes")}
                <br/>
                1,96 m<br/>
                {t("about.sections.personal_info.build")}
                <br/>
                <br/>
                {t("about.sections.personal_info.birth")}
                <br/>
                {t("about.sections.personal_info.nationality")}
                <br/>
                {t("about.sections.personal_info.playing_age")}: {t("personalInfo.playing_age")}
                <br/>
                {t("about.sections.personal_info.location")}
                <br/>
                {t("about.sections.personal_info.license")}
              </p>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">{t("about.title")}</h3>
            </Col>
            <Col lg="7" className="d-flex align-items-center">
              <div>
                <p>{t("about.aboutme")}</p>
              </div>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">
                {t("about.sections.recent_projects")}
              </h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                {t('worktimeline', {returnObjects: true}).map((data, i) => {
                  return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                  );
                })}
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">
                {t("about.sections.skills")}
              </h3>
            </Col>
            <Col lg="7">
              <Row>
                {t('skills', {returnObjects: true}).map((data, i) => (
                    <Col xs={12} sm={6} md={4} key={i} className="mb-3">
                      <h3 className="progress-title">
                        {data.name}
                        <StarRating fullStars={data.value}/>
                      </h3>
                    </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">
                {t("about.sections.languages")}
              </h3>
            </Col>
            <Col lg="7">
              <Row>
                {t('languages', {returnObjects: true}).map((data, i) => (
                    <Col xs={12} sm={6} md={4} key={i} className="mb-3">
                      <h3 className="progress-title">
                        {data.name}
                        <StarRating fullStars={data.value}/>
                      </h3>
                    </Col>
                ))}
              </Row>
            </Col>
          </Row>
          <Row className="sec_sp">
            <Col lang="5">
              <h3 className="color_sec py-4">
                {t("about.sections.interests")}
              </h3>
            </Col>
            <Col lg="7">
              {t('other_interests', {returnObjects: true}).map((data, i) => {
                return (
                    <div className="service_ py-4" key={i}>
                      <h5 className="service__title">{data.title}</h5>
                      <p>{data.description}</p>
                    </div>
                );
              })}
            </Col>
          </Row>
        </Container>
      </HelmetProvider>
  );
};
