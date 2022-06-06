
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BBWP from '../assets/img/BBWP.jpg';
import '../styles/welcome.scss';
const Welcome = () => {
    const [t] = useTranslation("global");
    const gotoList = () => {
        navigate('/characterslist');
    }
    const navigate = useNavigate();
    return (
        <Card className="welcomeCard">
            <CardMedia
                className="wallpaperImage"
                component="img"
                height="140"
                image={BBWP}
                alt="Breaking Bad Wallpaper"
            />
            <CardContent className="welcomeText">
                <Typography gutterBottom variant="h5" component="div">
                    {t('welcome.title')}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <Typography component={"span"} variant={"body2"}>
                        {t('welcome.sentence1')}
                    </Typography>
                    <br />
                    <Typography component={"span"} variant={"body2"}>
                        {t('welcome.sentence2')}
                    </Typography>
                    <br />
                    <Typography component={"span"} variant={"body2"}>
                        {t('welcome.sentence3')}
                    </Typography>
                    <br />
                    <Typography component={"span"} className="buttonWrapper">
                        <Button variant="contained" onClick={() => gotoList()}> {t('generics.goToList')}</Button>
                    </Typography>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Welcome;