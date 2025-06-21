import React from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Headermain = () => {
  const { t } = useTranslation();

  const handleLogoClick = () => {
    window.location.href = "/portfolio";
  };

  return (
    <header className="fixed-top site__header">
      <div className="d-flex align-items-center justify-content-between">
        <a
          href="/portfolio"
          className="navbar-brand nav_ac"
          onClick={handleLogoClick}
        >
          {t("logotext")}
        </a>
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Headermain;
