// test-utils.jsx
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import your own reducer
import characters from '../store/slices/characters';

function render(
    ui,
    {
        preloadedState,
        store = configureStore({ reducer: { characters }, preloadedState }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return (
            <Provider store={store}>
                <Router>
                    <Routes>
                        <Route path="/" element={children} />
                    </Routes>
                </Router>
            </Provider>
        )
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }