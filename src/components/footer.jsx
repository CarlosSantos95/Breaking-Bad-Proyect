import React from "react";
import bbLogo from '../assets/img/logoFooter.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTranslation } from "react-i18next";
export default function Footer() {
    const [t] = useTranslation("global");
    return (
        <div className="footer">
            <img className="footerLogo" alt="footer logo" src={bbLogo} />
            <span className="footerText">
                {t("footer.allRightsLabel")} &copy;</span>
            <div className="footerSN">
                <a alt="igLogo" target="_blank" rel="noreferrer" className="footerLogo footerLogoIg" href="https://www.instagram.com/breakingbad">
                    <InstagramIcon />
                </a>
                <a alt="fbLogo" target="_blank" rel="noreferrer" className="footerLogo" href="https://www.facebook.com/BreakingBad">
                    <FacebookIcon />
                </a>
            </div>
        </div>
    );
}