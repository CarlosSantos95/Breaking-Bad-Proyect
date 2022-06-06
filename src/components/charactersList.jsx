import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// imports from material
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
// import custom components
import ImageCardWrapper from './imageCardWrapper';
import Loader from './loader';
// import styles
import '../styles/charactersList.scss';
// import services
import { getAllCharactersBasicData } from '../services/apiCalls';
// import custom reducer hook
import useForm from '../hooks/charactersListHook';
// getting reducer function from the redux
import { resetCurrentUser } from '../store/slices/characters';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Tooltip from '@mui/material/Tooltip';
import { useTranslation } from "react-i18next";

const CharactersList = () => {
    const [t] = useTranslation("global");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // getting data from the store
    const { list: charactersList, dataLoaded } = useSelector(state => state.characters);
    // getting state from reducer hook
    const { mainLoader, updateMainLoader } = useForm({
        initialMainLoader: dataLoaded ? false : true,
    })
    // function to navigate to the specific character
    const goToProfile = (profileId) => {
        navigate(`/profile/${profileId}`);
    }
    // use effect only ejecutes when page loads (did mount)
    useEffect(function () {
        dispatch(resetCurrentUser());
        if (!dataLoaded) {
            // calling api call to get all characters basic info
            dispatch(getAllCharactersBasicData()).then(() => {
                // hide the mainloader
                updateMainLoader(false);
            })
            .catch( error => navigate(`/pageNotFound`))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (mainLoader) {
        return <Loader />
    }
    return (
        <Fragment>
            <ImageList cols={4} className="charactersListWrapper">
                {charactersList.map((item) => (
                    <ImageListItem key={item.char_id}>
                        <Box className="imageWrapper">
                            <ImageCardWrapper img={item.img} name={item.name} customClass="imageList" />
                        </Box>
                        <ImageListItemBar
                            className="imageFooter"
                            title={item.name}
                            subtitle={item.author}
                            actionIcon={
                                <Tooltip title={t('profile.goToProfile')} arrow placement="top">
                                    <IconButton
                                        onClick={() => goToProfile(item.char_id)}
                                        className="profileIcon"
                                        aria-label={`profile ${item.name}`}
                                    >
                                        <AccountBoxIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Fragment>
    )
}

export default CharactersList;