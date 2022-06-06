import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './app';
import { I18nextProvider } from 'react-i18next';
import { initTranslation } from "./hooks/translationsHook";
const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider i18n={initTranslation()}>
        <App />
    </I18nextProvider>
)