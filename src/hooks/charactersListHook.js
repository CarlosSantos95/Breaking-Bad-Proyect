import { useReducer } from 'react';
const ACTIONS = {
    UPDATE_MAIN_LOADER: 'updateMainLoader',
    // UPDATE_LOADMORE: 'updateLoadMore',
    // UPDATE_SHOW_MORE_BUTTON: 'updateShowMoreButton',
    // UPDATE_OFFSET: 'updateOffset',
    // UPDATE_CHARACTERSLIST: 'updateCharactersList'
}
const ACTIONS_REDUCERS = {
    [ACTIONS.UPDATE_MAIN_LOADER]: (state, action) => ({
        ...state,
        mainLoader: action.payload
    }),
    // [ACTIONS.UPDATE_LOADMORE]: (state, action) => ({
    //     ...state,
    //     loadMore: action.payload,

    // }),
    // [ACTIONS.UPDATE_SHOW_MORE_BUTTON]: (state, action) => ({
    //     ...state,
    //     showMoreButton: action.payload
    // }),
    // [ACTIONS.UPDATE_OFFSET]: (state, action) => ({
    //     ...state,
    //     offset: action.payload
    // }),
    // [ACTIONS.UPDATE_CHARACTERSLIST]: (state, action) => ({
    //     ...state,
    //     charactersList: action.payload
    // }),
}

const REDUCER = (state, action) => {
    const actionReducer = ACTIONS_REDUCERS[action.type];
    return actionReducer ? actionReducer(state, action) : state;
}

export default function useForm ({ initialMainLoader/*, initialLoadmore, initialShowMoreButton, initialOffset, initialCharactersList*/ }) {
    const [state, dispatch] = useReducer(REDUCER, {
        mainLoader: initialMainLoader,
        // loadMore: initialLoadmore,
        // showMoreButton: initialShowMoreButton,
        // offset: initialOffset,
        // charactersList: initialCharactersList
    });
    const { mainLoader/*, loadMore, showMoreButton, offset, charactersList*/ } = state;
    return {
        mainLoader,
        updateMainLoader: mainLoader => dispatch({ type: ACTIONS.UPDATE_MAIN_LOADER, payload: mainLoader }),
        // loadMore,
        // showMoreButton,
        // offset,
        // charactersList,
        // updateLoadMore: loadMore => dispatch({ type: ACTIONS.UPDATE_LOADMORE, payload: loadMore }),
        // updateShowMoreButton: showMoreButton => dispatch({ type: ACTIONS.UPDATE_SHOW_MORE_BUTTON, payload: showMoreButton }),
        // updateOffset: offset => dispatch({ type: ACTIONS.UPDATE_OFFSET, payload: offset }),
        // updateCharactersList: chractersList => dispatch({ type: ACTIONS.UPDATE_CHARACTERSLIST, payload: chractersList })
    }
}