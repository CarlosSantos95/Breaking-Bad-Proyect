import { createSlice } from '@reduxjs/toolkit';
export const charactersSlice = createSlice({
    name: 'characters',
    initialState: {
        list: [],
        dataLoaded: false,
        currentUser: {} 
    },
    reducers: {
        // function to set the characters into the store and change the loader value
        setCharactersList: (state, action) => {
            state.dataLoaded = action.payload.length === 0 ? false : true;
            state.list = state.list.concat(action.payload);
        },
        // function to upgrade the character info into the store and set the current user store
        setCharacterData: (state, action) => {
            let character = state.list.filter((user) => user.char_id === action.payload.char_id);
            if (character) {
                const currentIndex = state.list.findIndex(e => e.char_id === action.payload.char_id)
                character = { ...action.payload }
                state.currentUser = character;
                state.list[currentIndex] = character;
            }
        },
        // set the current user to the store 
        setCurrentUser: (state, action) => {
            const currentIndex = state.list.findIndex(e => e.char_id === parseInt(action.payload));
            let character = state.list.filter((user) => user.char_id === parseInt(action.payload));
            if (character) {
                state.currentUser = state.list[currentIndex];
            }
        },
        // reset the current user
        resetCurrentUser: (state, action) => {
            state.currentUser = {};
        }
    }
});

export const { setCharactersList, setCharacterData, setCurrentUser, resetCurrentUser } = charactersSlice.actions

export default charactersSlice.reducer;