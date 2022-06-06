
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const PageNotFound = () => {
    const [t] = useTranslation("global");
    const gotoList = () => {
        navigate('/characterslist');
    }
    const navigate = useNavigate();
    return (
        <Card className="notFoundCard">
            <CardContent className="notFoundText">
                <Typography gutterBottom variant="h5" component="div">
                    {t('generics.pageNotFound')}
                </Typography>
                <Typography gutterBottom component="span">
                    {t('generics.pageNotFoundSentence1')}
                </Typography>
                <br />
                <Typography component={"span"} className="buttonWrapper">
                        <Button variant="contained" onClick={() => gotoList()}> {t('generics.goToList')}</Button>
                    </Typography>
            </CardContent>
        </Card>
    );
}

export default PageNotFound;