
import React, { useEffect, useState } from 'react';
import '../styles/characterProfile.scss';
import { useParams } from 'react-router-dom';
import { getSpecificCharacterData, getRandomQuote } from '../services/apiCalls';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { setCurrentUser } from '../store/slices/characters';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ImageCardWrapper from '../components/imageCardWrapper';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import Loader from './loader';
import useForm from '../hooks/charactersListHook';

export function CharacterProfile() {
    const [t] = useTranslation("global");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { list: charactersList, currentUser } = useSelector(state => state.characters);
    const { mainLoader, updateMainLoader } = useForm({
        initialMainLoader: true,
    })
    const { id } = useParams();
    const [quote, setQuote] = useState('');
    const [gettingQuote, setGettingQuote] = useState(false);

    const goToCharactersList = () => {
        navigate('/characterslist');
    }
    const getCuote = async () => {
        setGettingQuote(true);
        let newQuote = await getRandomQuote(currentUser.name);
        if (newQuote?.trim() === quote?.trim()) {
            newQuote = await getRandomQuote(currentUser.name);
        }
        setGettingQuote(false);
        setQuote(newQuote);
    }
    // use effect only ejecutes when page loads (did mount)
    useEffect(function () {
        const currentIndex = charactersList.findIndex(e => e.char_id === parseInt(id));
        if (charactersList[currentIndex]?.isFull) {
            dispatch(setCurrentUser(id));
        } else {
            dispatch(getSpecificCharacterData(id)).then((response) => {
                if (response === 'error') {
                    updateMainLoader(false);
                    navigate(`/pageNotFound`);
                }
            })
            .catch(error => {
                updateMainLoader(false);
                navigate(`/pageNotFound`);
            })
        }
        if (Object.keys(currentUser).length !== 0) {
            getCuote();
            updateMainLoader(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser]);

    const { img, birthday, name, nickname, portrayed, occupation, episodes, status } = currentUser;

    const renderQuote = () => {
        if (quote && quote.length > 0) {
            return (
                <div className="miticPhraseWrapper">
                    <div className="miticPhraseLabel">
                        <h3>
                            {t("profile.characterFamousPhrase")}
                        </h3>
                        <Tooltip title={t('profile.refreshSentence')} arrow placement="top">
                            <IconButton
                                onClick={() => getCuote()}
                                className={gettingQuote ? 'reloadIconSpinner' : null}
                                disabled={gettingQuote}
                                aria-label="delete"
                                size="small"
                            >
                                <ReplayIcon />
                            </IconButton>
                        </Tooltip>

                    </div>
                    <h2 className="phrase">{quote}</h2>
                </div>
            )
        } else {
            return (
                <div className="miticPhraseWrapper">
                    <h3>
                        {t("profile.characterFamousPhrase")}
                    </h3>
                    <h2 className="phrase">{t("profile.noFamousPhrase")}</h2>
                </div>
            )
        }
    }

    if (mainLoader) {
        return <Loader />
    }
    return (
        <div className="profileWrapper">
            <Card sx={{ display: 'flex' }} className="profileCard">
                <Box className="imageWrapper">
                    <ImageCardWrapper img={img} name={name} customClass="profileImage" />
                </Box>
                <CardContent className="characterInfoWrapper">
                    <div className="nameWrapper">
                        <span className="nameText">
                            {name} "{nickname}"
                        </span>
                    </div>
                    <Typography component={'div'} variant="body2" color="text.secondary" className="infoContentWrapper">
                        <div className="infoContent">
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <h3>{t("profile.realName")}</h3>
                                    <span>{portrayed}</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <h3>{t("profile.born")}</h3>
                                    <span> {birthday === 'Unknown' ? t("generics.Unknown") : birthday}</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <h3>{t("profile.status")}</h3>
                                    <span>{t(`profile.${status}`)}</span>
                                </Grid>
                                {occupation?.length > 0 &&
                                    <Grid item xs={12} md={6}>
                                        <h3>{t("profile.occupation")}</h3>
                                        <span>{occupation}</span>
                                    </Grid>
                                }
                                {episodes.trim() !== '' &&
                                    <Grid item xs={12}>
                                        <h3>{t("profile.episodes")}</h3>
                                        <span>{episodes}</span>
                                    </Grid>
                                }
                                <Grid item xs={12}>
                                    {renderQuote()}
                                </Grid>
                            </Grid>
                        </div>
                        <div className="buttonsFooter">
                            <Button
                                variant="contained"
                                onClick={() => goToCharactersList()}
                            >
                                {t("generics.back")}
                            </Button>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div >
    )
}