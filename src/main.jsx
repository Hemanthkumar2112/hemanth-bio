import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/css/responsive.css'
import { store } from './redux/Store.jsx'
import { Provider } from 'react-redux';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { BrowserRouter } from 'react-router-dom'

i18n
  ?.use(initReactI18next) // passes i18n down to react-i18next
  ?.use(LanguageDetector)
  ?.use(HttpApi)
  ?.init({
    // debug: true,
    supportedLngs: ["en", "ta"],
    fallbackLng: "en",
    lng: "en",
    // returnObjects: true,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: true },
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
