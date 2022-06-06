import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from "react-i18next";
import '../styles/header.scss'
import { changeLanguageSetting, getCurrentLanguageFlag } from "../hooks/translationsHook";

export default function Header() {
  const [t] = useTranslation("global");
  return (
    <Box sx={{ flexGrow: 1 }} className="header">
      <AppBar position="static" className="navbar">
        <Typography variant="h6" color="inherit" component="div" className="headerLabel">
          {t("header.title")}
        </Typography>
        <Tooltip title={t('header.changeLanguage')} arrow>
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => changeLanguageSetting()} >
            <img className="languageLogo" alt="language icon" src={getCurrentLanguageFlag()}></img>
          </IconButton>
        </Tooltip>
      </AppBar>
    </Box>
  );
}
