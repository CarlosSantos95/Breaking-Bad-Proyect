// TODO catch response errors
import { setCharactersList, setCharacterData } from '../store/slices/characters';
// eslint-disable-next-line react-hooks/rules-of-hooks
// basic function to get a specific api call with a custom param
function getUrlAPI(param) {
    return `https://www.breakingbadapi.com/api/${param}`;
}

// api call to get all characters basic data
export const getAllCharactersBasicData = () => (dispatch) => {
    const url = getUrlAPI('characters');
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const finalResult = response.map(character => {
                const { name, img, char_id } = character;
                return { name, img, char_id };
            })
            dispatch(setCharactersList(finalResult))
        })
        .catch(error => {
            console.log('ERROR', error);
            return error;
        })
}

// api call to get data from a specific character
export const getSpecificCharacterData = (id) => (dispatch) => {
    const url = getUrlAPI(`characters/${id}`);
    return fetch(url)
        .then(res => res.json())
        .then(async response => {
            if (response.name === 'error') return 'error';
            let character = response[0];
            const episodes = await getBBEpisodesByCharacter(character?.name);
            const occupation = character?.occupation?.join(', ')
            character.occupation = occupation;
            character.episodes = episodes.join(", ");
            character.isFull = true;
            dispatch(setCharacterData(character));
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}

// get random quote for a character by param
export function getRandomQuote(name) {
    const parseName = name?.split(' ').join('+')
    const url = getUrlAPI(`quote/random?author=${parseName}`);
    return fetch(url)
        .then(res => res.json())
        .then(async response => {
            return response[0]?.quote;
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}

// get random quote for a character by param
async function getBBEpisodesByCharacter(name) {
    const url = getUrlAPI(`episodes?series=Breaking+Bad`);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const result = response
                .filter(episode => episode.characters.indexOf(name) !== -1)
                .map(element => element.title)
            return result;
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}

// get random quote for a character by param
export const getCharactersByOffset = (offset) => (dispatch) => {
    const url = getUrlAPI(`characters?limit=20&offset=${offset}`);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const finalResult = response.map(character => {
                const { name, img, char_id } = character;
                return { name, img, id: char_id };
            })
            dispatch(setCharactersList(finalResult))
        })
        .catch(error => {
            console.log('ERROR', error)
            return error;
        })
}