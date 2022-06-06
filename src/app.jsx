import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Body />
            <Footer />
        </Provider>
    )
}

export default App;